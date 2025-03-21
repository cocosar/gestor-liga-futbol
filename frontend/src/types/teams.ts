// Interfaz para objetos de equipo en listados
export interface TeamListItem {
  _id: string;
  nombre: string;
  categoria: string;
  tipo: string;
  entrenador?: string;
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

// Interfaz para parámetros de paginación en solicitudes de equipos
export interface TeamPaginationParams {
  page: number;
  limit: number;
  sort?: string;
  order?: 'asc' | 'desc';
  search?: string;
  categoria?: string;
  tipo?: string;
}

// Interfaz para datos para crear/actualizar equipo
export interface TeamFormData {
  nombre: string;
  categoria: string;
  tipo: string;
  entrenador?: string;
  logoUrl?: string;
  activo?: boolean;
} 