import { describe, test, expect, vi, beforeEach, afterEach } from 'vitest';
import { Middleware, MiddlewareAPI, Dispatch, AnyAction } from '@reduxjs/toolkit';
import errorMiddleware from '../../middleware/errorMiddleware';
import { RootState } from '../../index';

describe('Error Middleware', () => {
  // Mock para console.error
  beforeEach(() => {
    vi.spyOn(console, 'error').mockImplementation(() => {});
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  // Mock de la API de middleware
  const mockStore = {
    dispatch: vi.fn(),
    getState: vi.fn(() => ({} as RootState))
  } as unknown as MiddlewareAPI<Dispatch<AnyAction>, RootState>;

  test('debería pasar la acción al siguiente middleware', () => {
    // Arrange
    const next = vi.fn();
    const action = { type: 'TEST_ACTION' };
    
    // Act
    const middleware = errorMiddleware as Middleware;
    middleware(mockStore)(next)(action);
    
    // Assert
    expect(next).toHaveBeenCalledWith(action);
  });
}); 