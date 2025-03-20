import jwt, { SignOptions, JwtPayload } from 'jsonwebtoken';
import { IUser } from '../models/User';

// Obtener la clave secreta del entorno o usar una predeterminada (¡solo para desarrollo!)
const JWT_SECRET = Buffer.from(process.env.JWT_SECRET || 'liga-futbol-jwt-secret-dev');
// 7 días en segundos
const JWT_EXPIRES_IN = 7 * 24 * 60 * 60; // 7 días en segundos

/**
 * Genera un token JWT para el usuario especificado
 * @param user Usuario para el que se genera el token
 * @returns Token JWT generado
 */
export const generateToken = (user: IUser): string => {
  const payload = {
    _id: user._id,
    email: user.email,
    rol: user.rol,
  };

  const options: SignOptions = {
    expiresIn: JWT_EXPIRES_IN,
  };

  return jwt.sign(payload, JWT_SECRET, options);
};

/**
 * Verifica y decodifica un token JWT
 * @param token Token JWT a verificar
 * @returns Payload decodificado o null si el token es inválido
 */
export const verifyToken = (token: string): JwtPayload | null => {
  try {
    return jwt.verify(token, JWT_SECRET) as JwtPayload;
  } catch (error) {
    return null;
  }
};

export default {
  generateToken,
  verifyToken,
}; 