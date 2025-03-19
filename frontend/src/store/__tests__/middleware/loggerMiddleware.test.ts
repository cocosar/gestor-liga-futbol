import { describe, test, expect, vi, beforeEach, afterEach } from 'vitest';
import { Middleware, MiddlewareAPI, Dispatch, AnyAction } from '@reduxjs/toolkit';
import loggerMiddleware from '../../middleware/loggerMiddleware';
import { RootState } from '../../index';

// Tipo para las llamadas mock de Vitest
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type MockedFunction<T extends (...args: any[]) => any> = {
  mock: {
    calls: Parameters<T>[]
  }
} & T;

describe('Logger Middleware', () => {
  // Original NODE_ENV
  const originalEnv = process.env.NODE_ENV;
  
  // Mocks para console
  beforeEach(() => {
    vi.spyOn(console, 'group').mockImplementation(() => {});
    vi.spyOn(console, 'log').mockImplementation(() => {});
    vi.spyOn(console, 'groupEnd').mockImplementation(() => {});
  });

  afterEach(() => {
    vi.restoreAllMocks();
    process.env.NODE_ENV = originalEnv; // Restaurar el valor original
  });

  // Mock de la API de middleware
  const mockState = { test: 'state' };
  const mockStore = {
    dispatch: vi.fn(),
    getState: vi.fn(() => mockState as unknown as RootState)
  } as unknown as MiddlewareAPI<Dispatch<AnyAction>, RootState>;

  test('debería registrar acciones en entorno de desarrollo', () => {
    // Arrange
    process.env.NODE_ENV = 'development';
    const next = vi.fn(() => 'RESULTADO');
    const action = { type: 'TEST_ACTION' };
    
    // Act
    const middleware = loggerMiddleware as Middleware;
    const result = middleware(mockStore)(next)(action);
    
    // Assert
    expect(next).toHaveBeenCalledWith(action);
    expect(console.group).toHaveBeenCalled();
    expect(console.log).toHaveBeenCalledTimes(3); // Previous State, Action, Next State
    expect(console.groupEnd).toHaveBeenCalled();
    expect(result).toBe('RESULTADO');
  });

  test('debería colorizar acciones pending correctamente', () => {
    // Arrange
    process.env.NODE_ENV = 'development';
    const next = vi.fn();
    const action = { type: 'TEST_ACTION/pending' };
    
    // Act
    const middleware = loggerMiddleware as Middleware;
    middleware(mockStore)(next)(action);
    
    // Assert
    // Verificamos que console.group fue llamado con un mensaje que contiene el tipo de acción
    // y un color específico
    expect(console.group).toHaveBeenCalledTimes(1);
    const mockedGroup = console.group as MockedFunction<typeof console.group>;
    const calls = mockedGroup.mock.calls;
    expect(calls.length).toBe(1);
    expect(calls[0][0]).toBe('%c Action: TEST_ACTION/pending');
    expect(calls[0][1]).toBe('color: blue');
  });

  test('debería colorizar acciones fulfilled correctamente', () => {
    // Arrange
    process.env.NODE_ENV = 'development';
    const next = vi.fn();
    const action = { type: 'TEST_ACTION/fulfilled' };
    
    // Act
    const middleware = loggerMiddleware as Middleware;
    middleware(mockStore)(next)(action);
    
    // Assert
    // Verificamos que console.group fue llamado con un mensaje que contiene el tipo de acción
    // y un color específico
    expect(console.group).toHaveBeenCalledTimes(1);
    const mockedGroup = console.group as MockedFunction<typeof console.group>;
    const calls = mockedGroup.mock.calls;
    expect(calls.length).toBe(1);
    expect(calls[0][0]).toBe('%c Action: TEST_ACTION/fulfilled');
    expect(calls[0][1]).toBe('color: green');
  });

  test('debería colorizar acciones rejected correctamente', () => {
    // Arrange
    process.env.NODE_ENV = 'development';
    const next = vi.fn();
    const action = { type: 'TEST_ACTION/rejected' };
    
    // Act
    const middleware = loggerMiddleware as Middleware;
    middleware(mockStore)(next)(action);
    
    // Assert
    // Verificamos que console.group fue llamado con un mensaje que contiene el tipo de acción
    // y un color específico
    expect(console.group).toHaveBeenCalledTimes(1);
    const mockedGroup = console.group as MockedFunction<typeof console.group>;
    const calls = mockedGroup.mock.calls;
    expect(calls.length).toBe(1);
    expect(calls[0][0]).toBe('%c Action: TEST_ACTION/rejected');
    expect(calls[0][1]).toBe('color: red');
  });

  test('no debería registrar en producción', () => {
    // Arrange
    process.env.NODE_ENV = 'production';
    const next = vi.fn(() => 'RESULTADO');
    const action = { type: 'TEST_ACTION' };
    
    // Act
    const middleware = loggerMiddleware as Middleware;
    const result = middleware(mockStore)(next)(action);
    
    // Assert
    expect(next).toHaveBeenCalledWith(action);
    expect(console.group).not.toHaveBeenCalled();
    expect(console.log).not.toHaveBeenCalled();
    expect(console.groupEnd).not.toHaveBeenCalled();
    expect(result).toBe('RESULTADO');
  });
}); 