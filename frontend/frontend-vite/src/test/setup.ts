import '@testing-library/jest-dom';
import { vi } from 'vitest';

// Configuración global para las pruebas
// Esta configuración se cargará antes de ejecutar las pruebas

// Silenciar los warnings de la consola durante las pruebas
beforeAll(() => {
  console.error = vi.fn();
  console.warn = vi.fn();
});

// Restaurar las implementaciones originales después de todas las pruebas
afterAll(() => {
  vi.restoreAllMocks();
}); 