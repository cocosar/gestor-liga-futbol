import { RootState } from '../../index';
import { createSelector } from '@reduxjs/toolkit';

// Selector para obtener la lista de usuarios
export const selectUsers = (state: RootState) => state.users.users;

// Selector para obtener el usuario seleccionado
export const selectSelectedUser = (state: RootState) => state.users.selectedUser;

// Selector para verificar si se están cargando datos
export const selectLoading = (state: RootState) => state.users.loading;

// Selector para obtener errores
export const selectError = (state: RootState) => state.users.error;

// Selector para obtener el total de usuarios
export const selectTotal = (state: RootState) => state.users.total;

// Selector para obtener la página actual
export const selectPage = (state: RootState) => state.users.page;

// Selector para obtener el límite de usuarios por página
export const selectLimit = (state: RootState) => state.users.limit;

// Selector para obtener información de paginación (usando memoización)
export const selectPagination = createSelector(
  [selectTotal, selectPage, selectLimit],
  (total, page, limit) => ({
    total,
    page,
    limit,
    totalPages: Math.ceil(total / limit)
  })
);

// Selector para verificar si existen usuarios
export const selectHasUsers = (state: RootState) => state.users.users.length > 0;

// Selector para obtener usuario por ID
export const selectUserById = (state: RootState, userId: string) => 
  state.users.users.find(user => user._id === userId) || null; 