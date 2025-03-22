import express from 'express';
import {
  getPlayers,
  getPlayerById,
  createPlayer,
  updatePlayer,
  deletePlayer,
  updatePlayerStats
} from '../controllers/playerController';
import { authenticate as protect, authorize } from '../middleware/auth';

const router = express.Router();

// Rutas públicas
router.get('/', getPlayers);
router.get('/:id', getPlayerById);

// Rutas protegidas para roles específicos
router.post(
  '/',
  protect,
  authorize(['admin', 'manager', 'coach']),
  createPlayer
);

router.put(
  '/:id',
  protect,
  authorize(['admin', 'manager', 'coach']),
  updatePlayer
);

router.delete(
  '/:id',
  protect,
  authorize(['admin', 'manager']),
  deletePlayer
);

router.patch(
  '/:id/estadisticas',
  protect,
  authorize(['admin', 'manager', 'coach']),
  updatePlayerStats
);

export default router; 