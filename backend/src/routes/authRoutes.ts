import express from 'express';
import { body } from 'express-validator';
import authController from '../controllers/authController';
import { authenticate } from '../middleware/auth';

const router = express.Router();

/**
 * @route POST /api/auth/register
 * @desc Registrar un nuevo usuario
 * @access Public
 */
router.post(
  '/register',
  [
    body('nombre')
      .notEmpty()
      .withMessage('El nombre es obligatorio')
      .trim()
      .isLength({ min: 2, max: 50 })
      .withMessage('El nombre debe tener entre 2 y 50 caracteres'),
    body('apellido')
      .notEmpty()
      .withMessage('El apellido es obligatorio')
      .trim()
      .isLength({ min: 2, max: 50 })
      .withMessage('El apellido debe tener entre 2 y 50 caracteres'),
    body('email')
      .notEmpty()
      .withMessage('El email es obligatorio')
      .isEmail()
      .withMessage('Formato de email inválido')
      .normalizeEmail(),
    body('password')
      .notEmpty()
      .withMessage('La contraseña es obligatoria')
      .isLength({ min: 6 })
      .withMessage('La contraseña debe tener al menos 6 caracteres'),
    body('rol')
      .optional()
      .isIn(['admin', 'manager', 'arbitro', 'usuario'])
      .withMessage('Rol inválido'),
  ],
  authController.register
);

/**
 * @route POST /api/auth/login
 * @desc Iniciar sesión de usuario
 * @access Public
 */
router.post(
  '/login',
  [
    body('email')
      .notEmpty()
      .withMessage('El email es obligatorio')
      .isEmail()
      .withMessage('Formato de email inválido')
      .normalizeEmail(),
    body('password')
      .notEmpty()
      .withMessage('La contraseña es obligatoria'),
  ],
  authController.login
);

/**
 * @route GET /api/auth/me
 * @desc Obtener el perfil del usuario actual
 * @access Private
 */
router.get('/me', authenticate, authController.getMe);

export default router; 