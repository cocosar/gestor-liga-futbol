import { TeamListItem } from './teams';

export interface PlayerStats {
  goles: number;
  asistencias: number;
  tarjetasAmarillas: number;
  tarjetasRojas: number;
  partidosJugados: number;
  minutos: number;
}

export interface Player {
  _id: string;
  nombre: string;
  apellido: string;
  fechaNacimiento?: string;
  fotoPerfil?: string;
  numeroIdentificacion: string;
  posicion: 'indefinida' | 'portero' | 'defensa' | 'mediocampista' | 'delantero';
  numeroCamiseta?: number;
  equipo?: string | TeamListItem;
  equiposAnteriores?: string[] | TeamListItem[];
  activo: boolean;
  altura?: number;
  peso?: number;
  piePreferido?: 'izquierdo' | 'derecho' | 'ambos';
  estadisticas?: PlayerStats;
  createdAt?: string;
  updatedAt?: string;
}

export interface PlayersState {
  players: Player[];
  player: Player | null;
  loading: boolean;
  error: string | null;
  success: boolean;
  pagination: {
    totalPlayers: number;
    totalPages: number;
    currentPage: number;
    hasNextPage: boolean;
    hasPrevPage: boolean;
  } | null;
}

export interface PlayersResponse {
  players: Player[];
  pagination: {
    totalPlayers: number;
    totalPages: number;
    currentPage: number;
    hasNextPage: boolean;
    hasPrevPage: boolean;
  };
}

export interface PlayerFilters {
  nombre?: string;
  apellido?: string;
  posicion?: string;
  equipo?: string;
  activo?: boolean;
  page?: number;
  limit?: number;
}

export interface CreatePlayerData {
  nombre: string;
  apellido: string;
  fechaNacimiento?: string;
  fotoPerfil?: string;
  numeroIdentificacion: string;
  posicion: 'indefinida' | 'portero' | 'defensa' | 'mediocampista' | 'delantero';
  numeroCamiseta?: number;
  equipo?: string;
  altura?: number;
  peso?: number;
  piePreferido?: 'izquierdo' | 'derecho' | 'ambos';
}

export interface UpdatePlayerData extends Partial<CreatePlayerData> {
  activo?: boolean;
  estadisticas?: PlayerStats;
}

export interface UpdatePlayerStatsData {
  estadisticas: PlayerStats;
} 