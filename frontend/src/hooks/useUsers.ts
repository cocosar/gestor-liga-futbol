import { useCallback } from 'react';
import { useAppDispatch, useAppSelector } from '../store';
import { usersSelectors, usersThunks } from '../store/slices/users';
import { UserFormData, PaginationParams } from '../types';

// Hook personalizado para la gestión de usuarios
export const useUsers = () => {
  const dispatch = useAppDispatch();
  
  // Obtener información del estado
  const users = useAppSelector(usersSelectors.selectUsers);
  const selectedUser = useAppSelector(usersSelectors.selectSelectedUser);
  const loading = useAppSelector(usersSelectors.selectLoading);
  const error = useAppSelector(usersSelectors.selectError);
  const pagination = useAppSelector(usersSelectors.selectPagination);
  
  // Definir funciones para interactuar con el slice
  
  // Cargar usuarios
  const fetchUsers = useCallback((params: PaginationParams) => {
    dispatch(usersThunks.fetchUsers(params));
  }, [dispatch]);
  
  // Cargar un usuario por ID
  const fetchUserById = useCallback((userId: string) => {
    dispatch(usersThunks.fetchUserById(userId));
  }, [dispatch]);
  
  // Crear un nuevo usuario
  const createUser = useCallback((userData: UserFormData) => {
    dispatch(usersThunks.createUser(userData));
  }, [dispatch]);
  
  // Actualizar un usuario existente
  const updateUser = useCallback((id: string, userData: UserFormData) => {
    dispatch(usersThunks.updateUser({ id, userData }));
  }, [dispatch]);
  
  // Eliminar un usuario
  const deleteUser = useCallback((userId: string) => {
    dispatch(usersThunks.deleteUser(userId));
  }, [dispatch]);
  
  // Retornar información y funciones
  return {
    // Datos del estado
    users,
    selectedUser,
    loading,
    error,
    pagination,
    
    // Acciones
    fetchUsers,
    fetchUserById,
    createUser,
    updateUser,
    deleteUser
  };
};

export default useUsers; 