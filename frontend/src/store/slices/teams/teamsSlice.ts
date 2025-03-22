import { createSlice } from '@reduxjs/toolkit';
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

// Interfaces para los payloads
interface FetchTeamsPayload {
  teams: TeamListItem[];
  total: number;
  page: number;
  limit: number;
}

// Función para adaptar el objeto del servidor al formato del frontend
const adaptTeamResponse = (team: unknown): TeamListItem => {
  const teamData = team as Record<string, unknown>;
  return {
    ...teamData as unknown as TeamListItem,
    logoUrl: (teamData.logo as string) || (teamData.logoUrl as string) || '',
  };
};

// Crear slice
const teamsSlice = createSlice({
  name: 'teams',
  initialState,
  reducers: {
    // Limpiar equipo seleccionado
    clearSelectedTeam: (state) => {
      state.selectedTeam = null;
    },
    
    // Limpiar errores
    clearErrors: (state) => {
      state.error = null;
    },

    // Acciones para manejar estados de carga y resultados
    teamsLoading: (state) => {
      state.loading = true;
      state.error = null;
    },
    
    teamsLoadSuccess: (state, action) => {
      const payload = action.payload as FetchTeamsPayload;
      state.teams = payload.teams.map(team => adaptTeamResponse(team));
      state.total = payload.total;
      state.page = payload.page;
      state.limit = payload.limit;
      state.loading = false;
      state.error = null;
    },
    
    teamLoadSuccess: (state, action) => {
      if (action.payload) {
        state.selectedTeam = adaptTeamResponse(action.payload);
      }
      state.loading = false;
      state.error = null;
    },
    
    teamCreateSuccess: (state, action) => {
      if (action.payload) {
        state.teams = [adaptTeamResponse(action.payload), ...state.teams];
        state.total += 1;
      }
      state.loading = false;
      state.error = null;
    },
    
    teamUpdateSuccess: (state, action) => {
      if (action.payload) {
        const updatedTeam = adaptTeamResponse(action.payload);
        state.teams = state.teams.map(team => 
          team._id === updatedTeam._id ? updatedTeam : team
        );
        if (state.selectedTeam && state.selectedTeam._id === updatedTeam._id) {
          state.selectedTeam = updatedTeam;
        }
      }
      state.loading = false;
      state.error = null;
    },
    
    teamDeleteSuccess: (state, action) => {
      if (action.payload) {
        const teamId = action.payload as string;
        state.teams = state.teams.filter(team => team._id !== teamId);
        if (state.selectedTeam && state.selectedTeam._id === teamId) {
          state.selectedTeam = null;
        }
        state.total -= 1;
      }
      state.loading = false;
      state.error = null;
    },
    
    teamsFail: (state, action) => {
      state.loading = false;
      state.error = action.payload as string || 'Error desconocido';
    },
  },
});

// Exportar acciones y reducer
export const { 
  clearSelectedTeam, 
  clearErrors,
  teamsLoading,
  teamsLoadSuccess,
  teamLoadSuccess,
  teamCreateSuccess,
  teamUpdateSuccess,
  teamDeleteSuccess,
  teamsFail
} = teamsSlice.actions;

export default teamsSlice.reducer; 