import { describe, test, expect } from 'vitest';
import { 
  selectUsers,
  selectSelectedUser,
  selectLoading,
  selectError,
  selectTotal,
  selectPage,
  selectLimit,
  selectPagination,
  selectHasUsers,
  selectUserById
} from '../../../slices/users/selectors';
import { RootState } from '../../../index';
import { UserListItem } from '../../../../types';

// Mock de usuarios para pruebas
const mockUsers: UserListItem[] = [
  {
    _id: '1',
    nombre: 'Juan',
    apellido: 'Pérez',
    email: 'juan@ejemplo.com',
    rol: 'admin',
    activo: true
  },
  {
    _id: '2',
    nombre: 'María',
    apellido: 'González',
    email: 'maria@ejemplo.com',
    rol: 'usuario',
    activo: true
  }
];

// Mock del estado de la aplicación
const mockRootState = {
  auth: {
    user: null,
    token: null,
    isAuthenticated: false,
    loading: false,
    error: null
  },
  users: {
    users: mockUsers,
    selectedUser: mockUsers[0],
    loading: false,
    error: null,
    total: 10,
    page: 2,
    limit: 5
  }
} as RootState;

// Estado vacío
const emptyState = {
  ...mockRootState,
  users: {
    ...mockRootState.users,
    users: [],
    total: 0
  }
} as RootState;

// Estado con carga
const loadingState = {
  ...mockRootState,
  users: {
    ...mockRootState.users,
    loading: true
  }
} as RootState;

// Estado con error
const errorState = {
  ...mockRootState,
  users: {
    ...mockRootState.users,
    error: 'Error al cargar usuarios'
  }
} as RootState;

describe('Users Selectors', () => {
  test('selectUsers debería retornar la lista de usuarios', () => {
    expect(selectUsers(mockRootState)).toEqual(mockUsers);
    expect(selectUsers(emptyState)).toEqual([]);
  });

  test('selectSelectedUser debería retornar el usuario seleccionado', () => {
    expect(selectSelectedUser(mockRootState)).toEqual(mockUsers[0]);
    
    const stateWithoutSelected = {
      ...mockRootState,
      users: {
        ...mockRootState.users,
        selectedUser: null
      }
    } as RootState;
    
    expect(selectSelectedUser(stateWithoutSelected)).toBeNull();
  });

  test('selectLoading debería retornar el estado de carga', () => {
    expect(selectLoading(mockRootState)).toBe(false);
    expect(selectLoading(loadingState)).toBe(true);
  });

  test('selectError debería retornar el error', () => {
    expect(selectError(mockRootState)).toBeNull();
    expect(selectError(errorState)).toBe('Error al cargar usuarios');
  });

  test('selectTotal debería retornar el número total de usuarios', () => {
    expect(selectTotal(mockRootState)).toBe(10);
    expect(selectTotal(emptyState)).toBe(0);
  });

  test('selectPage debería retornar la página actual', () => {
    expect(selectPage(mockRootState)).toBe(2);
  });

  test('selectLimit debería retornar el límite de usuarios por página', () => {
    expect(selectLimit(mockRootState)).toBe(5);
  });

  test('selectPagination debería retornar la información de paginación', () => {
    const pagination = selectPagination(mockRootState);
    
    expect(pagination.total).toBe(10);
    expect(pagination.page).toBe(2);
    expect(pagination.limit).toBe(5);
    expect(pagination.totalPages).toBe(2); // 10/5 = 2 páginas
  });

  test('selectPagination debería calcular correctamente totalPages', () => {
    const stateWithOddTotal = {
      ...mockRootState,
      users: {
        ...mockRootState.users,
        total: 11
      }
    } as RootState;
    
    const pagination = selectPagination(stateWithOddTotal);
    expect(pagination.totalPages).toBe(3); // 11/5 = 2.2 -> 3 páginas
  });

  test('selectHasUsers debería verificar si hay usuarios', () => {
    expect(selectHasUsers(mockRootState)).toBe(true);
    expect(selectHasUsers(emptyState)).toBe(false);
  });

  test('selectUserById debería encontrar un usuario por ID', () => {
    expect(selectUserById(mockRootState, '1')).toEqual(mockUsers[0]);
    expect(selectUserById(mockRootState, '2')).toEqual(mockUsers[1]);
    expect(selectUserById(mockRootState, '3')).toBeNull(); // ID no existente
    expect(selectUserById(emptyState, '1')).toBeNull(); // Estado vacío
  });
}); 