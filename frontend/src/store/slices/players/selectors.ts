import { RootState } from '../../index';
import { createSelector } from '@reduxjs/toolkit';

// Selector para obtener la lista de jugadores
export const selectPlayers = (state: RootState) => state.players.players;

// Selector para obtener el jugador seleccionado
export const selectSelectedPlayer = (state: RootState) => state.players.player;

// Selector para verificar si se están cargando datos
export const selectLoading = (state: RootState) => state.players.loading;

// Selector para obtener errores
export const selectError = (state: RootState) => state.players.error;

// Selector para obtener el estado de éxito
export const selectSuccess = (state: RootState) => state.players.success;

// Selector para obtener la paginación
export const selectPagination = (state: RootState) => state.players.pagination;

// Selector para verificar si existen jugadores
export const selectHasPlayers = (state: RootState) => state.players.players.length > 0;

// Selector para obtener jugador por ID
export const selectPlayerById = (state: RootState, playerId: string) => 
  state.players.players.find(player => player._id === playerId) || null;

// Selector para obtener jugadores por equipo
export const selectPlayersByTeam = createSelector(
  [selectPlayers, (_, teamId: string) => teamId],
  (players, teamId) => players.filter(
    player => (typeof player.equipo === 'string' ? player.equipo : player.equipo?._id) === teamId
  )
);

// Selector para obtener jugadores por posición
export const selectPlayersByPosition = createSelector(
  [selectPlayers, (_, posicion: string) => posicion],
  (players, posicion) => players.filter(player => player.posicion === posicion)
);

// Selector para obtener jugadores activos
export const selectActivePlayers = createSelector(
  [selectPlayers],
  (players) => players.filter(player => player.activo)
); 