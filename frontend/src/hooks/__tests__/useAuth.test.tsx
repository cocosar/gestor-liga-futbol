import { describe, test, expect, vi, beforeEach } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import React from 'react';
import { useAuth } from '../useAuth';
import authReducer from '../../store/slices/auth/authSlice';
import * as thunks from '../../store/slices/auth/thunks';
import { Usuario, LoginData, RegisterData } from '../../types';

// Tipo para store preloaded state
interface PreloadedState {
  auth: {
    user: Usuario | null;
    token: string | null;
    isAuthenticated: boolean;
    loading: boolean;
    error: string | null;
  };
}

// Mock de las acciones asíncronas (thunks)
vi.mock('../../store/slices/auth/thunks', () => ({
  login: vi.fn(),
  register: vi.fn(),
  getCurrentUser: vi.fn(),
  logout: vi.fn()
}));

// Mock del usuario para pruebas
const mockUser: Usuario = {
  _id: '1',
  nombre: 'Test',
  apellido: 'User',
  email: 'test@example.com',
  rol: 'admin',
  activo: true,
  fechaCreacion: '2025-03-31T00:00:00.000Z'
};

// Configuración de wrapper para renderHook con Redux Provider
const createWrapper = (initialState: { auth: PreloadedState['auth'] }) => {
  const store = configureStore({
    reducer: {
      auth: authReducer
    },
    preloadedState: initialState
  });
  
  return ({ children }: { children: React.ReactNode }) => (
    <Provider store={store}>{children}</Provider>
  );
};

describe('useAuth Hook', () => {
  // Estado inicial para tests
  const initialState = {
    auth: {
      user: mockUser,
      token: 'test-token',
      isAuthenticated: true,
      loading: false,
      error: null
    }
  };
  
  // Resetear mocks entre pruebas
  beforeEach(() => {
    vi.clearAllMocks();
  });
  
  test('debería retornar el estado correctamente', () => {
    const { result } = renderHook(() => useAuth(), {
      wrapper: createWrapper(initialState)
    });
    
    // Verificar que el hook retorna los valores correctos
    expect(result.current.user).toEqual(mockUser);
    expect(result.current.isAuthenticated).toBe(true);
    expect(result.current.loading).toBe(false);
    expect(result.current.error).toBeNull();
    expect(result.current.role).toBe('admin');
  });
  
  test('debería llamar a login correctamente', () => {
    const loginData: LoginData = { 
      email: 'test@example.com', 
      password: 'password' 
    };
    
    // Mock de la función dispatch que retorna el thunk
    const mockThunkFunction = vi.fn();
    (thunks.login as unknown as jest.Mock).mockReturnValue(mockThunkFunction);
    
    const { result } = renderHook(() => useAuth(), {
      wrapper: createWrapper(initialState)
    });
    
    act(() => {
      result.current.login(loginData);
    });
    
    // Verificar que thunks.login fue llamado con los datos correctos
    expect(thunks.login).toHaveBeenCalledWith(loginData);
    // No podemos verificar que dispatch fue llamado con el thunk porque lo hemos mockeado
  });
  
  test('debería llamar a register correctamente', () => {
    const registerData: RegisterData = { 
      firstName: 'Test', 
      lastName: 'User', 
      email: 'test@example.com', 
      password: 'password',
      role: 'admin'
    };
    
    // Mock de la función dispatch que retorna el thunk
    const mockThunkFunction = vi.fn();
    (thunks.register as unknown as jest.Mock).mockReturnValue(mockThunkFunction);
    
    const { result } = renderHook(() => useAuth(), {
      wrapper: createWrapper(initialState)
    });
    
    act(() => {
      result.current.register(registerData);
    });
    
    // Verificar que thunks.register fue llamado con los datos correctos
    expect(thunks.register).toHaveBeenCalledWith(registerData);
  });
  
  test('debería llamar a logout correctamente', () => {
    // Mock de la función dispatch que retorna el thunk
    const mockThunkFunction = vi.fn();
    (thunks.logout as unknown as jest.Mock).mockReturnValue(mockThunkFunction);
    
    const { result } = renderHook(() => useAuth(), {
      wrapper: createWrapper(initialState)
    });
    
    act(() => {
      result.current.logout();
    });
    
    // Verificar que thunks.logout fue llamado
    expect(thunks.logout).toHaveBeenCalled();
  });
  
  test('debería llamar a getCurrentUser correctamente', () => {
    // Mock de la función dispatch que retorna el thunk
    const mockThunkFunction = vi.fn();
    (thunks.getCurrentUser as unknown as jest.Mock).mockReturnValue(mockThunkFunction);
    
    const { result } = renderHook(() => useAuth(), {
      wrapper: createWrapper(initialState)
    });
    
    act(() => {
      result.current.getCurrentUser();
    });
    
    // Verificar que thunks.getCurrentUser fue llamado
    expect(thunks.getCurrentUser).toHaveBeenCalled();
  });
  
  test('hasRole debería retornar true para un rol correcto', () => {
    const { result } = renderHook(() => useAuth(), {
      wrapper: createWrapper(initialState)
    });
    
    // Usuario con rol 'admin'
    expect(result.current.hasRole('admin')).toBe(true);
    expect(result.current.hasRole('coach')).toBe(false);
  });
  
  test('hasRole debería mapear correctamente roles del backend', () => {
    // Estado con usuario que tiene un rol del backend
    const stateWithBackendRole = {
      auth: {
        ...initialState.auth,
        user: { ...mockUser, rol: 'usuario' }
      }
    };
    
    const { result } = renderHook(() => useAuth(), {
      wrapper: createWrapper(stateWithBackendRole)
    });
    
    // 'usuario' del backend debería mapearse a 'player' en el frontend
    expect(result.current.hasRole('player')).toBe(true);
    expect(result.current.hasRole('admin')).toBe(false);
  });
}); 