import { Middleware, AnyAction } from '@reduxjs/toolkit';

// Middleware para logging de acciones (solo en desarrollo)
const loggerMiddleware: Middleware = store => next => action => {
  // Solo realizar el logging en entorno de desarrollo
  if (import.meta.env.MODE !== 'production') {
    // Asegurar que action tiene un type
    const { type } = action as AnyAction;
    
    // Colorizar diferentes tipos de acciones para mejorar la legibilidad
    const getActionColor = () => {
      if (type.includes('pending')) return 'blue';
      if (type.includes('fulfilled')) return 'green';
      if (type.includes('rejected')) return 'red';
      return 'black';
    };

    console.group(`%c Action: ${type}`, `color: ${getActionColor()}`);
    console.log('%c Previous State', 'color: gray', store.getState());
    console.log('%c Action', 'color: blue', action);
    
    // Ejecutar la acción
    const result = next(action);
    
    console.log('%c Next State', 'color: green', store.getState());
    console.groupEnd();
    
    return result;
  }
  
  // En producción, simplemente pasar la acción sin logging
  return next(action);
};

export default loggerMiddleware; 