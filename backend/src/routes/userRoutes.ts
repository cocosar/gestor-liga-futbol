import express from 'express';
import { body, param } from 'express-validator';
import userController from '../controllers/userController';
import { authenticate, authorize } from '../middleware/auth';

const router = express.Router();

/**
 * @route GET /api/usuarios
 * @desc Obtener todos los usuarios (con paginación y filtros)
 * @access Private (Admin)
 */
router.get('/', authenticate, authorize(['admin']), userController.getUsers);

/**
 * @route GET /api/usuarios/:id
 * @desc Obtener un usuario por ID
 * @access Private (Admin/Self)
 */
router.get('/:id', authenticate, userController.getUserById);

/**
 * @route POST /api/usuarios
 * @desc Crear un nuevo usuario
 * @access Private (Admin)
 */
router.post(
  '/',
  authenticate,
  authorize(['admin']),
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
    .isIn(['admin', 'veedor', 'entrenador', 'usuario'])
    .withMessage('Rol inválido'),
  body('activo')
    .optional()
    .isBoolean()
    .withMessage('El campo activo debe ser booleano'),
  userController.createUser
);

/**
 * @route PUT /api/usuarios/:id
 * @desc Actualizar un usuario existente
 * @access Private (Admin/Self)
 */
router.put(
  '/:id',
  authenticate,
  param('id')
    .isMongoId()
    .withMessage('ID de usuario inválido'),
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
  body('rol')
    .optional()
    .isIn(['admin', 'veedor', 'entrenador', 'usuario'])
    .withMessage('Rol inválido'),
  body('activo')
    .optional()
    .isBoolean()
    .withMessage('El campo activo debe ser booleano'),
  userController.updateUser
);

/**
 * @route PUT /api/usuarios/:id/password
 * @desc Cambiar la contraseña de un usuario
 * @access Private (Admin/Self)
 */
router.put(
  '/:id/password',
  authenticate,
  param('id')
    .isMongoId()
    .withMessage('ID de usuario inválido'),
  body('password')
    .notEmpty()
    .withMessage('La nueva contraseña es obligatoria')
    .isLength({ min: 6 })
    .withMessage('La contraseña debe tener al menos 6 caracteres'),
  body('currentPassword')
    .optional()
    .isLength({ min: 6 })
    .withMessage('La contraseña actual debe tener al menos 6 caracteres'),
  userController.updatePassword
);

/**
 * @route DELETE /api/usuarios/:id
 * @desc Eliminar un usuario
 * @access Private (Admin)
 */
router.delete(
  '/:id',
  authenticate,
  authorize(['admin']),
  param('id')
    .isMongoId()
    .withMessage('ID de usuario inválido'),
  userController.deleteUser
);

export default router; 