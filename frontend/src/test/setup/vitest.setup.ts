// Este archivo se carga automáticamente antes de todas las pruebas
// gracias a la configuración setupFiles en vitest.config.ts

import '@testing-library/jest-dom';
import { afterEach, vi, beforeAll } from 'vitest';
import { cleanup } from '@testing-library/react';

// Inicializar los mocks globales que se comparten entre pruebas
import { initializeMocks } from './mocks';

// Configurar el timeout para las pruebas para que fallen más rápido
vi.setConfig({
  testTimeout: 5000, // Reducir el timeout por defecto a 5 segundos
});

// Limpiar después de cada prueba
afterEach(() => {
  cleanup();
});

// Configurar matchers adicionales
beforeAll(() => {
  // Inicializamos los mocks centralizados
  initializeMocks();
  
  // Otras configuraciones globales
  // Ignorar warnings de React específicos si es necesario
  const originalConsoleError = console.error;
  console.error = (...args) => {
    // ignorar mensajes específicos
    if (
      /Warning: ReactDOM.render is no longer supported/.test(args[0]) || 
      /Warning: The current testing environment/.test(args[0]) ||
      /Warning: React does not recognize the/.test(args[0])
    ) {
      return;
    }
    originalConsoleError(...args);
  };
});

// Configurar mocks globales (como fetch, localStorage, etc.)
// Esto mejora significativamente el rendimiento al reutilizar los mocks
vi.mock('react-redux', async (importOriginal) => {
  const actual = await importOriginal() as Record<string, unknown>;
  return {
    ...actual,
    // Sobrescribir solo los componentes/funciones que necesitamos mockear
    useSelector: vi.fn(),
    useDispatch: vi.fn(() => vi.fn())
  };
}); 