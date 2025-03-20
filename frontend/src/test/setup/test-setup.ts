import { vi, expect } from 'vitest';
import '@testing-library/jest-dom';
import * as matchers from '@testing-library/jest-dom/matchers';

// Extender los matchers de Vitest con los de jest-dom
expect.extend(matchers);

// Mock global para localStorage
export const localStorageMock = (() => {
  let store: Record<string, string> = {};
  return {
    getItem: vi.fn((key: string) => store[key] || null),
    setItem: vi.fn((key: string, value: string) => { 
      store[key] = value.toString(); 
    }),
    removeItem: vi.fn((key: string) => { 
      delete store[key]; 
    }),
    clear: vi.fn(() => { 
      store = {}; 
    })
  };
})();

// Configurar localStorage global para todas las pruebas
Object.defineProperty(window, 'localStorage', {
  value: localStorageMock
});

// Helpers para crear mocks comunes
export const createMockAuthHook = (overrides = {}) => ({
  user: null,
  isAuthenticated: false,
  loading: false,
  error: null,
  role: undefined,
  login: vi.fn(),
  register: vi.fn(),
  logout: vi.fn(),
  getCurrentUser: vi.fn(),
  clearErrors: vi.fn(),
  hasRole: vi.fn(),
  ...overrides
});

// Reset de mocks después de cada prueba
afterEach(() => {
  vi.clearAllMocks();
  localStorageMock.clear();
});
