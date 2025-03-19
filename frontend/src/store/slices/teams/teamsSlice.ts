import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TeamListItem } from '../../../types';

// Definir interfaces para el estado
interface TeamsState {
  teams: TeamListItem[];
  selectedTeam: TeamListItem | null;
  loading: boolean;
  error: string | null;
  total: number;
  page: number;
  limit: number;
}

// Estado inicial
const initialState: TeamsState = {
  teams: [],
  selectedTeam: null,
  loading: false,
  error: null,
  total: 0,
  page: 1,
  limit: 10
};

// Crear slice
const teamsSlice = createSlice({
  name: 'teams',
  initialState,
  reducers: {
    // Iniciar carga de datos
    teamsLoading: (state) => {
      state.loading = true;
      state.error = null;
    },
    
    // Carga de lista de equipos exitosa
    teamsLoadSuccess: (state, action: PayloadAction<{
      teams: TeamListItem[];
      total: number;
      page: number;
      limit: number;
    }>) => {
      state.teams = action.payload.teams;
      state.total = action.payload.total;
      state.page = action.payload.page;
      state.limit = action.payload.limit;
      state.loading = false;
      state.error = null;
    },
    
    // Carga de equipo individual exitosa
    teamLoadSuccess: (state, action: PayloadAction<TeamListItem>) => {
      state.selectedTeam = action.payload;
      state.loading = false;
      state.error = null;
    },
    
    // Creación de equipo exitosa
    teamCreateSuccess: (state, action: PayloadAction<TeamListItem>) => {
      state.teams = [action.payload, ...state.teams];
      state.total += 1;
      state.loading = false;
      state.error = null;
    },
    
    // Actualización de equipo exitosa
    teamUpdateSuccess: (state, action: PayloadAction<TeamListItem>) => {
      state.teams = state.teams.map(team => 
        team._id === action.payload._id ? action.payload : team
      );
      if (state.selectedTeam && state.selectedTeam._id === action.payload._id) {
        state.selectedTeam = action.payload;
      }
      state.loading = false;
      state.error = null;
    },
    
    // Eliminación de equipo exitosa
    teamDeleteSuccess: (state, action: PayloadAction<string>) => {
      state.teams = state.teams.filter(team => team._id !== action.payload);
      if (state.selectedTeam && state.selectedTeam._id === action.payload) {
        state.selectedTeam = null;
      }
      state.total -= 1;
      state.loading = false;
      state.error = null;
    },
    
    // Fallo en operaciones de equipos
    teamsFail: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
    
    // Limpiar equipo seleccionado
    clearSelectedTeam: (state) => {
      state.selectedTeam = null;
    },
    
    // Limpiar errores
    clearErrors: (state) => {
      state.error = null;
    },
  },
});

// Exportar acciones y reducer
export const { 
  teamsLoading, 
  teamsLoadSuccess, 
  teamLoadSuccess, 
  teamCreateSuccess, 
  teamUpdateSuccess, 
  teamDeleteSuccess, 
  teamsFail, 
  clearSelectedTeam, 
  clearErrors 
} = teamsSlice.actions;

export default teamsSlice.reducer; 