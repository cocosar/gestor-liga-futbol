import { Response } from 'express';
import { validationResult } from 'express-validator';
import Team from '../models/Team';
import User from '../models/User';
import { AuthenticatedRequest } from '../middleware/auth';
import mongoose from 'mongoose';

/**
 * Obtener todos los equipos (con paginación y filtros)
 * @route GET /api/equipos
 * @access Private
 */
export const getTeams = async (req: AuthenticatedRequest, res: Response) => {
  try {
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 10;
    const search = req.query.search as string || '';
    const sortBy = req.query.sortBy as string || 'nombre';
    const sortOrder = req.query.sortOrder as string;
    const categoria = req.query.categoria as string;
    const tipo = req.query.tipo as string;
    const activo = req.query.activo as string;
    
    // Construir filtros
    const filter: Record<string, unknown> = {};
    
    // Filtro de búsqueda por nombre o descripción
    if (search) {
      filter.$or = [
        { nombre: { $regex: search, $options: 'i' } },
        { descripcion: { $regex: search, $options: 'i' } }
      ];
    }
    
    // Filtro por categoría
    if (categoria) {
      filter.categoria = categoria;
    }
    
    // Filtro por tipo
    if (tipo) {
      filter.tipo = tipo;
    }
    
    // Filtro por estado (activo/inactivo)
    if (activo !== undefined) {
      filter.activo = activo === 'true';
    }
    
    // Calcular el índice de inicio para la paginación
    const skip = (page - 1) * limit;
    
    // Ordenamiento
    const sort: { [key: string]: 1 | -1 } = {};
    sort[sortBy] = sortOrder && sortOrder.toString().toLowerCase() === 'desc' ? -1 : 1;
    
    // Obtener equipos paginados y filtrados
    const teams = await Team.find(filter)
      .sort(sort)
      .skip(skip)
      .limit(limit)
      .populate([
        { path: 'entrenador', select: 'nombre apellido email' },
        { path: 'manager', select: 'nombre apellido email' }
      ]);
    
    // Contar el total de equipos que coinciden con los filtros
    const totalTeams = await Team.countDocuments(filter);
    
    // Calcular el total de páginas
    const totalPages = Math.ceil(totalTeams / limit);
    
    res.status(200).json({
      success: true,
      equipos: teams,
      totalEquipos: totalTeams,
      paginaActual: page,
      totalPaginas: totalPages,
      limite: limit
    });
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'Error desconocido';
    console.error('Error al obtener equipos:', errorMessage);
    res.status(500).json({
      success: false,
      message: 'Error al obtener equipos',
      error: errorMessage
    });
  }
};

/**
 * Obtener un equipo por ID
 * @route GET /api/equipos/:id
 * @access Private
 */
export const getTeamById = async (req: AuthenticatedRequest, res: Response) => {
  try {
    const teamId = req.params.id;
    
    // Verificar que el ID tenga un formato válido de MongoDB
    if (!mongoose.Types.ObjectId.isValid(teamId)) {
      return res.status(400).json({
        success: false,
        message: 'ID de equipo inválido'
      });
    }
    
    // Obtener el equipo con los datos de entrenador, manager y jugadores
    const team = await Team.findById(teamId)
      .populate([
        { path: 'entrenador', select: 'nombre apellido email' },
        { path: 'manager', select: 'nombre apellido email' },
        { path: 'jugadores', select: 'nombre apellido email' }
      ]);
    
    if (!team) {
      return res.status(404).json({
        success: false,
        message: 'Equipo no encontrado'
      });
    }
    
    res.status(200).json({
      success: true,
      equipo: team
    });
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'Error desconocido';
    console.error('Error al obtener equipo por ID:', errorMessage);
    res.status(500).json({
      success: false,
      message: 'Error al obtener equipo',
      error: errorMessage
    });
  }
};

/**
 * Crear un nuevo equipo
 * @route POST /api/equipos
 * @access Private (Admin/Manager)
 */
export const createTeam = async (req: AuthenticatedRequest, res: Response) => {
  try {
    // Validar errores de la solicitud
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        errors: errors.array()
      });
    }
    
    // Verificar permisos (solo admin o manager pueden crear equipos)
    if (!req.user || !['admin', 'manager'].includes(req.user.rol)) {
      return res.status(403).json({
        success: false,
        message: 'No tienes permiso para crear equipos'
      });
    }
    
    const { nombre, descripcion, categoria, tipo, entrenador, manager, logo } = req.body;
    
    // Verificar que el entrenador exista y tenga el rol adecuado
    if (entrenador) {
      const entrenadorUser = await User.findById(entrenador);
      if (!entrenadorUser) {
        return res.status(404).json({
          success: false,
          message: 'Entrenador no encontrado'
        });
      }
      
      if (!['admin', 'manager'].includes(entrenadorUser.rol)) {
        return res.status(400).json({
          success: false,
          message: 'El usuario seleccionado no puede ser entrenador debido a su rol'
        });
      }
    }
    
    // Verificar que el manager exista y tenga el rol adecuado
    if (manager) {
      const managerUser = await User.findById(manager);
      if (!managerUser) {
        return res.status(404).json({
          success: false,
          message: 'Manager no encontrado'
        });
      }
      
      if (!['admin', 'manager'].includes(managerUser.rol)) {
        return res.status(400).json({
          success: false,
          message: 'El usuario seleccionado no puede ser manager debido a su rol'
        });
      }
    }
    
    // Crear el equipo
    const team = await Team.create({
      nombre,
      descripcion,
      categoria,
      tipo,
      entrenador: entrenador || null,
      manager: manager || (req.user?.rol === 'manager' ? req.user._id : null),
      logo,
      activo: true
    });
    
    // Obtener el equipo con los datos de entrenador y manager
    const newTeam = await Team.findById(team._id)
      .populate([
        { path: 'entrenador', select: 'nombre apellido email' },
        { path: 'manager', select: 'nombre apellido email' }
      ]);
    
    res.status(201).json({
      success: true,
      message: 'Equipo creado exitosamente',
      equipo: newTeam
    });
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'Error desconocido';
    console.error('Error al crear equipo:', errorMessage);
    res.status(500).json({
      success: false,
      message: 'Error al crear equipo',
      error: errorMessage
    });
  }
};

/**
 * Actualizar un equipo existente
 * @route PUT /api/equipos/:id
 * @access Private (Admin/Manager del equipo)
 */
export const updateTeam = async (req: AuthenticatedRequest, res: Response) => {
  try {
    // Validar errores de la solicitud
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        errors: errors.array()
      });
    }
    
    const teamId = req.params.id;
    const { nombre, descripcion, categoria, tipo, entrenador, manager, logo, activo } = req.body;
    
    // Verificar que el ID tenga un formato válido de MongoDB
    if (!mongoose.Types.ObjectId.isValid(teamId)) {
      return res.status(400).json({
        success: false,
        message: 'ID de equipo inválido'
      });
    }
    
    // Buscar el equipo a actualizar
    const team = await Team.findById(teamId);
    
    if (!team) {
      return res.status(404).json({
        success: false,
        message: 'Equipo no encontrado'
      });
    }
    
    // Verificar permisos: solo admin o el manager del equipo puede actualizar
    const isAdmin = req.user?.rol === 'admin';
    const isTeamManager = team.manager && req.user?._id.toString() === team.manager.toString();
    
    if (!isAdmin && !isTeamManager) {
      return res.status(403).json({
        success: false,
        message: 'No tienes permiso para actualizar este equipo'
      });
    }
    
    // Verificar que el entrenador exista y tenga el rol adecuado
    if (entrenador && entrenador !== team.entrenador?.toString()) {
      const entrenadorUser = await User.findById(entrenador);
      if (!entrenadorUser) {
        return res.status(404).json({
          success: false,
          message: 'Entrenador no encontrado'
        });
      }
      
      if (!['admin', 'manager'].includes(entrenadorUser.rol)) {
        return res.status(400).json({
          success: false,
          message: 'El usuario seleccionado no puede ser entrenador debido a su rol'
        });
      }
    }
    
    // Verificar que el manager exista y tenga el rol adecuado
    if (manager && manager !== team.manager?.toString()) {
      const managerUser = await User.findById(manager);
      if (!managerUser) {
        return res.status(404).json({
          success: false,
          message: 'Manager no encontrado'
        });
      }
      
      if (!['admin', 'manager'].includes(managerUser.rol)) {
        return res.status(400).json({
          success: false,
          message: 'El usuario seleccionado no puede ser manager debido a su rol'
        });
      }
    }
    
    // Actualizar los campos del equipo
    if (nombre) team.nombre = nombre;
    if (descripcion !== undefined) team.descripcion = descripcion;
    if (categoria) team.categoria = categoria;
    if (tipo) team.tipo = tipo;
    if (entrenador !== undefined) team.entrenador = entrenador ? new mongoose.Types.ObjectId(entrenador) : undefined;
    if (manager !== undefined) team.manager = manager ? new mongoose.Types.ObjectId(manager) : undefined;
    if (logo !== undefined) team.logo = logo;
    if (activo !== undefined && isAdmin) team.activo = activo; // Solo admin puede cambiar el estado
    
    // Guardar los cambios
    await team.save();
    
    // Obtener equipo actualizado con los datos de entrenador y manager
    const updatedTeam = await Team.findById(teamId)
      .populate([
        { path: 'entrenador', select: 'nombre apellido email' },
        { path: 'manager', select: 'nombre apellido email' }
      ]);
    
    res.status(200).json({
      success: true,
      message: 'Equipo actualizado exitosamente',
      equipo: updatedTeam
    });
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'Error desconocido';
    console.error('Error al actualizar equipo:', errorMessage);
    res.status(500).json({
      success: false,
      message: 'Error al actualizar equipo',
      error: errorMessage
    });
  }
};

/**
 * Añadir/eliminar jugadores de un equipo
 * @route PUT /api/equipos/:id/jugadores
 * @access Private (Admin/Manager del equipo)
 */
export const updateTeamPlayers = async (req: AuthenticatedRequest, res: Response) => {
  try {
    // Validar errores de la solicitud
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        errors: errors.array()
      });
    }
    
    const teamId = req.params.id;
    const { jugadores, accion } = req.body; // accion: 'agregar' o 'eliminar'
    
    // Verificar que el ID tenga un formato válido de MongoDB
    if (!mongoose.Types.ObjectId.isValid(teamId)) {
      return res.status(400).json({
        success: false,
        message: 'ID de equipo inválido'
      });
    }
    
    // Verificar que se proporcionó una lista de jugadores
    if (!jugadores || !Array.isArray(jugadores) || jugadores.length === 0) {
      return res.status(400).json({
        success: false,
        message: 'Se requiere una lista de jugadores'
      });
    }
    
    // Buscar el equipo
    const team = await Team.findById(teamId);
    
    if (!team) {
      return res.status(404).json({
        success: false,
        message: 'Equipo no encontrado'
      });
    }
    
    // Verificar permisos: solo admin o el manager del equipo puede actualizar jugadores
    const isAdmin = req.user?.rol === 'admin';
    const isTeamManager = team.manager && req.user?._id.toString() === team.manager.toString();
    const isTeamEntrenador = team.entrenador && req.user?._id.toString() === team.entrenador.toString();
    
    if (!isAdmin && !isTeamManager && !isTeamEntrenador) {
      return res.status(403).json({
        success: false,
        message: 'No tienes permiso para actualizar los jugadores de este equipo'
      });
    }
    
    // Verificar que todos los IDs de jugadores sean válidos
    for (const jugadorId of jugadores) {
      if (!mongoose.Types.ObjectId.isValid(jugadorId)) {
        return res.status(400).json({
          success: false,
          message: `ID de jugador inválido: ${jugadorId}`
        });
      }
    }
    
    // Inicializar el array de jugadores si no existe
    if (!team.jugadores) {
      team.jugadores = [];
    }
    
    // Convertir los IDs de jugadores a ObjectId
    const jugadoresIds = jugadores.map(id => new mongoose.Types.ObjectId(id));
    
    // Añadir o eliminar jugadores según la acción
    if (accion === 'agregar') {
      // Verificar que los jugadores existan
      const existingUsers = await User.find({
        _id: { $in: jugadoresIds },
        activo: true
      });
      
      if (existingUsers.length !== jugadoresIds.length) {
        return res.status(404).json({
          success: false,
          message: 'Uno o más jugadores no existen o están inactivos'
        });
      }
      
      // Añadir jugadores que no estén ya en el equipo
      for (const jugadorId of jugadoresIds) {
        const jugadorIdStr = jugadorId.toString();
        const exists = team.jugadores.some(id => id.toString() === jugadorIdStr);
        
        if (!exists) {
          team.jugadores.push(jugadorId);
        }
      }
    } else if (accion === 'eliminar') {
      // Eliminar jugadores del equipo
      team.jugadores = team.jugadores.filter(id => !jugadoresIds.some(jugId => jugId.toString() === id.toString()));
    } else {
      return res.status(400).json({
        success: false,
        message: 'Acción inválida. Debe ser "agregar" o "eliminar"'
      });
    }
    
    // Guardar los cambios
    await team.save();
    
    // Obtener equipo actualizado con los datos de jugadores
    const updatedTeam = await Team.findById(teamId)
      .populate([
        { path: 'entrenador', select: 'nombre apellido email' },
        { path: 'manager', select: 'nombre apellido email' },
        { path: 'jugadores', select: 'nombre apellido email' }
      ]);
    
    res.status(200).json({
      success: true,
      message: accion === 'agregar' 
        ? 'Jugadores añadidos exitosamente' 
        : 'Jugadores eliminados exitosamente',
      equipo: updatedTeam
    });
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'Error desconocido';
    console.error('Error al actualizar jugadores del equipo:', errorMessage);
    res.status(500).json({
      success: false,
      message: 'Error al actualizar jugadores del equipo',
      error: errorMessage
    });
  }
};

/**
 * Eliminar un equipo
 * @route DELETE /api/equipos/:id
 * @access Private (Admin)
 */
export const deleteTeam = async (req: AuthenticatedRequest, res: Response) => {
  try {
    const teamId = req.params.id;
    
    // Verificar que el ID tenga un formato válido de MongoDB
    if (!mongoose.Types.ObjectId.isValid(teamId)) {
      return res.status(400).json({
        success: false,
        message: 'ID de equipo inválido'
      });
    }
    
    // Verificar que solo los admin puedan eliminar equipos
    if (req.user?.rol !== 'admin') {
      return res.status(403).json({
        success: false,
        message: 'Solo los administradores pueden eliminar equipos'
      });
    }
    
    // Buscar el equipo a eliminar
    const team = await Team.findById(teamId);
    
    if (!team) {
      return res.status(404).json({
        success: false,
        message: 'Equipo no encontrado'
      });
    }
    
    // Eliminar el equipo
    await Team.findByIdAndDelete(teamId);
    
    res.status(200).json({
      success: true,
      message: 'Equipo eliminado exitosamente'
    });
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'Error desconocido';
    console.error('Error al eliminar equipo:', errorMessage);
    res.status(500).json({
      success: false,
      message: 'Error al eliminar equipo',
      error: errorMessage
    });
  }
};

// Exportar controlador como objeto
const teamController = {
  getTeams,
  getTeamById,
  createTeam,
  updateTeam,
  updateTeamPlayers,
  deleteTeam
};

export default teamController; 