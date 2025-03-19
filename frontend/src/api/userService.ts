import axios from 'axios';
import { UserFormData, UserResponse, UsersResponse, PaginationParams } from '../types';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

// Configuración del header con token de autenticación
const getConfig = () => {
  const token = localStorage.getItem('token');
  return {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': token ? `Bearer ${token}` : ''
    }
  };
};

// Obtener listado de usuarios con paginación
const getUsers = async (params: PaginationParams): Promise<UsersResponse> => {
  try {
    const { page, limit, sort, order, search } = params;
    const response = await axios.get(
      `${API_URL}/usuarios?page=${page}&limit=${limit}${sort ? `&sort=${sort}` : ''}${order ? `&order=${order}` : ''}${search ? `&search=${search}` : ''}`,
      getConfig()
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      return {
        success: false,
        message: error.response.data.message || 'Error al obtener usuarios'
      };
    }
    return {
      success: false,
      message: 'Error al conectarse con el servidor'
    };
  }
};

// Obtener un usuario por ID
const getUserById = async (id: string): Promise<UserResponse> => {
  try {
    const response = await axios.get(`${API_URL}/usuarios/${id}`, getConfig());
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      return {
        success: false,
        message: error.response.data.message || 'Error al obtener usuario'
      };
    }
    return {
      success: false,
      message: 'Error al conectarse con el servidor'
    };
  }
};

// Crear nuevo usuario
const createUser = async (userData: UserFormData): Promise<UserResponse> => {
  try {
    const response = await axios.post(`${API_URL}/usuarios`, userData, getConfig());
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      return {
        success: false,
        message: error.response.data.message || 'Error al crear usuario'
      };
    }
    return {
      success: false,
      message: 'Error al conectarse con el servidor'
    };
  }
};

// Actualizar usuario
const updateUser = async (id: string, userData: UserFormData): Promise<UserResponse> => {
  try {
    const response = await axios.put(`${API_URL}/usuarios/${id}`, userData, getConfig());
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      return {
        success: false,
        message: error.response.data.message || 'Error al actualizar usuario'
      };
    }
    return {
      success: false,
      message: 'Error al conectarse con el servidor'
    };
  }
};

// Eliminar usuario
const deleteUser = async (id: string): Promise<{ success: boolean; message?: string }> => {
  try {
    const response = await axios.delete(`${API_URL}/usuarios/${id}`, getConfig());
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      return {
        success: false,
        message: error.response.data.message || 'Error al eliminar usuario'
      };
    }
    return {
      success: false,
      message: 'Error al conectarse con el servidor'
    };
  }
};

const userService = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
};

export default userService; 