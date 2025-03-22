import axios from 'axios';
import { RegisterData, LoginData, AuthResponse, UpdateProfileData, ChangePasswordData } from '../types';

// Configuración base para axios
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

// Transformar datos de registro para adaptarlos al backend
const transformRegisterData = (data: RegisterData) => {
  return {
    nombre: data.firstName,
    apellido: data.lastName,
    email: data.email,
    password: data.password,
    rol: transformRole(data.role)
  };
};

// Mapeo de roles del frontend al backend
const transformRole = (role: string): string => {
  const roleMap: { [key: string]: string } = {
    'player': 'usuario',
    'coach': 'entrenador',
    'admin': 'admin',
    'scout': 'veedor'
  };
  return roleMap[role] || 'usuario';
};

// Servicio de autenticación
const authService = {
  // Registrar usuario
  register: async (userData: RegisterData): Promise<AuthResponse> => {
    try {
      const transformedData = transformRegisterData(userData);
      const response = await axios.post(`${API_URL}/auth/register`, transformedData);
      
      if (response.data.token) {
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('user', JSON.stringify(response.data.usuario));
      }
      
      return response.data;
    } catch (error: unknown) {
      const message = axios.isAxiosError(error) && error.response?.data?.message 
        ? error.response.data.message 
        : 'Error en el registro';
      return { success: false, message };
    }
  },
  
  // Iniciar sesión
  login: async (userData: LoginData): Promise<AuthResponse> => {
    try {
      const response = await axios.post(`${API_URL}/auth/login`, userData);
      
      if (response.data.token) {
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('user', JSON.stringify(response.data.usuario));
      }
      
      return response.data;
    } catch (error: unknown) {
      const message = axios.isAxiosError(error) && error.response?.data?.message 
        ? error.response.data.message 
        : 'Error en el inicio de sesión';
      return { success: false, message };
    }
  },
  
  // Cerrar sesión
  logout: (): void => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  },
  
  // Obtener perfil del usuario
  getCurrentUser: async (): Promise<AuthResponse> => {
    try {
      const token = localStorage.getItem('token');
      
      if (!token) {
        return { success: false, message: 'No hay usuario autenticado' };
      }
      
      const response = await axios.get(`${API_URL}/auth/me`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      
      return { success: true, usuario: response.data.usuario };
    } catch (error: unknown) {
      const message = axios.isAxiosError(error) && error.response?.data?.message 
        ? error.response.data.message 
        : 'Error al obtener perfil de usuario';
      return { success: false, message };
    }
  },
  
  // Actualizar datos del perfil
  updateProfile: async (profileData: UpdateProfileData): Promise<AuthResponse> => {
    try {
      const token = localStorage.getItem('token');
      
      if (!token) {
        return { success: false, message: 'No hay usuario autenticado' };
      }
      
      const response = await axios.patch(`${API_URL}/auth/profile`, profileData, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      
      if (response.data.success) {
        // Actualizamos los datos en localStorage
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('user', JSON.stringify(response.data.usuario));
      }
      
      return response.data;
    } catch (error: unknown) {
      const message = axios.isAxiosError(error) && error.response?.data?.message 
        ? error.response.data.message 
        : 'Error al actualizar perfil de usuario';
      return { success: false, message };
    }
  },
  
  // Cambiar contraseña
  changePassword: async (passwordData: ChangePasswordData): Promise<AuthResponse> => {
    try {
      const token = localStorage.getItem('token');
      
      if (!token) {
        return { success: false, message: 'No hay usuario autenticado' };
      }
      
      const response = await axios.post(`${API_URL}/auth/change-password`, passwordData, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      
      return response.data;
    } catch (error: unknown) {
      const message = axios.isAxiosError(error) && error.response?.data?.message 
        ? error.response.data.message 
        : 'Error al cambiar la contraseña';
      return { success: false, message };
    }
  },
  
  // Verificar si el usuario está autenticado
  isAuthenticated: (): boolean => {
    return !!localStorage.getItem('token');
  }
};

export default authService; 