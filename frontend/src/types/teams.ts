// Interfaz para objetos de equipo en listados
export interface TeamListItem {
  _id: string;
  nombre: string;
  categoria: string;
  tipo: string;
  entrenador?: string;
  manager?: string;
  logoUrl?: string;
  activo: boolean;
}

// Interfaz para la respuesta de listado de equipos
export interface TeamsResponse {
  success: boolean;
  equipos?: TeamListItem[];
  totalEquipos?: number;
  message?: string;
}

// Interfaz para la respuesta de un solo equipo
export interface TeamResponse {
  success: boolean;
  equipo?: TeamListItem;
  message?: string;
}

// Interfaz para parámetros de paginación en solicitudes
// Reutilizamos PaginationParams de users.ts

// Interfaz para datos para crear/actualizar equipo
export interface TeamFormData {
  nombre: string;
  categoria: string;
  tipo: string;
  entrenador?: string;
  manager?: string;
  logoUrl?: string;
  activo?: boolean;
} 