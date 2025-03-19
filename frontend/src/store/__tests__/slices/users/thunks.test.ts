import { describe, test, expect, vi, beforeEach } from 'vitest';
import {
  fetchUsers,
  fetchUserById,
  createUser,
  updateUser,
  deleteUser
} from '../../../slices/users/thunks';
import {
  usersLoading,
  usersLoadSuccess,
  userLoadSuccess,
  userCreateSuccess,
  userUpdateSuccess,
  userDeleteSuccess,
  usersFail
} from '../../../slices/users/usersSlice';
import { userService } from '../../../../api';
import { UserListItem, UserFormData, PaginationParams } from '../../../../types';

// Mock del servicio de usuarios
vi.mock('../../../../api', () => ({
  userService: {
    getUsers: vi.fn(),
    getUserById: vi.fn(),
    createUser: vi.fn(),
    updateUser: vi.fn(),
    deleteUser: vi.fn()
  }
}));

describe('Users Thunks', () => {
  // Mock de usuario para pruebas
  const mockUser: UserListItem = {
    _id: '1',
    nombre: 'Juan',
    apellido: 'Pérez',
    email: 'juan@ejemplo.com',
    rol: 'admin',
    activo: true
  };

  // Mock de datos de formulario
  const mockUserFormData: UserFormData = {
    nombre: 'Juan',
    apellido: 'Pérez',
    email: 'juan@ejemplo.com',
    password: 'password123',
    rol: 'admin'
  };

  // Mock de dispatch
  const mockDispatch = vi.fn();

  // Limpiar mocks antes de cada prueba
  beforeEach(() => {
    vi.resetAllMocks();
  });

  describe('fetchUsers', () => {
    const mockParams: PaginationParams = {
      page: 1,
      limit: 10
    };

    test('debería dispatchar usersLoadSuccess cuando la petición es exitosa', async () => {
      // Configurar mock para retornar datos de éxito
      (userService.getUsers as vi.Mock).mockResolvedValue({
        success: true,
        usuarios: [mockUser],
        totalUsuarios: 1
      });

      // Ejecutar el thunk
      await fetchUsers(mockParams)(mockDispatch);

      // Verificar que se llama a las acciones correctas
      expect(mockDispatch).toHaveBeenCalledWith(usersLoading());
      expect(mockDispatch).toHaveBeenCalledWith(
        usersLoadSuccess({
          users: [mockUser],
          total: 1,
          page: 1,
          limit: 10
        })
      );

      // Verificar llamada al servicio
      expect(userService.getUsers).toHaveBeenCalledWith(mockParams);
    });

    test('debería dispatchar usersFail cuando la petición falla', async () => {
      // Configurar mock para retornar datos de error
      (userService.getUsers as vi.Mock).mockResolvedValue({
        success: false,
        message: 'Error al obtener usuarios'
      });

      // Ejecutar el thunk
      await fetchUsers(mockParams)(mockDispatch);

      // Verificar que se llama a las acciones correctas
      expect(mockDispatch).toHaveBeenCalledWith(usersLoading());
      expect(mockDispatch).toHaveBeenCalledWith(usersFail('Error al obtener usuarios'));
    });

    test('debería dispatchar usersFail cuando ocurre una excepción', async () => {
      // Configurar mock para lanzar error
      (userService.getUsers as vi.Mock).mockRejectedValue(new Error('Error de red'));

      // Ejecutar el thunk
      await fetchUsers(mockParams)(mockDispatch);

      // Verificar que se llama a las acciones correctas
      expect(mockDispatch).toHaveBeenCalledWith(usersLoading());
      expect(mockDispatch).toHaveBeenCalledWith(usersFail('Error al conectarse con el servidor'));
    });
  });

  describe('fetchUserById', () => {
    const userId = '1';

    test('debería dispatchar userLoadSuccess cuando la petición es exitosa', async () => {
      // Configurar mock para retornar datos de éxito
      (userService.getUserById as vi.Mock).mockResolvedValue({
        success: true,
        usuario: mockUser
      });

      // Ejecutar el thunk
      await fetchUserById(userId)(mockDispatch);

      // Verificar que se llama a las acciones correctas
      expect(mockDispatch).toHaveBeenCalledWith(usersLoading());
      expect(mockDispatch).toHaveBeenCalledWith(userLoadSuccess(mockUser));

      // Verificar llamada al servicio
      expect(userService.getUserById).toHaveBeenCalledWith(userId);
    });

    test('debería dispatchar usersFail cuando la petición falla', async () => {
      // Configurar mock para retornar datos de error
      (userService.getUserById as vi.Mock).mockResolvedValue({
        success: false,
        message: 'Usuario no encontrado'
      });

      // Ejecutar el thunk
      await fetchUserById(userId)(mockDispatch);

      // Verificar que se llama a las acciones correctas
      expect(mockDispatch).toHaveBeenCalledWith(usersLoading());
      expect(mockDispatch).toHaveBeenCalledWith(usersFail('Usuario no encontrado'));
    });
  });

  describe('createUser', () => {
    test('debería dispatchar userCreateSuccess cuando la petición es exitosa', async () => {
      // Configurar mock para retornar datos de éxito
      (userService.createUser as vi.Mock).mockResolvedValue({
        success: true,
        usuario: mockUser
      });

      // Ejecutar el thunk
      await createUser(mockUserFormData)(mockDispatch);

      // Verificar que se llama a las acciones correctas
      expect(mockDispatch).toHaveBeenCalledWith(usersLoading());
      expect(mockDispatch).toHaveBeenCalledWith(userCreateSuccess(mockUser));

      // Verificar llamada al servicio
      expect(userService.createUser).toHaveBeenCalledWith(mockUserFormData);
    });

    test('debería dispatchar usersFail cuando la petición falla', async () => {
      // Configurar mock para retornar datos de error
      (userService.createUser as vi.Mock).mockResolvedValue({
        success: false,
        message: 'Error al crear usuario'
      });

      // Ejecutar el thunk
      await createUser(mockUserFormData)(mockDispatch);

      // Verificar que se llama a las acciones correctas
      expect(mockDispatch).toHaveBeenCalledWith(usersLoading());
      expect(mockDispatch).toHaveBeenCalledWith(usersFail('Error al crear usuario'));
    });
  });

  describe('updateUser', () => {
    const updatePayload = {
      id: '1',
      userData: mockUserFormData
    };

    test('debería dispatchar userUpdateSuccess cuando la petición es exitosa', async () => {
      // Configurar mock para retornar datos de éxito
      (userService.updateUser as vi.Mock).mockResolvedValue({
        success: true,
        usuario: mockUser
      });

      // Ejecutar el thunk
      await updateUser(updatePayload)(mockDispatch);

      // Verificar que se llama a las acciones correctas
      expect(mockDispatch).toHaveBeenCalledWith(usersLoading());
      expect(mockDispatch).toHaveBeenCalledWith(userUpdateSuccess(mockUser));

      // Verificar llamada al servicio
      expect(userService.updateUser).toHaveBeenCalledWith('1', mockUserFormData);
    });

    test('debería dispatchar usersFail cuando la petición falla', async () => {
      // Configurar mock para retornar datos de error
      (userService.updateUser as vi.Mock).mockResolvedValue({
        success: false,
        message: 'Error al actualizar usuario'
      });

      // Ejecutar el thunk
      await updateUser(updatePayload)(mockDispatch);

      // Verificar que se llama a las acciones correctas
      expect(mockDispatch).toHaveBeenCalledWith(usersLoading());
      expect(mockDispatch).toHaveBeenCalledWith(usersFail('Error al actualizar usuario'));
    });
  });

  describe('deleteUser', () => {
    const userId = '1';

    test('debería dispatchar userDeleteSuccess cuando la petición es exitosa', async () => {
      // Configurar mock para retornar datos de éxito
      (userService.deleteUser as vi.Mock).mockResolvedValue({
        success: true
      });

      // Ejecutar el thunk
      await deleteUser(userId)(mockDispatch);

      // Verificar que se llama a las acciones correctas
      expect(mockDispatch).toHaveBeenCalledWith(usersLoading());
      expect(mockDispatch).toHaveBeenCalledWith(userDeleteSuccess(userId));

      // Verificar llamada al servicio
      expect(userService.deleteUser).toHaveBeenCalledWith(userId);
    });

    test('debería dispatchar usersFail cuando la petición falla', async () => {
      // Configurar mock para retornar datos de error
      (userService.deleteUser as vi.Mock).mockResolvedValue({
        success: false,
        message: 'Error al eliminar usuario'
      });

      // Ejecutar el thunk
      await deleteUser(userId)(mockDispatch);

      // Verificar que se llama a las acciones correctas
      expect(mockDispatch).toHaveBeenCalledWith(usersLoading());
      expect(mockDispatch).toHaveBeenCalledWith(usersFail('Error al eliminar usuario'));
    });
  });
}); 