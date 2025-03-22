import express from 'express';
import authRoutes from './authRoutes';
import userRoutes from './userRoutes';
import teamRoutes from './teamRoutes';
import playerRoutes from './playerRoutes';

const router = express.Router();

// Rutas de autenticación
router.use('/auth', authRoutes);

// Rutas de usuarios
router.use('/usuarios', userRoutes);

// Rutas de equipos
router.use('/equipos', teamRoutes);

// Rutas de jugadores
router.use('/jugadores', playerRoutes);

export default router; 