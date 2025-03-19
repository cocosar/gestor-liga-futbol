import { createAsyncThunk } from '@reduxjs/toolkit';
import { userService } from '../../../api';
import { UserFormData, PaginationParams } from '../../../types';
import { 
  usersLoading, 
  usersLoadSuccess, 
  userLoadSuccess, 
  userCreateSuccess, 
  userUpdateSuccess, 
  userDeleteSuccess, 
  usersFail 
} from './usersSlice';
import { AppDispatch } from '../../index';

// Obtener listado de usuarios
export const fetchUsers = createAsyncThunk<
  void,
  PaginationParams,
  { dispatch: AppDispatch }
>('users/fetchUsers', async (params, { dispatch }) => {
  dispatch(usersLoading());
  try {
    const response = await userService.getUsers(params);
    if (response.success && response.usuarios) {
      dispatch(usersLoadSuccess({ 
        users: response.usuarios,
        total: response.totalUsuarios || 0,
        page: params.page,
        limit: params.limit
      }));
      return;
    }
    dispatch(usersFail(response.message || 'Error al cargar usuarios'));
  } catch {
    dispatch(usersFail('Error al conectarse con el servidor'));
  }
});

// Obtener un usuario por ID
export const fetchUserById = createAsyncThunk<
  void,
  string,
  { dispatch: AppDispatch }
>('users/fetchUserById', async (userId, { dispatch }) => {
  dispatch(usersLoading());
  try {
    const response = await userService.getUserById(userId);
    if (response.success && response.usuario) {
      dispatch(userLoadSuccess(response.usuario));
      return;
    }
    dispatch(usersFail(response.message || 'Error al cargar usuario'));
  } catch {
    dispatch(usersFail('Error al conectarse con el servidor'));
  }
});

// Crear un nuevo usuario
export const createUser = createAsyncThunk<
  void,
  UserFormData,
  { dispatch: AppDispatch }
>('users/createUser', async (userData, { dispatch }) => {
  dispatch(usersLoading());
  try {
    const response = await userService.createUser(userData);
    if (response.success && response.usuario) {
      dispatch(userCreateSuccess(response.usuario));
      return;
    }
    dispatch(usersFail(response.message || 'Error al crear usuario'));
  } catch {
    dispatch(usersFail('Error al conectarse con el servidor'));
  }
});

// Actualizar un usuario
export const updateUser = createAsyncThunk<
  void,
  { id: string; userData: UserFormData },
  { dispatch: AppDispatch }
>('users/updateUser', async ({ id, userData }, { dispatch }) => {
  dispatch(usersLoading());
  try {
    const response = await userService.updateUser(id, userData);
    if (response.success && response.usuario) {
      dispatch(userUpdateSuccess(response.usuario));
      return;
    }
    dispatch(usersFail(response.message || 'Error al actualizar usuario'));
  } catch {
    dispatch(usersFail('Error al conectarse con el servidor'));
  }
});

// Eliminar un usuario
export const deleteUser = createAsyncThunk<
  void,
  string,
  { dispatch: AppDispatch }
>('users/deleteUser', async (userId, { dispatch }) => {
  dispatch(usersLoading());
  try {
    const response = await userService.deleteUser(userId);
    if (response.success) {
      dispatch(userDeleteSuccess(userId));
      return;
    }
    dispatch(usersFail(response.message || 'Error al eliminar usuario'));
  } catch {
    dispatch(usersFail('Error al conectarse con el servidor'));
  }
}); 