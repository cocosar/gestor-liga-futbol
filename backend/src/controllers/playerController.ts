import { Request, Response } from 'express';
import mongoose from 'mongoose';
import Player from '../models/Player';
import Team from '../models/Team';

/**
 * @desc    Obtener todos los jugadores
 * @route   GET /api/jugadores
 * @access  Privado
 */
export const getPlayers = async (req: Request, res: Response) => {
  try {
    const { 
      nombre, 
      apellido, 
      posicion, 
      equipo, 
      activo,
      limit = 10,
      page = 1
    } = req.query;
    
    const query: Record<string, unknown> = {};
    
    // Filtros
    if (nombre) query.nombre = { $regex: nombre, $options: 'i' };
    if (apellido) query.apellido = { $regex: apellido, $options: 'i' };
    if (posicion) query.posicion = posicion;
    if (equipo) query.equipo = equipo;
    if (activo !== undefined) query.activo = activo === 'true';
    
    const totalPlayers = await Player.countDocuments(query);
    const totalPages = Math.ceil(totalPlayers / Number(limit));
    
    const players = await Player.find(query)
      .populate('equipo', 'nombre categoria')
      .sort({ apellido: 1, nombre: 1 })
      .limit(Number(limit))
      .skip((Number(page) - 1) * Number(limit));
    
    res.status(200).json({
      players,
      pagination: {
        totalPlayers,
        totalPages,
        currentPage: Number(page),
        hasNextPage: Number(page) < totalPages,
        hasPrevPage: Number(page) > 1
      }
    });
  } catch (error) {
    console.error('Error al obtener jugadores:', error);
    res.status(500).json({ message: 'Error al obtener jugadores' });
  }
};

/**
 * @desc    Obtener un jugador por ID
 * @route   GET /api/jugadores/:id
 * @access  Privado
 */
export const getPlayerById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: 'ID de jugador inválido' });
    }
    
    const player = await Player.findById(id)
      .populate('equipo', 'nombre categoria')
      .populate('equiposAnteriores', 'nombre categoria');
    
    if (!player) {
      return res.status(404).json({ message: 'Jugador no encontrado' });
    }
    
    res.status(200).json(player);
  } catch (error) {
    console.error('Error al obtener jugador:', error);
    res.status(500).json({ message: 'Error al obtener jugador' });
  }
};

/**
 * @desc    Crear un nuevo jugador
 * @route   POST /api/jugadores
 * @access  Privado
 */
export const createPlayer = async (req: Request, res: Response) => {
  try {
    const {
      nombre,
      apellido,
      fechaNacimiento,
      fotoPerfil,
      numeroIdentificacion,
      posicion,
      numeroCamiseta,
      equipo,
      altura,
      peso,
      piePreferido
    } = req.body;
    
    // Validaciones básicas
    if (!nombre || !apellido || !numeroIdentificacion || !posicion) {
      return res.status(400).json({ 
        message: 'Por favor complete todos los campos obligatorios' 
      });
    }
    
    // Verificar si ya existe un jugador con el mismo número de identificación
    const existingPlayer = await Player.findOne({ numeroIdentificacion });
    if (existingPlayer) {
      return res.status(400).json({ 
        message: 'Ya existe un jugador con este número de identificación' 
      });
    }
    
    // Si se especifica un equipo, verificar que exista
    if (equipo && mongoose.Types.ObjectId.isValid(equipo)) {
      const teamExists = await Team.findById(equipo);
      if (!teamExists) {
        return res.status(400).json({ message: 'El equipo especificado no existe' });
      }
    }
    
    // Crear el nuevo jugador
    const newPlayer = await Player.create({
      nombre,
      apellido,
      fechaNacimiento,
      fotoPerfil,
      numeroIdentificacion,
      posicion,
      numeroCamiseta,
      equipo,
      altura,
      peso,
      piePreferido,
      estadisticas: {
        goles: 0,
        asistencias: 0,
        tarjetasAmarillas: 0,
        tarjetasRojas: 0,
        partidosJugados: 0,
        minutos: 0
      }
    });
    
    res.status(201).json(newPlayer);
  } catch (error) {
    if (error instanceof mongoose.Error.ValidationError) {
      const messages = Object.values(error.errors).map(err => err.message);
      return res.status(400).json({ message: messages.join(', ') });
    }
    
    console.error('Error al crear jugador:', error);
    res.status(500).json({ message: 'Error al crear jugador' });
  }
};

/**
 * @desc    Actualizar un jugador
 * @route   PUT /api/jugadores/:id
 * @access  Privado
 */
export const updatePlayer = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: 'ID de jugador inválido' });
    }
    
    const player = await Player.findById(id);
    
    if (!player) {
      return res.status(404).json({ message: 'Jugador no encontrado' });
    }
    
    const { numeroIdentificacion, equipo } = req.body;
    
    // Si se cambió el número de identificación, verificar que no exista otro jugador con ese número
    if (numeroIdentificacion && numeroIdentificacion !== player.numeroIdentificacion) {
      const existingPlayer = await Player.findOne({ numeroIdentificacion });
      if (existingPlayer) {
        // Comprobar si es un jugador diferente
        const existingPlayerId = existingPlayer._id ? existingPlayer._id.toString() : null;
        if (existingPlayerId && existingPlayerId !== id) {
          return res.status(400).json({ 
            message: 'Ya existe otro jugador con este número de identificación' 
          });
        }
      }
    }
    
    // Si se está cambiando de equipo, guardar el equipo anterior en el historial
    if (equipo && player.equipo && equipo !== player.equipo.toString()) {
      // Asegurarse de que equiposAnteriores sea un array
      const equiposAnteriores = player.equiposAnteriores || [];
      
      // Solo añadir el equipo anterior si no está ya en el historial
      if (!equiposAnteriores.includes(player.equipo)) {
        equiposAnteriores.push(player.equipo);
        req.body.equiposAnteriores = equiposAnteriores;
      }
    }
    
    const updatedPlayer = await Player.findByIdAndUpdate(
      id,
      req.body,
      { new: true, runValidators: true }
    ).populate('equipo', 'nombre categoria');
    
    res.status(200).json(updatedPlayer);
  } catch (error) {
    if (error instanceof mongoose.Error.ValidationError) {
      const messages = Object.values(error.errors).map(err => err.message);
      return res.status(400).json({ message: messages.join(', ') });
    }
    
    console.error('Error al actualizar jugador:', error);
    res.status(500).json({ message: 'Error al actualizar jugador' });
  }
};

/**
 * @desc    Eliminar un jugador
 * @route   DELETE /api/jugadores/:id
 * @access  Privado
 */
export const deletePlayer = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: 'ID de jugador inválido' });
    }
    
    const player = await Player.findById(id);
    
    if (!player) {
      return res.status(404).json({ message: 'Jugador no encontrado' });
    }
    
    // Opción 1: Eliminación física (definitiva)
    // await Player.findByIdAndDelete(id);
    
    // Opción 2: Eliminación lógica (recomendada)
    await Player.findByIdAndUpdate(id, { activo: false });
    
    res.status(200).json({ message: 'Jugador eliminado correctamente' });
  } catch (error) {
    console.error('Error al eliminar jugador:', error);
    res.status(500).json({ message: 'Error al eliminar jugador' });
  }
};

/**
 * @desc    Actualizar estadísticas de un jugador
 * @route   PATCH /api/jugadores/:id/estadisticas
 * @access  Privado
 */
export const updatePlayerStats = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { estadisticas } = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: 'ID de jugador inválido' });
    }
    
    if (!estadisticas) {
      return res.status(400).json({ message: 'No se proporcionaron estadísticas' });
    }
    
    const player = await Player.findById(id);
    
    if (!player) {
      return res.status(404).json({ message: 'Jugador no encontrado' });
    }
    
    const updatedPlayer = await Player.findByIdAndUpdate(
      id,
      { $set: { estadisticas } },
      { new: true, runValidators: true }
    );
    
    res.status(200).json(updatedPlayer);
  } catch (error) {
    if (error instanceof mongoose.Error.ValidationError) {
      const messages = Object.values(error.errors).map(err => err.message);
      return res.status(400).json({ message: messages.join(', ') });
    }
    
    console.error('Error al actualizar estadísticas:', error);
    res.status(500).json({ message: 'Error al actualizar estadísticas' });
  }
};

/**
 * @desc    Asignar un jugador a un equipo
 * @route   POST /api/jugadores/:id/asignar
 * @access  Privado (Admin, Manager, Coach)
 */
export const assignPlayerToTeam = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { equipoId } = req.body;

    // Validar ID del jugador
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ 
        success: false,
        message: 'ID de jugador inválido' 
      });
    }

    // Validar ID del equipo
    if (!mongoose.Types.ObjectId.isValid(equipoId)) {
      return res.status(400).json({ 
        success: false,
        message: 'ID de equipo inválido' 
      });
    }

    // Verificar que el jugador existe
    const player = await Player.findById(id);
    if (!player) {
      return res.status(404).json({ 
        success: false,
        message: 'Jugador no encontrado' 
      });
    }

    // Verificar que el equipo existe
    const team = await Team.findById(equipoId);
    if (!team) {
      return res.status(404).json({ 
        success: false,
        message: 'Equipo no encontrado' 
      });
    }

    // Verificar si se ha alcanzado el límite de jugadores por equipo
    const LIMITE_JUGADORES = team.tipo === 'futbol' ? 25 : team.tipo === 'futbol7' ? 14 : 12; // Límites según tipo de equipo
    const jugadoresEnEquipo = await Player.countDocuments({ equipo: equipoId });
    
    if (jugadoresEnEquipo >= LIMITE_JUGADORES) {
      return res.status(400).json({
        success: false,
        message: `No se puede añadir el jugador. El equipo ha alcanzado el límite de ${LIMITE_JUGADORES} jugadores permitidos para equipos de ${team.tipo}`
      });
    }

    // Verificar si el jugador ya pertenece a un equipo
    if (player.equipo) {
      // Si ya está en este equipo, no hacer nada
      if (player.equipo.toString() === equipoId) {
        return res.status(400).json({
          success: false,
          message: 'El jugador ya pertenece a este equipo'
        });
      }

      // Si está en otro equipo, moverlo y guardar el equipo anterior en el historial
      // Primero asegurarse de que equiposAnteriores sea un array
      if (!player.equiposAnteriores) {
        player.equiposAnteriores = [];
      }

      // Solo añadir el equipo anterior si no está ya en el historial
      const equipoAnteriorId = player.equipo.toString();
      if (!player.equiposAnteriores.some(eq => eq.toString() === equipoAnteriorId)) {
        player.equiposAnteriores.push(player.equipo);
      }
    }

    // Asignar el nuevo equipo
    player.equipo = new mongoose.Types.ObjectId(equipoId);

    // Guardar los cambios
    await player.save();

    // Retornar el jugador actualizado con el equipo populado
    const updatedPlayer = await Player.findById(id).populate('equipo').populate('equiposAnteriores');

    res.status(200).json({
      success: true,
      message: 'Jugador asignado al equipo exitosamente',
      player: updatedPlayer
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ 
      success: false,
      message: 'Error al asignar jugador al equipo',
      error: error instanceof Error ? error.message : 'Error desconocido'
    });
  }
};

/**
 * @desc    Eliminar un jugador de un equipo
 * @route   DELETE /api/jugadores/:id/asignar
 * @access  Privado (Admin, Manager, Coach)
 */
export const removePlayerFromTeam = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    // Validar ID del jugador
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ 
        success: false,
        message: 'ID de jugador inválido' 
      });
    }

    // Verificar que el jugador existe
    const player = await Player.findById(id);
    if (!player) {
      return res.status(404).json({ 
        success: false,
        message: 'Jugador no encontrado' 
      });
    }

    // Verificar si el jugador pertenece a un equipo
    if (!player.equipo) {
      return res.status(400).json({
        success: false,
        message: 'El jugador no pertenece a ningún equipo'
      });
    }

    // Guardar el equipo anterior en el historial si no está ya allí
    // Primero asegurarse de que equiposAnteriores sea un array
    if (!player.equiposAnteriores) {
      player.equiposAnteriores = [];
    }

    // Solo añadir el equipo anterior si no está ya en el historial
    const equipoAnteriorId = player.equipo.toString();
    if (!player.equiposAnteriores.some(eq => eq.toString() === equipoAnteriorId)) {
      player.equiposAnteriores.push(player.equipo);
    }

    // Remover el equipo
    player.equipo = undefined;

    // Guardar los cambios
    await player.save();

    // Retornar el jugador actualizado
    const updatedPlayer = await Player.findById(id).populate('equiposAnteriores');

    res.status(200).json({
      success: true,
      message: 'Jugador removido del equipo exitosamente',
      player: updatedPlayer
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ 
      success: false,
      message: 'Error al remover jugador del equipo',
      error: error instanceof Error ? error.message : 'Error desconocido'
    });
  }
}; 