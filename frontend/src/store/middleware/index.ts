import errorMiddleware from './errorMiddleware';
import loggerMiddleware from './loggerMiddleware';

// Exportar todos los middlewares desde un único punto
const middlewares = {
  errorMiddleware,
  loggerMiddleware,
};

export default middlewares; 