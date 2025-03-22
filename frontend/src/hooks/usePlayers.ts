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
  const fetchPlayers = useCallback((filters: PlayerFilters = {}) => {
    dispatch(playersThunks.fetchPlayers(filters));
  }, [dispatch]);
  
  const fetchPlayerById = useCallback((playerId: string) => {
    dispatch(playersThunks.fetchPlayerById(playerId));
  }, [dispatch]);
  
  const createPlayer = useCallback((playerData: CreatePlayerData) => {
    dispatch(playersThunks.createPlayer(playerData));
  }, [dispatch]);
  
  const updatePlayer = useCallback((playerId: string, playerData: UpdatePlayerData) => {
    dispatch(playersThunks.updatePlayer({ playerId, playerData }));
  }, [dispatch]);
  
  const updatePlayerStats = useCallback((playerId: string, statsData: UpdatePlayerStatsData) => {
    dispatch(playersThunks.updatePlayerStats({ playerId, statsData }));
  }, [dispatch]);
  
  const deletePlayer = useCallback((playerId: string) => {
    dispatch(playersThunks.deletePlayer(playerId));
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
    
    // Utilidades de filtrado
    getPlayersByTeam,
    getPlayersByPosition,
    getActivePlayers
  };
}; 