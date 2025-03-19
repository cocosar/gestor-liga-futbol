import { describe, test, expect } from 'vitest';
import middlewares from '../../middleware';
import errorMiddleware from '../../middleware/errorMiddleware';
import loggerMiddleware from '../../middleware/loggerMiddleware';

describe('Middlewares Index', () => {
  test('debería exportar todos los middlewares correctamente', () => {
    expect(middlewares).toHaveProperty('errorMiddleware');
    expect(middlewares).toHaveProperty('loggerMiddleware');
    
    expect(middlewares.errorMiddleware).toBe(errorMiddleware);
    expect(middlewares.loggerMiddleware).toBe(loggerMiddleware);
  });
}); 