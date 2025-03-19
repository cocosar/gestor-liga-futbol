import { describe, test, expect } from 'vitest';
import { 
  selectUser, 
  selectToken, 
  selectIsAuthenticated, 
  selectLoading, 
  selectError, 
  selectUserRole,
  selectHasRole
} from '../../../slices/auth/selectors';
import { RootState } from '../../../index';
import { Usuario } from '../../../../types';

// Mock de usuario para pruebas
const mockUser: Usuario = {
  _id: '1',
  nombre: 'Test',
  apellido: 'User',
  email: 'test@example.com',
  rol: 'admin',
  activo: true,
  fechaCreacion: '2025-03-31T00:00:00.000Z'
};

// Mock del estado de la aplicación
const mockRootState = {
  auth: {
    user: mockUser,
    token: 'test-token',
    isAuthenticated: true,
    loading: false,
    error: null
  }
} as RootState;

// Estado con error
const errorState = {
  auth: {
    ...mockRootState.auth,
    error: 'Error de autenticación'
  }
} as RootState;

// Estado con loading
const loadingState = {
  auth: {
    ...mockRootState.auth,
    loading: true
  }
} as RootState;

// Estado sin autenticación
const notAuthenticatedState = {
  auth: {
    user: null,
    token: null,
    isAuthenticated: false,
    loading: false,
    error: null
  }
} as RootState;

describe('Auth Selectors', () => {
  test('selectUser debería retornar el usuario del estado', () => {
    expect(selectUser(mockRootState)).toEqual(mockUser);
    expect(selectUser(notAuthenticatedState)).toBeNull();
  });

  test('selectToken debería retornar el token del estado', () => {
    expect(selectToken(mockRootState)).toBe('test-token');
    expect(selectToken(notAuthenticatedState)).toBeNull();
  });

  test('selectIsAuthenticated debería retornar el estado de autenticación', () => {
    expect(selectIsAuthenticated(mockRootState)).toBe(true);
    expect(selectIsAuthenticated(notAuthenticatedState)).toBe(false);
  });

  test('selectLoading debería retornar el estado de carga', () => {
    expect(selectLoading(mockRootState)).toBe(false);
    expect(selectLoading(loadingState)).toBe(true);
  });

  test('selectError debería retornar el error del estado', () => {
    expect(selectError(mockRootState)).toBeNull();
    expect(selectError(errorState)).toBe('Error de autenticación');
  });

  test('selectUserRole debería retornar el rol del usuario', () => {
    expect(selectUserRole(mockRootState)).toBe('admin');
    expect(selectUserRole(notAuthenticatedState)).toBeUndefined();
  });

  test('selectHasRole debería verificar correctamente si el usuario tiene un rol específico', () => {
    // Usuario con rol 'admin'
    expect(selectHasRole(mockRootState, 'admin')).toBe(true);
    expect(selectHasRole(mockRootState, 'coach')).toBe(false);
    
    // Probar mapeo de roles del backend al frontend
    const userStateWithBackendRole = {
      auth: {
        ...mockRootState.auth,
        user: { ...mockUser, rol: 'usuario' }
      }
    } as RootState;
    
    expect(selectHasRole(userStateWithBackendRole, 'player')).toBe(true);
    
    // Cuando no hay usuario
    expect(selectHasRole(notAuthenticatedState, 'admin')).toBe(false);
  });
}); 