import { render } from '@testing-library/react';
import { vi, describe, it, expect, beforeEach } from 'vitest';
import App from '../../App';
import { useAuth } from '../../hooks/useAuth';

// Mock para useAuth
const createMockAuthHook = (overrides = {}) => ({
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

// Mocks globales
vi.mock('../../hooks/useAuth', () => ({
  useAuth: vi.fn(() => createMockAuthHook())
}));

// Mock para localStorage
const localStorageMock = (() => {
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

Object.defineProperty(window, 'localStorage', {
  value: localStorageMock
});

describe('App Component', () => {
  const getCurrentUserMock = vi.fn();
  
  beforeEach(() => {
    vi.clearAllMocks();
    localStorageMock.clear();
    vi.mocked(useAuth).mockReturnValue(createMockAuthHook({
      getCurrentUser: getCurrentUserMock
    }));
  });

  it('should not call getCurrentUser if there is no token in localStorage', () => {
    // Simular que no hay token en localStorage
    localStorageMock.getItem.mockReturnValue(null);
    
    render(<App />);
    
    expect(getCurrentUserMock).not.toHaveBeenCalled();
  });

  it('should call getCurrentUser if there is a token in localStorage', () => {
    // Simular que hay un token en localStorage
    localStorageMock.getItem.mockReturnValue('mock-token');
    
    render(<App />);
    
    expect(getCurrentUserMock).toHaveBeenCalled();
  });
}); 