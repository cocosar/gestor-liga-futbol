import { createAsyncThunk } from '@reduxjs/toolkit';
import { playerService } from '../../../api';
import { 
  PlayerFilters, 
  CreatePlayerData, 
  UpdatePlayerData,
  UpdatePlayerStatsData 
} from '../../../types';
import {
  playersLoading,
  playersLoadSuccess,
  playerLoadSuccess,
  playerCreateSuccess,
  playerUpdateSuccess,
  playerStatsUpdateSuccess,
  playerDeleteSuccess,
  playersFail
} from './playersSlice';
import { AppDispatch } from '../../index';

// Obtener listado de jugadores
export const fetchPlayers = createAsyncThunk<
  void,
  PlayerFilters,
  { dispatch: AppDispatch }
>('players/fetchPlayers', async (filters, { dispatch }) => {
  dispatch(playersLoading());
  try {
    const response = await playerService.getPlayers(filters);
    dispatch(playersLoadSuccess(response));
  } catch (error) {
    if (error instanceof Error) {
      dispatch(playersFail(error.message));
    } else {
      dispatch(playersFail('Error al cargar jugadores'));
    }
  }
});

// Obtener un jugador por ID
export const fetchPlayerById = createAsyncThunk<
  void,
  string,
  { dispatch: AppDispatch }
>('players/fetchPlayerById', async (playerId, { dispatch }) => {
  dispatch(playersLoading());
  try {
    const player = await playerService.getPlayerById(playerId);
    dispatch(playerLoadSuccess(player));
  } catch (error) {
    if (error instanceof Error) {
      dispatch(playersFail(error.message));
    } else {
      dispatch(playersFail('Error al cargar el jugador'));
    }
  }
});

// Crear un nuevo jugador
export const createPlayer = createAsyncThunk<
  void,
  CreatePlayerData,
  { dispatch: AppDispatch }
>('players/createPlayer', async (playerData, { dispatch }) => {
  dispatch(playersLoading());
  try {
    const player = await playerService.createPlayer(playerData);
    dispatch(playerCreateSuccess(player));
  } catch (error) {
    if (error instanceof Error) {
      dispatch(playersFail(error.message));
    } else {
      dispatch(playersFail('Error al crear el jugador'));
    }
  }
});

// Actualizar un jugador existente
export const updatePlayer = createAsyncThunk<
  void,
  { playerId: string; playerData: UpdatePlayerData },
  { dispatch: AppDispatch }
>('players/updatePlayer', async ({ playerId, playerData }, { dispatch }) => {
  dispatch(playersLoading());
  try {
    const player = await playerService.updatePlayer(playerId, playerData);
    dispatch(playerUpdateSuccess(player));
  } catch (error) {
    if (error instanceof Error) {
      dispatch(playersFail(error.message));
    } else {
      dispatch(playersFail('Error al actualizar el jugador'));
    }
  }
});

// Actualizar estadísticas de un jugador
export const updatePlayerStats = createAsyncThunk<
  void,
  { playerId: string; statsData: UpdatePlayerStatsData },
  { dispatch: AppDispatch }
>('players/updatePlayerStats', async ({ playerId, statsData }, { dispatch }) => {
  dispatch(playersLoading());
  try {
    const player = await playerService.updatePlayerStats(playerId, statsData);
    dispatch(playerStatsUpdateSuccess(player));
  } catch (error) {
    if (error instanceof Error) {
      dispatch(playersFail(error.message));
    } else {
      dispatch(playersFail('Error al actualizar las estadísticas del jugador'));
    }
  }
});

// Eliminar un jugador
export const deletePlayer = createAsyncThunk<
  void,
  string,
  { dispatch: AppDispatch }
>('players/deletePlayer', async (playerId, { dispatch }) => {
  dispatch(playersLoading());
  try {
    await playerService.deletePlayer(playerId);
    dispatch(playerDeleteSuccess(playerId));
  } catch (error) {
    if (error instanceof Error) {
      dispatch(playersFail(error.message));
    } else {
      dispatch(playersFail('Error al eliminar el jugador'));
    }
  }
});

// Asignar un jugador a un equipo
export const assignPlayerToTeam = (playerId: string, equipoId: string) => async (dispatch: AppDispatch) => {
  try {
    dispatch(playersLoading());
    
    const player = await playerService.assignPlayerToTeam(playerId, equipoId);
    
    dispatch(playerUpdateSuccess(player));
    
    return { success: true, player };
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Error desconocido';
    dispatch(playersFail(errorMessage));
    return { success: false, error: errorMessage };
  }
};

// Eliminar un jugador de un equipo
export const removePlayerFromTeam = (playerId: string) => async (dispatch: AppDispatch) => {
  try {
    dispatch(playersLoading());
    
    const player = await playerService.removePlayerFromTeam(playerId);
    
    dispatch(playerUpdateSuccess(player));
    
    return { success: true, player };
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Error desconocido';
    dispatch(playersFail(errorMessage));
    return { success: false, error: errorMessage };
  }
}; 