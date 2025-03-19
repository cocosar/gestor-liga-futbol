import { createAsyncThunk } from '@reduxjs/toolkit';
import { authService } from '../../../api';
import { LoginData, RegisterData } from '../../../types';
import { authStart, authSuccess, authFail, logout as logoutAction } from './authSlice';
import { AppDispatch } from '../../index';

// Login
export const login = createAsyncThunk<
  void,
  LoginData,
  { dispatch: AppDispatch }
>('auth/login', async (loginData, { dispatch }) => {
  dispatch(authStart());
  try {
    const response = await authService.login(loginData);
    if (response.success && response.token && response.usuario) {
      dispatch(authSuccess({ 
        token: response.token, 
        user: response.usuario 
      }));
      return;
    }
    dispatch(authFail(response.message || 'Error al iniciar sesión'));
  } catch {
    dispatch(authFail('Error al conectarse con el servidor'));
  }
});

// Registro
export const register = createAsyncThunk<
  void,
  RegisterData,
  { dispatch: AppDispatch }
>('auth/register', async (registerData, { dispatch }) => {
  dispatch(authStart());
  try {
    const response = await authService.register(registerData);
    if (response.success && response.token && response.usuario) {
      dispatch(authSuccess({ 
        token: response.token, 
        user: response.usuario 
      }));
      return;
    }
    dispatch(authFail(response.message || 'Error al registrar usuario'));
  } catch {
    dispatch(authFail('Error al conectarse con el servidor'));
  }
});

// Obtener perfil del usuario
export const getCurrentUser = createAsyncThunk<
  void,
  void,
  { dispatch: AppDispatch }
>('auth/getCurrentUser', async (_, { dispatch }) => {
  dispatch(authStart());
  try {
    const response = await authService.getCurrentUser();
    if (response.success && response.usuario) {
      // Aquí asumimos que el token ya está almacenado (lo está si el usuario ya inició sesión)
      const token = localStorage.getItem('token') || '';
      dispatch(authSuccess({ 
        token, 
        user: response.usuario 
      }));
      return;
    }
    dispatch(authFail(response.message || 'Error al obtener información del usuario'));
  } catch {
    dispatch(authFail('Error al conectarse con el servidor'));
  }
});

// Logout
export const logout = createAsyncThunk<
  void,
  void,
  { dispatch: AppDispatch }
>('auth/logout', async (_, { dispatch }) => {
  authService.logout();
  dispatch(logoutAction());
}); 