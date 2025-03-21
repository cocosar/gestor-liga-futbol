import { Request, Response } from 'express';
import { validationResult } from 'express-validator';
import { generateToken } from '../utils/jwt';
import User from '../models/User';
import { AuthenticatedRequest } from '../middleware/auth';

/**
 * Registrar un nuevo usuario
 * @route POST /api/auth/register
 * @access Public
 */
export const register = async (req: Request, res: Response) => {
  try {
    // Validar errores de la solicitud
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        errors: errors.array(),
      });
    }

    const { nombre, apellido, email, password, rol } = req.body;

    // Verificar si el usuario ya existe
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({
        success: false,
        message: 'El email ya está registrado.',
      });
    }

    // Si se especifica un rol, verificar que sea válido
    if (rol && !['admin', 'veedor', 'entrenador', 'usuario'].includes(rol)) {
      return res.status(400).json({
        success: false,
        message: 'Rol inválido.',
      });
    }

    // Crear el usuario
    const user = await User.create({
      nombre,
      apellido,
      email,
      password, // La contraseña será hasheada en el pre-save hook del modelo
      rol: rol || 'usuario', // Por defecto es 'usuario'
    });

    // Generar token JWT
    const token = generateToken(user);

    // Responder con el token y los datos del usuario (sin la contraseña)
    const userWithoutPassword = {
      _id: user._id,
      nombre: user.nombre,
      apellido: user.apellido,
      email: user.email,
      rol: user.rol,
      activo: user.activo,
      fechaCreacion: user.fechaCreacion,
    };

    res.status(201).json({
      success: true,
      token,
      usuario: userWithoutPassword,
    });
  } catch (error) {
    console.error('Error en registro:', error);
    res.status(500).json({
      success: false,
      message: 'Error en el servidor al registrar usuario.',
    });
  }
};

/**
 * Iniciar sesión de usuario
 * @route POST /api/auth/login
 * @access Public
 */
export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    
    // Verificar si email o password están presentes
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: 'Se requiere email y password.',
      });
    }

    // Validar errores de la solicitud
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        errors: errors.array(),
      });
    }

    // Buscar el usuario
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'Usuario no encontrado',
      });
    }

    // Verificar si el usuario está activo
    // Solo verificamos si la propiedad activo existe y es explícitamente false
    if (user.activo === false) {
      return res.status(403).json({
        success: false,
        message: 'Usuario desactivado. Contacte al administrador.',
      });
    }

    // Verificar la contraseña
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: 'Credenciales inválidas',
      });
    }

    // Actualizar último acceso
    user.ultimoAcceso = new Date();
    await user.save();

    // Generar token JWT
    const token = generateToken(user);

    // Responder con el token y los datos del usuario (sin la contraseña)
    const userWithoutPassword = {
      _id: user._id,
      nombre: user.nombre,
      apellido: user.apellido,
      email: user.email,
      rol: user.rol,
      activo: user.activo,
      fechaCreacion: user.fechaCreacion,
      ultimoAcceso: user.ultimoAcceso,
    };

    res.status(200).json({
      success: true,
      token,
      usuario: userWithoutPassword,
    });
  } catch (error) {
    console.error('Error en login:', error);
    res.status(500).json({
      success: false,
      message: 'Error en el servidor al iniciar sesión.',
    });
  }
};

/**
 * Obtener el perfil del usuario actual
 * @route GET /api/auth/me
 * @access Private
 */
export const getMe = async (req: AuthenticatedRequest, res: Response) => {
  try {
    // El usuario ya está en req.user gracias al middleware de autenticación
    res.status(200).json({
      success: true,
      usuario: req.user,
    });
  } catch (error) {
    console.error('Error al obtener perfil:', error);
    res.status(500).json({
      success: false,
      message: 'Error en el servidor al obtener perfil.',
    });
  }
};

export default {
  register,
  login,
  getMe,
}; 