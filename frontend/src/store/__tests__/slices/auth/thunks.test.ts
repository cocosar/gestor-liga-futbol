import { describe, test, expect } from 'vitest';
import { authStart, authSuccess, authFail, logout as logoutAction } from '../../../slices/auth/authSlice';
import { Usuario } from '../../../../types';

// Mock para la respuesta de la API
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

describe('Auth Actions', () => {
  describe('authStart action', () => {
    test('debería crear una acción para iniciar autenticación', () => {
      const expectedAction = {
        type: 'auth/authStart',
        payload: undefined
      };
      
      expect(authStart()).toEqual(expectedAction);
    });
  });
  
  describe('authSuccess action', () => {
    test('debería crear una acción para autenticación exitosa', () => {
      const payload = {
        token: mockToken,
        user: mockUser
      };
      
      const expectedAction = {
        type: 'auth/authSuccess',
        payload
      };
      
      expect(authSuccess(payload)).toEqual(expectedAction);
    });
  });
  
  describe('authFail action', () => {
    test('debería crear una acción para autenticación fallida', () => {
      const errorMessage = 'Error de autenticación';
      
      const expectedAction = {
        type: 'auth/authFail',
        payload: errorMessage
      };
      
      expect(authFail(errorMessage)).toEqual(expectedAction);
    });
  });
  
  describe('logout action', () => {
    test('debería crear una acción para cerrar sesión', () => {
      const expectedAction = {
        type: 'auth/logout',
        payload: undefined
      };
      
      expect(logoutAction()).toEqual(expectedAction);
    });
  });
}); 