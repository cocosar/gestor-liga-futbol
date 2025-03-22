// Interfaz para el usuario
export interface Usuario {
  _id: string;
  nombre: string;
  apellido: string;
  email: string;
  rol: string;
  activo: boolean;
  fechaCreacion: string;
  ultimoAcceso?: string;
}

// Interfaz para datos de registro
export interface RegisterData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role: string;
}

// Interfaz para datos de login
export interface LoginData {
  email: string;
  password: string;
}

// Interfaz para actualización de perfil
export interface UpdateProfileData {
  nombre?: string;
  apellido?: string;
  email?: string;
}

// Interfaz para cambio de contraseña
export interface ChangePasswordData {
  currentPassword: string;
  newPassword: string;
}

// Interfaz para respuesta de autenticación
export interface AuthResponse {
  success: boolean;
  token?: string;
  usuario?: Usuario;
  message?: string;
} 