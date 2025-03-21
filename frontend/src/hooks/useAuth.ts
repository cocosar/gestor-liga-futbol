import { useCallback } from 'react';
import { useAppDispatch, useAppSelector } from '../store';
import { 
  selectUser, 
  selectIsAuthenticated, 
  selectLoading, 
  selectError, 
  selectUserRole
} from '../store/slices/auth/selectors';
import { 
  login, 
  register, 
  logout, 
  getCurrentUser 
} from '../store/slices/auth/thunks';
import { clearErrors } from '../store/slices/auth/authSlice';
import { LoginData, RegisterData } from '../types';

// Hook personalizado para la autenticación
export const useAuth = () => {
  const dispatch = useAppDispatch();
  
  // Estado
  const user = useAppSelector(selectUser);
  const isAuthenticated = useAppSelector(selectIsAuthenticated);
  const loading = useAppSelector(selectLoading);
  const error = useAppSelector(selectError);
  const role = useAppSelector(selectUserRole);
  
  // Acciones
  const loginUser = useCallback((data: LoginData) => {
    dispatch(login(data));
  }, [dispatch]);
  
  const registerUser = useCallback((data: RegisterData) => {
    dispatch(register(data));
  }, [dispatch]);
  
  const logoutUser = useCallback(() => {
    dispatch(logout());
  }, [dispatch]);
  
  const fetchCurrentUser = useCallback(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);
  
  const resetErrors = useCallback(() => {
    dispatch(clearErrors());
  }, [dispatch]);
  
  // Función para verificar si el usuario tiene un rol específico
  const checkRole = useCallback((roleToCheck: string) => {
    const userRole = user?.rol;
    
    // Mapear roles del backend al frontend si es necesario
    const roleMap: Record<string, string> = {
      'usuario': 'player',
      'entrenador': 'coach',
      'admin': 'admin',
      'veedor': 'scout'
    };
    
    const mappedRole = roleMap[userRole || ''] || userRole;
    
    return mappedRole === roleToCheck;
  }, [user]);
  
  // Retornar todo lo necesario
  return {
    // Estado
    user,
    isAuthenticated,
    loading,
    error,
    role,
    
    // Acciones
    login: loginUser,
    register: registerUser,
    logout: logoutUser,
    getCurrentUser: fetchCurrentUser,
    clearErrors: resetErrors,
    hasRole: checkRole
  };
}; 