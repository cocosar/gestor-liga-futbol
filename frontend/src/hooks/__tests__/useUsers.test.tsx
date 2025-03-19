import { describe, test, expect, vi } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { useUsers } from '../../hooks/useUsers';
import usersReducer from '../../store/slices/users/usersSlice';
import authReducer from '../../store/slices/auth/authSlice';
import * as usersThunks from '../../store/slices/users/thunks';
import { UserListItem, PaginationParams, UserFormData } from '../../types';
import React, { ReactNode } from 'react';

// Mock para los thunks
vi.mock('../../store/slices/users/thunks', () => ({
  fetchUsers: vi.fn(() => () => {}),
  fetchUserById: vi.fn(() => () => {}),
  createUser: vi.fn(() => () => {}),
  updateUser: vi.fn(() => () => {}),
  deleteUser: vi.fn(() => () => {})
}));

describe('useUsers Hook', () => {
  // Configuración de la tienda de Redux para las pruebas
  const setupStore = (initialState = {}) => {
    return configureStore({
      reducer: {
        users: usersReducer,
        auth: authReducer
      },
      middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
      preloadedState: initialState
    });
  };

  // Mock de usuario para pruebas
  const mockUser: UserListItem = {
    _id: '1',
    nombre: 'Juan',
    apellido: 'Pérez',
    email: 'juan@ejemplo.com',
    rol: 'admin',
    activo: true
  };

  // Estado inicial con usuarios
  const initialState = {
    users: {
      users: [mockUser],
      selectedUser: mockUser,
      loading: false,
      error: null,
      total: 1,
      page: 1,
      limit: 10
    }
  };

  // Wrapper para el renderHook
  const Wrapper = ({ children }: { children: ReactNode }) => {
    const store = setupStore(initialState);
    return <Provider store={store}>{children}</Provider>;
  };

  // Función para renderizar el hook con un store personalizado
  const renderUserHook = (customState = {}) => {
    const store = setupStore({
      ...initialState,
      ...customState
    });

    const wrapper = ({ children }: { children: ReactNode }) => (
      <Provider store={store}>{children}</Provider>
    );

    return renderHook(() => useUsers(), { wrapper });
  };

  // Limpiar mocks después de cada prueba
  afterEach(() => {
    vi.clearAllMocks();
  });

  test('debería devolver los datos del estado y las funciones', () => {
    const { result } = renderHook(() => useUsers(), { wrapper: Wrapper });

    // Verificar que devuelve los datos del estado
    expect(result.current.users).toEqual([mockUser]);
    expect(result.current.selectedUser).toEqual(mockUser);
    expect(result.current.loading).toBe(false);
    expect(result.current.error).toBeNull();
    expect(result.current.pagination).toEqual({
      total: 1,
      page: 1,
      limit: 10,
      totalPages: 1
    });

    // Verificar que devuelve las funciones
    expect(typeof result.current.fetchUsers).toBe('function');
    expect(typeof result.current.fetchUserById).toBe('function');
    expect(typeof result.current.createUser).toBe('function');
    expect(typeof result.current.updateUser).toBe('function');
    expect(typeof result.current.deleteUser).toBe('function');
  });

  test('fetchUsers debería llamar al thunk correspondiente', () => {
    const { result } = renderHook(() => useUsers(), { wrapper: Wrapper });
    const mockParams: PaginationParams = { page: 1, limit: 10 };

    // Ejecutar la función
    act(() => {
      result.current.fetchUsers(mockParams);
    });

    // Verificar que se llama al thunk con los parámetros correctos
    expect(usersThunks.fetchUsers).toHaveBeenCalledWith(mockParams);
  });

  test('fetchUserById debería llamar al thunk correspondiente', () => {
    const { result } = renderHook(() => useUsers(), { wrapper: Wrapper });
    const userId = '1';

    // Ejecutar la función
    act(() => {
      result.current.fetchUserById(userId);
    });

    // Verificar que se llama al thunk con los parámetros correctos
    expect(usersThunks.fetchUserById).toHaveBeenCalledWith(userId);
  });

  test('createUser debería llamar al thunk correspondiente', () => {
    const { result } = renderHook(() => useUsers(), { wrapper: Wrapper });
    const userData: UserFormData = {
      nombre: 'Nuevo',
      apellido: 'Usuario',
      email: 'nuevo@ejemplo.com',
      password: 'password123',
      rol: 'usuario'
    };

    // Ejecutar la función
    act(() => {
      result.current.createUser(userData);
    });

    // Verificar que se llama al thunk con los parámetros correctos
    expect(usersThunks.createUser).toHaveBeenCalledWith(userData);
  });

  test('updateUser debería llamar al thunk correspondiente', () => {
    const { result } = renderHook(() => useUsers(), { wrapper: Wrapper });
    const userId = '1';
    const userData: UserFormData = {
      nombre: 'Actualizado',
      apellido: 'Usuario',
      email: 'actualizado@ejemplo.com',
      rol: 'usuario'
    };

    // Ejecutar la función
    act(() => {
      result.current.updateUser(userId, userData);
    });

    // Verificar que se llama al thunk con los parámetros correctos
    expect(usersThunks.updateUser).toHaveBeenCalledWith({ id: userId, userData });
  });

  test('deleteUser debería llamar al thunk correspondiente', () => {
    const { result } = renderHook(() => useUsers(), { wrapper: Wrapper });
    const userId = '1';

    // Ejecutar la función
    act(() => {
      result.current.deleteUser(userId);
    });

    // Verificar que se llama al thunk con los parámetros correctos
    expect(usersThunks.deleteUser).toHaveBeenCalledWith(userId);
  });

  test('debería reflejar el estado de carga', () => {
    const { result } = renderUserHook({
      users: {
        ...initialState.users,
        loading: true
      }
    });

    expect(result.current.loading).toBe(true);
  });

  test('debería reflejar errores', () => {
    const errorMessage = 'Error en la operación';
    const { result } = renderUserHook({
      users: {
        ...initialState.users,
        error: errorMessage
      }
    });

    expect(result.current.error).toBe(errorMessage);
  });
}); 