import { vi } from 'vitest';
import type { MockUseUsersType } from '../hooks/useUsersMock';
import { createBaseMockUseUsers } from '../hooks/useUsersMock';

// Variable compartida para almacenar el mock y poder manipularlo desde los tests
let useUsersMock: MockUseUsersType;

/**
 * Configura todos los mocks necesarios para las pruebas.
 * Esta función debe ser llamada antes de todos los tests que necesiten estos mocks.
 */
export function setupMocks() {
  // Mock para el hook useUsers
  vi.mock('../../../hooks/useUsers', () => ({
    useUsers: vi.fn()
  }));
  
  // Crear instancia inicial del mock
  useUsersMock = createBaseMockUseUsers();
  
  // Configuración inicial del mock
  const useUsersMockFn = vi.fn().mockReturnValue(useUsersMock);
  vi.stubGlobal('useUsers', useUsersMockFn);
  
  return {
    // Devolvemos referencias a los mocks para que puedan ser manipulados en los tests
    useUsersMock,
    
    // Funciones para actualizar los mocks en los tests
    updateUsersMock: (newMock: Partial<MockUseUsersType>) => {
      useUsersMock = { ...useUsersMock, ...newMock };
      useUsersMockFn.mockReturnValue(useUsersMock);
    },
    
    // Función para reiniciar todos los mocks
    resetMocks: () => {
      vi.clearAllMocks();
      useUsersMock = createBaseMockUseUsers();
      useUsersMockFn.mockReturnValue(useUsersMock);
    }
  };
} 