import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Usuario } from '../../../types';

// Definir interfaces para el estado
interface AuthState {
  user: Usuario | null;
  token: string | null;
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;
}

// Estado inicial
const initialState: AuthState = {
  user: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user') || '{}') : null,
  token: localStorage.getItem('token') || null,
  isAuthenticated: !!localStorage.getItem('token'),
  loading: false,
  error: null,
};

// Crear slice
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // Iniciar proceso de login/registro
    authStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    
    // Login/registro exitoso
    authSuccess: (state, action: PayloadAction<{ user: Usuario; token: string }>) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isAuthenticated = true;
      state.loading = false;
      state.error = null;
      
      // Guardar en localStorage
      localStorage.setItem('token', action.payload.token);
      localStorage.setItem('user', JSON.stringify(action.payload.user));
    },
    
    // Login/registro fallido
    authFail: (state, action: PayloadAction<string>) => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
      state.loading = false;
      state.error = action.payload;
    },
    
    // Logout
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
      state.loading = false;
      state.error = null;
      
      // Limpiar localStorage
      localStorage.removeItem('token');
      localStorage.removeItem('user');
    },
    
    // Actualizar datos de perfil
    updateProfile: (state, action: PayloadAction<Usuario>) => {
      state.user = action.payload;
      localStorage.setItem('user', JSON.stringify(action.payload));
    },
    
    // Limpiar errores
    clearErrors: (state) => {
      state.error = null;
    },
  },
});

// Exportar acciones y reducer
export const { 
  authStart, 
  authSuccess, 
  authFail, 
  logout, 
  updateProfile, 
  clearErrors 
} = authSlice.actions;

export default authSlice.reducer; 