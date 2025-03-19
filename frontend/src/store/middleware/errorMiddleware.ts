import { Middleware, isRejectedWithValue } from '@reduxjs/toolkit';

// Middleware para manejo de errores de API
const errorMiddleware: Middleware = (/* { dispatch } */) => (next) => (action) => {
  // Cuando una acción asíncrona (thunk) es rechazada
  if (isRejectedWithValue(action)) {
    // Podemos obtener el payload del error
    const { payload } = action;
    
    // Aquí podríamos despachar una acción para mostrar un mensaje de error
    // o enviar el error a un servicio de monitoreo
    console.error('Error en la acción:', action.type);
    console.error('Detalles del error:', payload);
    
    // También podríamos manejar diferentes tipos de errores según su código
    if (payload && typeof payload === 'object' && 'status' in payload) {
      const status = (payload as { status: number }).status;
      
      // Manejo de errores de autenticación (401)
      if (status === 401) {
        console.error('Error de autenticación. Redirigiendo al login...');
        // Aquí podríamos despachar una acción para redirigir al login
        // dispatch(logout());
      }
      
      // Manejo de errores de permisos (403)
      if (status === 403) {
        console.error('No tienes permiso para realizar esta acción');
        // Aquí podríamos despachar una acción para mostrar un mensaje
      }

      // Manejo de errores de servidor (500)
      if (status >= 500) {
        console.error('Error en el servidor. Por favor, intenta más tarde');
        // Aquí podríamos despachar una acción para mostrar un mensaje
      }
    }
  }
  
  // Siempre pasar la acción al siguiente middleware
  return next(action);
};

export default errorMiddleware; 