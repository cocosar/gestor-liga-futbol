import express from 'express';
import { body, param } from 'express-validator';
import teamController from '../controllers/teamController';
import { authenticate, authorize } from '../middleware/auth';

const router = express.Router();

/**
 * @route GET /api/equipos
 * @desc Obtener todos los equipos (con paginación y filtros)
 * @access Private
 */
router.get('/', authenticate, teamController.getTeams);

/**
 * @route GET /api/equipos/:id
 * @desc Obtener un equipo por ID
 * @access Private
 */
router.get(
  '/:id',
  authenticate,
  param('id')
    .isMongoId()
    .withMessage('ID de equipo inválido'),
  teamController.getTeamById
);

/**
 * @route POST /api/equipos
 * @desc Crear un nuevo equipo
 * @access Private (Admin/Manager)
 */
router.post(
  '/',
  authenticate,
  authorize(['admin', 'manager']),
  body('nombre')
    .notEmpty()
    .withMessage('El nombre es obligatorio')
    .trim()
    .isLength({ min: 2, max: 100 })
    .withMessage('El nombre debe tener entre 2 y 100 caracteres'),
  body('descripcion')
    .optional()
    .trim()
    .isLength({ max: 500 })
    .withMessage('La descripción no puede exceder los 500 caracteres'),
  body('categoria')
    .notEmpty()
    .withMessage('La categoría es obligatoria')
    .isIn(['juvenil', 'adulto', 'senior', 'femenino', 'masculino'])
    .withMessage('Categoría inválida'),
  body('tipo')
    .notEmpty()
    .withMessage('El tipo de equipo es obligatorio')
    .isIn(['futbol', 'futsal', 'futbol7'])
    .withMessage('Tipo de equipo inválido'),
  body('entrenador')
    .optional()
    .isMongoId()
    .withMessage('ID de entrenador inválido'),
  body('manager')
    .optional()
    .isMongoId()
    .withMessage('ID de manager inválido'),
  body('logo')
    .optional()
    .isURL()
    .withMessage('El logo debe ser una URL válida'),
  teamController.createTeam
);

/**
 * @route PUT /api/equipos/:id
 * @desc Actualizar un equipo existente
 * @access Private (Admin/Manager del equipo)
 */
router.put(
  '/:id',
  authenticate,
  param('id')
    .isMongoId()
    .withMessage('ID de equipo inválido'),
  body('nombre')
    .optional()
    .trim()
    .isLength({ min: 2, max: 100 })
    .withMessage('El nombre debe tener entre 2 y 100 caracteres'),
  body('descripcion')
    .optional()
    .trim()
    .isLength({ max: 500 })
    .withMessage('La descripción no puede exceder los 500 caracteres'),
  body('categoria')
    .optional()
    .isIn(['juvenil', 'adulto', 'senior', 'femenino', 'masculino'])
    .withMessage('Categoría inválida'),
  body('tipo')
    .optional()
    .isIn(['futbol', 'futsal', 'futbol7'])
    .withMessage('Tipo de equipo inválido'),
  body('entrenador')
    .optional()
    .isMongoId()
    .withMessage('ID de entrenador inválido'),
  body('manager')
    .optional()
    .isMongoId()
    .withMessage('ID de manager inválido'),
  body('logo')
    .optional()
    .isURL()
    .withMessage('El logo debe ser una URL válida'),
  body('activo')
    .optional()
    .isBoolean()
    .withMessage('El campo activo debe ser booleano'),
  teamController.updateTeam
);

/**
 * @route PUT /api/equipos/:id/jugadores
 * @desc Añadir o eliminar jugadores de un equipo
 * @access Private (Admin/Manager/Entrenador del equipo)
 */
router.put(
  '/:id/jugadores',
  authenticate,
  param('id')
    .isMongoId()
    .withMessage('ID de equipo inválido'),
  body('jugadores')
    .isArray()
    .withMessage('La lista de jugadores debe ser un array')
    .notEmpty()
    .withMessage('La lista de jugadores no puede estar vacía'),
  body('jugadores.*')
    .isMongoId()
    .withMessage('ID de jugador inválido'),
  body('accion')
    .notEmpty()
    .withMessage('La acción es obligatoria')
    .isIn(['agregar', 'eliminar'])
    .withMessage('Acción inválida. Debe ser "agregar" o "eliminar"'),
  teamController.updateTeamPlayers
);

/**
 * @route DELETE /api/equipos/:id
 * @desc Eliminar un equipo
 * @access Private (Admin)
 */
router.delete(
  '/:id',
  authenticate,
  authorize(['admin']),
  param('id')
    .isMongoId()
    .withMessage('ID de equipo inválido'),
  teamController.deleteTeam
);

export default router; 