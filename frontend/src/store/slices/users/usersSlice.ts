import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserListItem } from '../../../types';

// Definir interfaces para el estado
interface UsersState {
  users: UserListItem[];
  selectedUser: UserListItem | null;
  loading: boolean;
  error: string | null;
  total: number;
  page: number;
  limit: number;
}

// Estado inicial
const initialState: UsersState = {
  users: [],
  selectedUser: null,
  loading: false,
  error: null,
  total: 0,
  page: 1,
  limit: 10
};

// Crear slice
const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    // Iniciar carga de datos
    usersLoading: (state) => {
      state.loading = true;
      state.error = null;
    },
    
    // Carga de lista de usuarios exitosa
    usersLoadSuccess: (state, action: PayloadAction<{
      users: UserListItem[];
      total: number;
      page: number;
      limit: number;
    }>) => {
      state.users = action.payload.users;
      state.total = action.payload.total;
      state.page = action.payload.page;
      state.limit = action.payload.limit;
      state.loading = false;
      state.error = null;
    },
    
    // Carga de usuario individual exitosa
    userLoadSuccess: (state, action: PayloadAction<UserListItem>) => {
      state.selectedUser = action.payload;
      state.loading = false;
      state.error = null;
    },
    
    // Creación de usuario exitosa
    userCreateSuccess: (state, action: PayloadAction<UserListItem>) => {
      state.users = [action.payload, ...state.users];
      state.total += 1;
      state.loading = false;
      state.error = null;
    },
    
    // Actualización de usuario exitosa
    userUpdateSuccess: (state, action: PayloadAction<UserListItem>) => {
      state.users = state.users.map(user => 
        user._id === action.payload._id ? action.payload : user
      );
      if (state.selectedUser && state.selectedUser._id === action.payload._id) {
        state.selectedUser = action.payload;
      }
      state.loading = false;
      state.error = null;
    },
    
    // Eliminación de usuario exitosa
    userDeleteSuccess: (state, action: PayloadAction<string>) => {
      state.users = state.users.filter(user => user._id !== action.payload);
      if (state.selectedUser && state.selectedUser._id === action.payload) {
        state.selectedUser = null;
      }
      state.total -= 1;
      state.loading = false;
      state.error = null;
    },
    
    // Fallo en operaciones de usuarios
    usersFail: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
    
    // Limpiar usuario seleccionado
    clearSelectedUser: (state) => {
      state.selectedUser = null;
    },
    
    // Limpiar errores
    clearErrors: (state) => {
      state.error = null;
    },
  },
});

// Exportar acciones y reducer
export const { 
  usersLoading, 
  usersLoadSuccess, 
  userLoadSuccess, 
  userCreateSuccess, 
  userUpdateSuccess, 
  userDeleteSuccess, 
  usersFail, 
  clearSelectedUser, 
  clearErrors 
} = usersSlice.actions;

export default usersSlice.reducer; 