import { describe, test, expect } from 'vitest';
import usersReducer, { 
  usersLoading, 
  usersLoadSuccess, 
  userLoadSuccess, 
  userCreateSuccess, 
  userUpdateSuccess, 
  userDeleteSuccess, 
  usersFail, 
  clearSelectedUser, 
  clearErrors 
} from '../../../slices/users/usersSlice';
import { UserListItem } from '../../../../types';

describe('Users Slice', () => {
  // Estado inicial esperado
  const initialState = {
    users: [],
    selectedUser: null,
    loading: false,
    error: null,
    total: 0,
    page: 1,
    limit: 10
  };

  // Mock de datos de usuario para pruebas
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

  test('debería retornar el estado inicial', () => {
    expect(usersReducer(undefined, { type: 'unknown' })).toEqual(initialState);
  });

  test('debería manejar usersLoading correctamente', () => {
    const action = usersLoading();
    const state = usersReducer(initialState, action);
    
    expect(state.loading).toBe(true);
    expect(state.error).toBe(null);
  });

  test('debería manejar usersLoadSuccess correctamente', () => {
    const payload = {
      users: mockUsers,
      total: 10,
      page: 2,
      limit: 5
    };
    
    const action = usersLoadSuccess(payload);
    const state = usersReducer(initialState, action);
    
    expect(state.users).toEqual(mockUsers);
    expect(state.total).toBe(10);
    expect(state.page).toBe(2);
    expect(state.limit).toBe(5);
    expect(state.loading).toBe(false);
    expect(state.error).toBe(null);
  });

  test('debería manejar userLoadSuccess correctamente', () => {
    const action = userLoadSuccess(mockUsers[0]);
    const state = usersReducer(initialState, action);
    
    expect(state.selectedUser).toEqual(mockUsers[0]);
    expect(state.loading).toBe(false);
    expect(state.error).toBe(null);
  });

  test('debería manejar userCreateSuccess correctamente', () => {
    const stateBefore = {
      ...initialState,
      users: [mockUsers[1]],
      total: 1
    };
    
    const action = userCreateSuccess(mockUsers[0]);
    const state = usersReducer(stateBefore, action);
    
    // El nuevo usuario debe ser añadido al principio del array
    expect(state.users[0]).toEqual(mockUsers[0]);
    expect(state.users.length).toBe(2);
    expect(state.total).toBe(2);
    expect(state.loading).toBe(false);
    expect(state.error).toBe(null);
  });

  test('debería manejar userUpdateSuccess correctamente', () => {
    const stateBefore = {
      ...initialState,
      users: [...mockUsers],
      selectedUser: mockUsers[0]
    };
    
    const updatedUser = {
      ...mockUsers[0],
      nombre: 'Juan Carlos',
      apellido: 'Pérez Rodríguez'
    };
    
    const action = userUpdateSuccess(updatedUser);
    const state = usersReducer(stateBefore, action);
    
    // Verificar que se ha actualizado el usuario en la lista
    expect(state.users.find(user => user._id === '1')).toEqual(updatedUser);
    // Verificar que se ha actualizado el usuario seleccionado
    expect(state.selectedUser).toEqual(updatedUser);
    expect(state.loading).toBe(false);
    expect(state.error).toBe(null);
  });

  test('debería manejar userUpdateSuccess sin afectar el usuario seleccionado si es distinto', () => {
    const stateBefore = {
      ...initialState,
      users: [...mockUsers],
      selectedUser: mockUsers[1]
    };
    
    const updatedUser = {
      ...mockUsers[0],
      nombre: 'Juan Carlos',
      apellido: 'Pérez Rodríguez'
    };
    
    const action = userUpdateSuccess(updatedUser);
    const state = usersReducer(stateBefore, action);
    
    // Verificar que se ha actualizado el usuario en la lista
    expect(state.users.find(user => user._id === '1')).toEqual(updatedUser);
    // Verificar que NO se ha actualizado el usuario seleccionado porque es distinto
    expect(state.selectedUser).toEqual(mockUsers[1]);
  });

  test('debería manejar userDeleteSuccess correctamente', () => {
    const stateBefore = {
      ...initialState,
      users: [...mockUsers],
      total: 2
    };
    
    const action = userDeleteSuccess('1');
    const state = usersReducer(stateBefore, action);
    
    // Verificar que se ha eliminado el usuario
    expect(state.users.length).toBe(1);
    expect(state.users[0]._id).toBe('2');
    expect(state.total).toBe(1);
  });

  test('debería manejar userDeleteSuccess eliminando el usuario seleccionado', () => {
    const stateBefore = {
      ...initialState,
      users: [...mockUsers],
      selectedUser: mockUsers[0],
      total: 2
    };
    
    const action = userDeleteSuccess('1');
    const state = usersReducer(stateBefore, action);
    
    // Verificar que se ha eliminado el usuario y el selectedUser se ha puesto a null
    expect(state.users.length).toBe(1);
    expect(state.selectedUser).toBeNull();
  });

  test('debería manejar usersFail correctamente', () => {
    const errorMessage = 'Error en la operación';
    const action = usersFail(errorMessage);
    const state = usersReducer(initialState, action);
    
    expect(state.loading).toBe(false);
    expect(state.error).toBe(errorMessage);
  });

  test('debería manejar clearSelectedUser correctamente', () => {
    const stateBefore = {
      ...initialState,
      selectedUser: mockUsers[0]
    };
    
    const action = clearSelectedUser();
    const state = usersReducer(stateBefore, action);
    
    expect(state.selectedUser).toBeNull();
  });

  test('debería manejar clearErrors correctamente', () => {
    const stateBefore = {
      ...initialState,
      error: 'Algún error'
    };
    
    const action = clearErrors();
    const state = usersReducer(stateBefore, action);
    
    expect(state.error).toBeNull();
    // Verificar que no se modifican otros campos
    expect(state.users).toEqual(initialState.users);
    expect(state.selectedUser).toEqual(initialState.selectedUser);
    expect(state.loading).toBe(initialState.loading);
  });
}); 