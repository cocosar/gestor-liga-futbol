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
      .isIn(['admin', 'entrenador', 'arbitro', 'usuario'])
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

/**
 * @route PATCH /api/auth/profile
 * @desc Actualizar datos del perfil de usuario
 * @access Private
 */
router.patch(
  '/profile',
  authenticate,
  [
    body('nombre')
      .optional()
      .trim()
      .isLength({ min: 2, max: 50 })
      .withMessage('El nombre debe tener entre 2 y 50 caracteres'),
    body('apellido')
      .optional()
      .trim()
      .isLength({ min: 2, max: 50 })
      .withMessage('El apellido debe tener entre 2 y 50 caracteres'),
    body('email')
      .optional()
      .isEmail()
      .withMessage('Formato de email inválido')
      .normalizeEmail(),
  ],
  authController.updateProfile
);

/**
 * @route POST /api/auth/change-password
 * @desc Cambiar contraseña del usuario
 * @access Private
 */
router.post(
  '/change-password',
  authenticate,
  [
    body('currentPassword')
      .notEmpty()
      .withMessage('La contraseña actual es obligatoria'),
    body('newPassword')
      .notEmpty()
      .withMessage('La nueva contraseña es obligatoria')
      .isLength({ min: 6 })
      .withMessage('La nueva contraseña debe tener al menos 6 caracteres')
      .custom((value, { req }) => {
        if (value === req.body.currentPassword) {
          throw new Error('La nueva contraseña debe ser diferente a la actual');
        }
        return true;
      }),
  ],
  authController.changePassword
);

export default router; 