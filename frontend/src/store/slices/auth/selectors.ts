import { RootState } from '../../index';

// Selector para obtener el usuario autenticado
export const selectUser = (state: RootState) => state.auth.user;

// Selector para obtener el token
export const selectToken = (state: RootState) => state.auth.token;

// Selector para verificar si el usuario está autenticado
export const selectIsAuthenticated = (state: RootState) => state.auth.isAuthenticated;

// Selector para obtener el estado de carga
export const selectLoading = (state: RootState) => state.auth.loading;

// Selector para obtener errores
export const selectError = (state: RootState) => state.auth.error;

// Selector para obtener el rol del usuario
export const selectUserRole = (state: RootState) => state.auth.user?.rol;

// Selector para verificar si el usuario tiene un rol específico
export const selectHasRole = (state: RootState, role: string) => {
  const userRole = state.auth.user?.rol;
  
  // Mapear roles del backend al frontend si es necesario
  const roleMap: Record<string, string> = {
    'usuario': 'player',
    'entrenador': 'coach',
    'admin': 'admin',
    'veedor': 'scout'
  };
  
  const mappedRole = roleMap[userRole || ''] || userRole;
  
  return mappedRole === role;
}; 