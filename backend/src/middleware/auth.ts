import { Request, Response, NextFunction } from 'express';
import { verifyToken } from '../utils/jwt';
import User from '../models/User';

// Extender el tipo Request para incluir el usuario autenticado
declare global {
  namespace Express {
    interface Request {
      user?: any;
    }
  }
}

/**
 * Middleware para proteger rutas que requieren autenticación
 */
export const authenticate = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // Obtener el token del header Authorization
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({
        success: false,
        message: 'Acceso no autorizado. Token no proporcionado.',
      });
    }

    // Extraer el token
    const token = authHeader.split(' ')[1];

    // Verificar el token
    const decoded = verifyToken(token);
    if (!decoded) {
      return res.status(401).json({
        success: false,
        message: 'Token inválido o expirado.',
      });
    }

    // Buscar el usuario en la base de datos
    const user = await User.findById(decoded.id).select('-password');
    if (!user) {
      return res.status(401).json({
        success: false,
        message: 'Usuario no encontrado.',
      });
    }

    // Verificar si el usuario está activo
    if (!user.activo) {
      return res.status(403).json({
        success: false,
        message: 'Usuario desactivado. Contacte al administrador.',
      });
    }

    // Añadir el usuario a la solicitud
    req.user = user;

    // Actualizar el último acceso del usuario
    user.ultimoAcceso = new Date();
    await user.save();

    next();
  } catch (error) {
    console.error('Error en middleware de autenticación:', error);
    return res.status(500).json({
      success: false,
      message: 'Error en la autenticación.',
    });
  }
};

/**
 * Middleware para verificar roles de usuario
 * @param roles Array de roles permitidos
 */
export const authorize = (roles: string[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    if (!req.user) {
      return res.status(401).json({
        success: false,
        message: 'Acceso no autorizado. Usuario no autenticado.',
      });
    }

    if (!roles.includes(req.user.rol)) {
      return res.status(403).json({
        success: false,
        message: 'Acceso prohibido. No tiene los permisos necesarios.',
      });
    }

    next();
  };
};

export default {
  authenticate,
  authorize,
}; 