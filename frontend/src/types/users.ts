// Interfaz para objetos de usuario en listados
export interface UserListItem {
  _id: string;
  nombre: string;
  apellido: string;
  email: string;
  rol: string;
  activo: boolean;
}

// Interfaz para la respuesta de listado de usuarios
export interface UsersResponse {
  success: boolean;
  usuarios?: UserListItem[];
  totalUsuarios?: number;
  message?: string;
}

// Interfaz para la respuesta de un solo usuario
export interface UserResponse {
  success: boolean;
  usuario?: UserListItem;
  message?: string;
}

// Interfaz para parámetros de paginación en solicitudes
export interface PaginationParams {
  page: number;
  limit: number;
  sort?: string;
  order?: 'asc' | 'desc';
  search?: string;
}

// Interfaz para datos para crear/actualizar usuario
export interface UserFormData {
  nombre: string;
  apellido: string;
  email: string;
  password?: string; // Opcional para actualizaciones
  rol: string;
  activo?: boolean;
} 