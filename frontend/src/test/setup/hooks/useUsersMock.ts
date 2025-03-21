import { vi } from 'vitest';
import { createMockUsers } from '../test-helpers';

// Definición del tipo para el mock de useUsers
export type MockUseUsersType = ReturnType<typeof createBaseMockUseUsers>;

// Función para crear el mock básico del hook useUsers
export const createBaseMockUseUsers = () => ({
  users: createMockUsers(2),
  loading: false,
  error: null,
  pagination: {
    total: 2,
    page: 1,
    limit: 10,
    totalPages: 1
  },
  fetchUsers: vi.fn(),
  fetchUserById: vi.fn(),
  createUser: vi.fn(),
  updateUser: vi.fn(),
  deleteUser: vi.fn(),
  clearSelectedUser: vi.fn(),
  clearErrors: vi.fn(),
  selectedUser: null
});

// Mock para el hook useUsers
export const mockUseUsers = () => {
  // Mockeamos el módulo completo
  vi.mock('../../../hooks/useUsers', () => ({
    useUsers: vi.fn()
  }));
  
  // Importamos el módulo mockeado dinámicamente
  const useUsersMock = createBaseMockUseUsers();
  // Usamos import dinámico para evitar el require
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const useUsersModule = (import.meta as any).glob('../../../hooks/useUsers', { eager: true });
  const useUsers = useUsersModule.useUsers;
  
  // Configuramos el valor de retorno del mock
  vi.mocked(useUsers).mockReturnValue(useUsersMock);
  
  return useUsersMock;
};

// Variación con paginación
export const createPaginatedMockUseUsers = (page = 3) => {
  const baseMock = createBaseMockUseUsers();
  return {
    ...baseMock,
    pagination: {
      ...baseMock.pagination,
      page
    }
  };
};

// Variación con estado de carga
export const createLoadingMockUseUsers = () => {
  const baseMock = createBaseMockUseUsers();
  return {
    ...baseMock,
    loading: true
  };
};

// Variación con error
export const createErrorMockUseUsers = (errorMessage = 'Error al cargar usuarios') => {
  const baseMock = createBaseMockUseUsers();
  return {
    ...baseMock,
    error: errorMessage
  };
}; 