import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { authService } from '../../api';

interface ProtectedRouteProps {
  allowedRoles?: string[];
}

/**
 * Componente para proteger rutas que requieren autenticación
 * Si no hay un usuario autenticado, redirige a la página de login
 * Si se especifican roles permitidos, verifica que el usuario tenga uno de esos roles
 */
const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ allowedRoles }) => {
  const location = useLocation();
  const isAuthenticated = authService.isAuthenticated();
  
  // Si no hay un usuario autenticado, redirigir a login
  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  
  // Si hay roles permitidos especificados, verificar que el usuario tenga uno de ellos
  if (allowedRoles && allowedRoles.length > 0) {
    const userString = localStorage.getItem('user');
    
    if (!userString) {
      // Si no hay datos de usuario en localStorage pero hay un token,
      // es posible que la sesión esté corrupta
      authService.logout(); // Limpiar la sesión
      return <Navigate to="/login" state={{ from: location }} replace />;
    }
    
    try {
      const user = JSON.parse(userString);
      const userRole = user.rol;
      
      // Mapear rol del backend al frontend si es necesario
      const roleMap: Record<string, string> = {
        'usuario': 'player',
        'manager': 'coach',
        'admin': 'admin',
        'arbitro': 'referee'
      };
      
      const mappedRole = roleMap[userRole] || userRole;
      
      // Verificar si el rol del usuario está entre los permitidos
      if (!allowedRoles.includes(mappedRole)) {
        // El usuario no tiene un rol permitido, redirigir a una página de acceso denegado
        return <Navigate to="/unauthorized" replace />;
      }
    } catch (error) {
      // Error al parsear los datos del usuario, limpiar la sesión
      console.error('Error al verificar permisos:', error);
      authService.logout();
      return <Navigate to="/login" state={{ from: location }} replace />;
    }
  }
  
  // El usuario está autenticado y tiene los permisos necesarios
  return <Outlet />;
};

export default ProtectedRoute; 