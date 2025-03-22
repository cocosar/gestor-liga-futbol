import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Player, PlayersState } from '../../../types';

// Estado inicial
const initialState: PlayersState = {
  players: [],
  player: null,
  loading: false,
  error: null,
  success: false,
  pagination: null
};

// Crear slice
const playersSlice = createSlice({
  name: 'players',
  initialState,
  reducers: {
    // Iniciar carga de datos
    playersLoading: (state) => {
      state.loading = true;
      state.error = null;
      state.success = false;
    },
    
    // Carga de lista de jugadores exitosa
    playersLoadSuccess: (state, action: PayloadAction<{
      players: Player[];
      pagination: {
        totalPlayers: number;
        totalPages: number;
        currentPage: number;
        hasNextPage: boolean;
        hasPrevPage: boolean;
      };
    }>) => {
      state.loading = false;
      state.players = action.payload.players;
      state.pagination = action.payload.pagination;
      state.error = null;
    },
    
    // Carga de un solo jugador exitosa
    playerLoadSuccess: (state, action: PayloadAction<Player>) => {
      state.loading = false;
      state.player = action.payload;
      state.error = null;
    },
    
    // Creación de jugador exitosa
    playerCreateSuccess: (state, action: PayloadAction<Player>) => {
      state.loading = false;
      state.player = action.payload;
      state.success = true;
      state.error = null;
      
      // Añadir el nuevo jugador a la lista si ya hay jugadores cargados
      if (state.players.length > 0) {
        state.players = [action.payload, ...state.players];
      }
    },
    
    // Actualización de jugador exitosa
    playerUpdateSuccess: (state, action: PayloadAction<Player>) => {
      state.loading = false;
      state.player = action.payload;
      state.success = true;
      state.error = null;
      
      // Asegurarse de que el jugador actualizado reemplace completamente al anterior en la lista
      const updatedPlayer = action.payload;
      const index = state.players.findIndex(p => p._id === updatedPlayer._id);
      
      if (index !== -1) {
        // Creamos una nueva referencia del array completo para forzar la actualización en React
        const newPlayers = [...state.players];
        // Reemplazamos el jugador con una nueva referencia para asegurar re-render
        newPlayers[index] = { ...updatedPlayer };
        // Actualizamos el estado con el nuevo array
        state.players = newPlayers;
      }
    },
    
    // Actualización de estadísticas de jugador exitosa
    playerStatsUpdateSuccess: (state, action: PayloadAction<Player>) => {
      state.loading = false;
      state.player = action.payload;
      state.success = true;
      state.error = null;
      
      // Actualizar el jugador en la lista si ya está cargado
      state.players = state.players.map((player) =>
        player._id === action.payload._id ? action.payload : player
      );
    },
    
    // Eliminación de jugador exitosa
    playerDeleteSuccess: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.success = true;
      
      // Si el jugador eliminado es el que está seleccionado, limpiarlo
      if (state.player && state.player._id === action.payload) {
        state.player = null;
      }
      
      // Eliminar el jugador de la lista o marcarlo como inactivo
      state.players = state.players.filter(
        (player) => player._id !== action.payload
      );
    },
    
    // Error en operaciones de jugadores
    playersFail: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
      state.success = false;
    },
    
    // Limpiar jugador seleccionado
    clearSelectedPlayer: (state) => {
      state.player = null;
    },
    
    // Limpiar errores
    clearErrors: (state) => {
      state.error = null;
      state.success = false;
    },
    
    // Resetear estado
    resetPlayers: () => initialState
  }
});

// Exportar acciones y reducer
export const {
  playersLoading,
  playersLoadSuccess,
  playerLoadSuccess,
  playerCreateSuccess,
  playerUpdateSuccess,
  playerStatsUpdateSuccess,
  playerDeleteSuccess,
  playersFail,
  clearSelectedPlayer,
  clearErrors,
  resetPlayers
} = playersSlice.actions;

export default playersSlice.reducer; 