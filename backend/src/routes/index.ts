import express from 'express';
import authRoutes from './authRoutes';

const router = express.Router();

// Rutas de autenticación
router.use('/auth', authRoutes);

export default router; 