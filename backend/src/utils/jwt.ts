import jwt from 'jsonwebtoken';
import { IUser } from '../models/User';

// Obtener la clave secreta del entorno o usar una predeterminada (¡solo para desarrollo!)
const JWT_SECRET = process.env.JWT_SECRET || 'liga-futbol-jwt-secret-dev';
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || '7d';

/**
 * Genera un token JWT para el usuario especificado
 * @param user Usuario para el que se genera el token
 * @returns Token JWT generado
 */
export const generateToken = (user: IUser): string => {
  const payload = {
    id: user._id,
    email: user.email,
    rol: user.rol,
  };

  // Usar @ts-ignore para evitar el error de tipo
  // @ts-ignore
  return jwt.sign(payload, JWT_SECRET, {
    expiresIn: JWT_EXPIRES_IN,
  });
};

/**
 * Verifica y decodifica un token JWT
 * @param token Token JWT a verificar
 * @returns Payload decodificado o null si el token es inválido
 */
export const verifyToken = (token: string): jwt.JwtPayload | null => {
  try {
    // Usar @ts-ignore para evitar el error de tipo
    // @ts-ignore
    return jwt.verify(token, JWT_SECRET) as jwt.JwtPayload;
  } catch (error) {
    return null;
  }
};

export default {
  generateToken,
  verifyToken,
}; 