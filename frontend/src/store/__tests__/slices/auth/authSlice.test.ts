import { describe, test, expect, beforeEach, vi } from 'vitest';
import authReducer, { 
  authStart, 
  authSuccess, 
  authFail, 
  logout, 
  updateProfile, 
  clearErrors 
} from '../../../slices/auth/authSlice';
import { Usuario } from '../../../../types';

// Mock de localStorage para las pruebas
const localStorageMock = {
  getItem: vi.fn(),
  setItem: vi.fn(),
  removeItem: vi.fn(),
  clear: vi.fn(),
  length: 0,
  key: vi.fn()
};

// Sobrescribir localStorage global en los tests
Object.defineProperty(window, 'localStorage', {
  value: localStorageMock,
  writable: true
});

describe('Auth Slice', () => {
  // Estado inicial esperado cuando no hay datos en localStorage
  const initialEmptyState = {
    user: null,
    token: null,
    isAuthenticated: false,
    loading: false,
    error: null,
  };

  // Resetear mocks entre pruebas
  beforeEach(() => {
    vi.clearAllMocks();
    // Simular que no hay datos en localStorage
    localStorageMock.getItem.mockReturnValue(null);
  });

  test('debería retornar el estado inicial', () => {
    // Estado inicial cuando localStorage está vacío
    expect(authReducer(undefined, { type: 'unknown' })).toEqual(initialEmptyState);
  });

  test('debería manejar authStart correctamente', () => {
    const action = authStart();
    const state = authReducer(initialEmptyState, action);
    
    expect(state.loading).toBe(true);
    expect(state.error).toBe(null);
  });

  test('debería manejar authSuccess correctamente', () => {
    const mockUser: Usuario = {
      _id: '1',
      nombre: 'Test',
      apellido: 'User',
      email: 'test@example.com',
      rol: 'admin',
      activo: true,
      fechaCreacion: '2025-03-31T00:00:00.000Z'
    };
    
    const mockToken = 'test-token';
    const action = authSuccess({ user: mockUser, token: mockToken });
    const state = authReducer(initialEmptyState, action);
    
    // Verificar que el estado se actualiza correctamente
    expect(state.user).toEqual(mockUser);
    expect(state.token).toEqual(mockToken);
    expect(state.isAuthenticated).toBe(true);
    expect(state.loading).toBe(false);
    expect(state.error).toBe(null);
    
    // Verificar que localStorage se actualiza
    expect(localStorageMock.setItem).toHaveBeenCalledWith('token', mockToken);
    expect(localStorageMock.setItem).toHaveBeenCalledWith('user', JSON.stringify(mockUser));
  });

  test('debería manejar authFail correctamente', () => {
    const errorMessage = 'Error de autenticación';
    const action = authFail(errorMessage);
    const state = authReducer(initialEmptyState, action);
    
    expect(state.user).toBe(null);
    expect(state.token).toBe(null);
    expect(state.isAuthenticated).toBe(false);
    expect(state.loading).toBe(false);
    expect(state.error).toBe(errorMessage);
  });

  test('debería manejar logout correctamente', () => {
    // Estado inicial con usuario autenticado
    const initialAuthState = {
      user: { _id: '1', nombre: 'Test', apellido: 'User', email: 'test@example.com', rol: 'admin', activo: true, fechaCreacion: '2025-03-31T00:00:00.000Z' },
      token: 'test-token',
      isAuthenticated: true,
      loading: false,
      error: null,
    };
    
    const action = logout();
    const state = authReducer(initialAuthState, action);
    
    // Verificar que el estado se resetea
    expect(state.user).toBe(null);
    expect(state.token).toBe(null);
    expect(state.isAuthenticated).toBe(false);
    expect(state.loading).toBe(false);
    expect(state.error).toBe(null);
    
    // Verificar que localStorage se limpia
    expect(localStorageMock.removeItem).toHaveBeenCalledWith('token');
    expect(localStorageMock.removeItem).toHaveBeenCalledWith('user');
  });

  test('debería manejar updateProfile correctamente', () => {
    // Estado inicial con usuario autenticado
    const initialAuthState = {
      user: { _id: '1', nombre: 'Test', apellido: 'User', email: 'test@example.com', rol: 'admin', activo: true, fechaCreacion: '2025-03-31T00:00:00.000Z' },
      token: 'test-token',
      isAuthenticated: true,
      loading: false,
      error: null,
    };
    
    const updatedUser: Usuario = {
      ...initialAuthState.user as Usuario,
      nombre: 'Updated',
      apellido: 'Name'
    };
    
    const action = updateProfile(updatedUser);
    const state = authReducer(initialAuthState, action);
    
    // Verificar que solo se actualiza el usuario
    expect(state.user).toEqual(updatedUser);
    expect(state.token).toEqual(initialAuthState.token);
    expect(state.isAuthenticated).toBe(true);
    
    // Verificar que localStorage se actualiza
    expect(localStorageMock.setItem).toHaveBeenCalledWith('user', JSON.stringify(updatedUser));
  });

  test('debería manejar clearErrors correctamente', () => {
    // Estado inicial con error
    const initialErrorState = {
      ...initialEmptyState,
      error: 'Algún error'
    };
    
    const action = clearErrors();
    const state = authReducer(initialErrorState, action);
    
    // Verificar que solo se limpia el error
    expect(state.error).toBe(null);
    expect(state.user).toEqual(initialErrorState.user);
    expect(state.token).toEqual(initialErrorState.token);
    expect(state.isAuthenticated).toBe(initialErrorState.isAuthenticated);
    expect(state.loading).toBe(initialErrorState.loading);
  });
}); 