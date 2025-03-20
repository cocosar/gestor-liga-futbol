import { Response } from 'express';
import { validationResult } from 'express-validator';
import User from '../models/User';
import { AuthenticatedRequest } from '../middleware/auth';
import mongoose from 'mongoose';

/**
 * Obtener todos los usuarios (con paginación y filtros)
 * @route GET /api/usuarios
 * @access Private (Admin)
 */
export const getUsers = async (req: AuthenticatedRequest, res: Response) => {
  try {
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 10;
    const search = req.query.search as string || '';
    const sortBy = req.query.sortBy as string || 'nombre';
    const sortOrder = req.query.sortOrder as string === 'desc' ? -1 : 1;
    const rol = req.query.rol as string;
    const activo = req.query.activo as string;
    
    // Construir filtros
    const filter: Record<string, unknown> = {};
    
    // Filtro de búsqueda por nombre, apellido o email
    if (search) {
      filter.$or = [
        { nombre: { $regex: search, $options: 'i' } },
        { apellido: { $regex: search, $options: 'i' } },
        { email: { $regex: search, $options: 'i' } }
      ];
    }
    
    // Filtro por rol
    if (rol) {
      filter.rol = rol;
    }
    
    // Filtro por estado (activo/inactivo)
    if (activo !== undefined) {
      filter.activo = activo === 'true';
    }
    
    // Calcular el índice de inicio para la paginación
    const skip = (page - 1) * limit;
    
    // Ordenamiento
    const sort: Record<string, number> = {};
    sort[sortBy] = sortOrder;
    
    // Obtener usuarios paginados y filtrados
    const users = await User.find(filter)
      .sort(sort as any)
      .skip(skip)
      .limit(limit)
      .select('-password'); // Excluir el campo de contraseña
    
    // Contar el total de usuarios que coinciden con los filtros
    const totalUsers = await User.countDocuments(filter);
    
    res.status(200).json({
      success: true,
      usuarios: users,
      totalUsuarios: totalUsers,
      paginaActual: page,
      totalPaginas: Math.ceil(totalUsers / limit),
      limite: limit
    });
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'Error desconocido';
    console.error('Error al obtener usuarios:', errorMessage);
    res.status(500).json({
      success: false,
      message: 'Error al obtener usuarios',
      error: errorMessage
    });
  }
};

/**
 * Obtener un usuario por ID
 * @route GET /api/usuarios/:id
 * @access Private (Admin/Self)
 */
export const getUserById = async (req: AuthenticatedRequest, res: Response) => {
  try {
    const userId = req.params.id;
    
    // Verificar que el ID tenga un formato válido de MongoDB
    if (!userId.match(/^[0-9a-fA-F]{24}$/)) {
      return res.status(400).json({
        success: false,
        message: 'ID de usuario inválido'
      });
    }
    
    // Obtener el usuario (sin incluir la contraseña)
    const user = await User.findById(userId).select('-password');
    
    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'Usuario no encontrado'
      });
    }
    
    // Verificar permisos: solo el propio usuario o un admin puede ver los detalles
    if (req.user && (req.user._id.toString() !== userId && req.user.rol !== 'admin')) {
      return res.status(403).json({
        success: false,
        message: 'No tienes permiso para ver este usuario'
      });
    }
    
    res.status(200).json({
      success: true,
      usuario: user
    });
  } catch (error: any) {
    console.error('Error al obtener usuario por ID:', error.message);
    res.status(500).json({
      success: false,
      message: 'Error al obtener usuario',
      error: error.message
    });
  }
};

/**
 * Crear un nuevo usuario
 * @route POST /api/usuarios
 * @access Private (Admin)
 */
export const createUser = async (req: AuthenticatedRequest, res: Response) => {
  try {
    // Validar errores de la solicitud
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        errors: errors.array()
      });
    }
    
    const { nombre, apellido, email, password, rol, activo } = req.body;
    
    // Verificar si el usuario ya existe
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({
        success: false,
        message: 'El email ya está registrado'
      });
    }
    
    // Si se especifica un rol, verificar que sea válido
    if (rol && !['admin', 'manager', 'arbitro', 'usuario'].includes(rol)) {
      return res.status(400).json({
        success: false,
        message: 'Rol inválido'
      });
    }
    
    // Verificar que solo admin pueda crear otros usuarios admin
    if (rol === 'admin' && req.user?.rol !== 'admin') {
      return res.status(403).json({
        success: false,
        message: 'No tienes permiso para crear usuarios admin'
      });
    }
    
    // Crear el usuario
    const user = await User.create({
      nombre,
      apellido,
      email,
      password,
      rol: rol || 'usuario',
      activo: activo !== undefined ? activo : true,
    });
    
    // Obtener usuario sin contraseña
    const newUser = await User.findById(user._id).select('-password');
    
    res.status(201).json({
      success: true,
      message: 'Usuario creado exitosamente',
      usuario: newUser
    });
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'Error desconocido';
    console.error('Error al crear usuario:', errorMessage);
    res.status(500).json({
      success: false,
      message: 'Error al crear usuario',
      error: errorMessage
    });
  }
};

/**
 * Actualizar un usuario existente
 * @route PUT /api/usuarios/:id
 * @access Private (Admin/Self)
 */
export const updateUser = async (req: AuthenticatedRequest, res: Response) => {
  try {
    // Validar errores de la solicitud
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        errors: errors.array()
      });
    }
    
    const userId = req.params.id;
    const { nombre, apellido, email, rol, activo } = req.body;
    
    // Verificar que el ID tenga un formato válido de MongoDB
    if (!mongoose.Types.ObjectId.isValid(userId)) {
      return res.status(400).json({
        success: false,
        message: 'ID de usuario inválido'
      });
    }
    
    // Buscar el usuario a actualizar
    const user = await User.findById(userId);
    
    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'Usuario no encontrado'
      });
    }
    
    // Verificar permisos: solo el propio usuario o un admin puede actualizar
    const isSelfUpdate = req.user?._id.toString() === userId;
    const isAdmin = req.user?.rol === 'admin';
    
    if (!isSelfUpdate && !isAdmin) {
      return res.status(403).json({
        success: false,
        message: 'No tienes permiso para actualizar este usuario'
      });
    }
    
    // Verificar restricciones adicionales:
    // 1. Solo admin puede cambiar roles
    if (rol !== undefined && rol !== user.rol && !isAdmin) {
      return res.status(403).json({
        success: false,
        message: 'Solo los administradores pueden cambiar roles'
      });
    }
    
    // 2. Solo admin puede cambiar el estado de activación
    if (activo !== undefined && activo !== user.activo && !isAdmin) {
      return res.status(403).json({
        success: false,
        message: 'Solo los administradores pueden cambiar el estado de activación'
      });
    }
    
    // 3. Si un usuario se está autoactualizando, no puede desactivarse a sí mismo
    if (isSelfUpdate && activo === false) {
      return res.status(403).json({
        success: false,
        message: 'No puedes desactivar tu propia cuenta'
      });
    }
    
    // 4. Un admin no puede quitarse a sí mismo los privilegios de admin
    if (isSelfUpdate && isAdmin && rol !== 'admin') {
      return res.status(403).json({
        success: false,
        message: 'No puedes quitarte a ti mismo los privilegios de administrador'
      });
    }
    
    // 5. Si se cambia el email, verificar que no exista ya
    if (email && email !== user.email) {
      const emailExists = await User.findOne({ email });
      if (emailExists) {
        return res.status(400).json({
          success: false,
          message: 'El email ya está en uso por otro usuario'
        });
      }
    }
    
    // Actualizar los campos del usuario
    if (nombre) user.nombre = nombre;
    if (apellido) user.apellido = apellido;
    if (email) user.email = email;
    if (rol !== undefined) user.rol = rol;
    if (activo !== undefined) user.activo = activo;
    
    // Guardar los cambios
    await user.save();
    
    // Obtener usuario actualizado sin contraseña
    const updatedUser = await User.findById(userId).select('-password');
    
    res.status(200).json({
      success: true,
      message: 'Usuario actualizado exitosamente',
      usuario: updatedUser
    });
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'Error desconocido';
    console.error('Error al actualizar usuario:', errorMessage);
    res.status(500).json({
      success: false,
      message: 'Error al actualizar usuario',
      error: errorMessage
    });
  }
};

/**
 * Cambiar la contraseña de un usuario
 * @route PUT /api/usuarios/:id/password
 * @access Private (Admin/Self)
 */
export const updatePassword = async (req: AuthenticatedRequest, res: Response) => {
  try {
    // Validar errores de la solicitud
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        errors: errors.array()
      });
    }
    
    const userId = req.params.id;
    const { password, currentPassword } = req.body;
    
    // Verificar que el ID tenga un formato válido de MongoDB
    if (!mongoose.Types.ObjectId.isValid(userId)) {
      return res.status(400).json({
        success: false,
        message: 'ID de usuario inválido'
      });
    }
    
    // Buscar el usuario
    const user = await User.findById(userId);
    
    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'Usuario no encontrado'
      });
    }
    
    // Verificar permisos: solo el propio usuario o un admin puede cambiar la contraseña
    const isSelfUpdate = req.user?._id.toString() === userId;
    const isAdmin = req.user?.rol === 'admin';
    
    if (!isSelfUpdate && !isAdmin) {
      return res.status(403).json({
        success: false,
        message: 'No tienes permiso para cambiar la contraseña de este usuario'
      });
    }
    
    // Si es el propio usuario actualizando su contraseña, verificar la contraseña actual
    if (isSelfUpdate && !isAdmin) {
      if (!currentPassword) {
        return res.status(400).json({
          success: false,
          message: 'Se requiere la contraseña actual'
        });
      }
      
      const isMatch = await user.comparePassword(currentPassword);
      if (!isMatch) {
        return res.status(401).json({
          success: false,
          message: 'Contraseña actual incorrecta'
        });
      }
    }
    
    // Actualizar la contraseña
    user.password = password;
    await user.save();
    
    res.status(200).json({
      success: true,
      message: 'Contraseña actualizada exitosamente'
    });
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'Error desconocido';
    console.error('Error al actualizar contraseña:', errorMessage);
    res.status(500).json({
      success: false,
      message: 'Error al actualizar contraseña',
      error: errorMessage
    });
  }
};

/**
 * Eliminar un usuario
 * @route DELETE /api/usuarios/:id
 * @access Private (Admin)
 */
export const deleteUser = async (req: AuthenticatedRequest, res: Response) => {
  try {
    const userId = req.params.id;
    
    // Verificar que el ID tenga un formato válido de MongoDB
    if (!mongoose.Types.ObjectId.isValid(userId)) {
      return res.status(400).json({
        success: false,
        message: 'ID de usuario inválido'
      });
    }
    
    // Verificar que solo los admin puedan eliminar usuarios
    if (req.user?.rol !== 'admin') {
      return res.status(403).json({
        success: false,
        message: 'Solo los administradores pueden eliminar usuarios'
      });
    }
    
    // Verificar que un admin no pueda eliminarse a sí mismo
    if (req.user?._id.toString() === userId) {
      return res.status(403).json({
        success: false,
        message: 'No puedes eliminar tu propia cuenta'
      });
    }
    
    // Buscar el usuario a eliminar
    const user = await User.findById(userId);
    
    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'Usuario no encontrado'
      });
    }
    
    // Eliminar el usuario
    await User.findByIdAndDelete(userId);
    
    res.status(200).json({
      success: true,
      message: 'Usuario eliminado exitosamente'
    });
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'Error desconocido';
    console.error('Error al eliminar usuario:', errorMessage);
    res.status(500).json({
      success: false,
      message: 'Error al eliminar usuario',
      error: errorMessage
    });
  }
};

// Exportar controlador como objeto
const userController = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  updatePassword,
  deleteUser
};

export default userController; 