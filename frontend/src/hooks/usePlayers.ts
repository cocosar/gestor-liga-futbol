import { useCallback } from 'react';
import { useAppDispatch, useAppSelector } from '../store';
import { playersSelectors, playersThunks } from '../store/slices/players';
import {
  PlayerFilters,
  CreatePlayerData,
  UpdatePlayerData,
  UpdatePlayerStatsData
} from '../types';

/**
 * Hook personalizado para gestionar jugadores
 * @returns Métodos y estado relacionados con jugadores
 */
export const usePlayers = () => {
  const dispatch = useAppDispatch();
  
  // Seleccionar datos del estado
  const players = useAppSelector(playersSelectors.selectPlayers);
  const selectedPlayer = useAppSelector(playersSelectors.selectSelectedPlayer);
  const loading = useAppSelector(playersSelectors.selectLoading);
  const error = useAppSelector(playersSelectors.selectError);
  const success = useAppSelector(playersSelectors.selectSuccess);
  const pagination = useAppSelector(playersSelectors.selectPagination);
  const hasPlayers = useAppSelector(playersSelectors.selectHasPlayers);
  
  // Métodos memorizados para reducir re-renderizados
  const fetchPlayers = useCallback((filters?: PlayerFilters) => {
    return dispatch(playersThunks.fetchPlayers(filters || {}));
  }, [dispatch]);
  
  const fetchPlayerById = useCallback((id: string) => {
    return dispatch(playersThunks.fetchPlayerById(id));
  }, [dispatch]);
  
  const createPlayer = useCallback((data: CreatePlayerData) => {
    return dispatch(playersThunks.createPlayer(data));
  }, [dispatch]);
  
  const updatePlayer = useCallback((id: string, data: UpdatePlayerData) => {
    return dispatch(playersThunks.updatePlayer({ playerId: id, playerData: data }));
  }, [dispatch]);
  
  const updatePlayerStats = useCallback((id: string, data: UpdatePlayerStatsData) => {
    return dispatch(playersThunks.updatePlayerStats({ playerId: id, statsData: data }));
  }, [dispatch]);
  
  const deletePlayer = useCallback((id: string) => {
    return dispatch(playersThunks.deletePlayer(id));
  }, [dispatch]);
  
  // Nuevos métodos para asignación de jugadores a equipos
  const assignPlayerToTeam = useCallback((playerId: string, equipoId: string) => {
    return dispatch(playersThunks.assignPlayerToTeam(playerId, equipoId));
  }, [dispatch]);
  
  const removePlayerFromTeam = useCallback((playerId: string) => {
    return dispatch(playersThunks.removePlayerFromTeam(playerId));
  }, [dispatch]);
  
  // Filtrar jugadores por equipo (memorizado)
  const getPlayersByTeam = useCallback((teamId: string) => {
    return players.filter(player => 
      (typeof player.equipo === 'string' ? player.equipo : player.equipo?._id) === teamId
    );
  }, [players]);
  
  // Filtrar jugadores por posición (memorizado)
  const getPlayersByPosition = useCallback((posicion: string) => {
    return players.filter(player => player.posicion === posicion);
  }, [players]);
  
  // Filtrar jugadores activos (memorizado)
  const getActivePlayers = useCallback(() => {
    return players.filter(player => player.activo);
  }, [players]);
  
  return {
    // Estado
    players,
    selectedPlayer,
    loading,
    error,
    success,
    pagination,
    hasPlayers,
    
    // Acciones principales
    fetchPlayers,
    fetchPlayerById,
    createPlayer,
    updatePlayer,
    updatePlayerStats,
    deletePlayer,
    assignPlayerToTeam,
    removePlayerFromTeam,
    
    // Utilidades de filtrado
    getPlayersByTeam,
    getPlayersByPosition,
    getActivePlayers
  };
}; 