import { useCallback, useMemo } from 'react';
import { useAppDispatch, useAppSelector } from '../store';
import { teamsSelectors, teamsThunks } from '../store/slices/teams';
import { TeamFormData, TeamPaginationParams } from '../types';

/**
 * Hook personalizado para gestionar equipos
 * @returns Métodos y estado relacionados con equipos
 */
export const useTeams = () => {
  const dispatch = useAppDispatch();
  
  // Seleccionar datos del estado
  const teams = useAppSelector(teamsSelectors.selectTeams);
  const selectedTeam = useAppSelector(teamsSelectors.selectSelectedTeam);
  const loading = useAppSelector(teamsSelectors.selectLoading);
  const error = useAppSelector(teamsSelectors.selectError);
  const pagination = useAppSelector(teamsSelectors.selectPagination);
  const hasTeams = useAppSelector(teamsSelectors.selectHasTeams);
  
  // Métodos memorizados para reducir re-renderizados
  const fetchTeams = useCallback((params: TeamPaginationParams) => {
    dispatch(teamsThunks.fetchTeams(params));
  }, [dispatch]);
  
  const fetchTeamById = useCallback((id: string) => {
    dispatch(teamsThunks.fetchTeamById(id));
  }, [dispatch]);
  
  const createTeam = useCallback((teamData: TeamFormData) => {
    dispatch(teamsThunks.createTeam(teamData));
  }, [dispatch]);
  
  const updateTeam = useCallback((id: string, teamData: TeamFormData) => {
    dispatch(teamsThunks.updateTeam({ id, teamData }));
  }, [dispatch]);
  
  const deleteTeam = useCallback((id: string) => {
    dispatch(teamsThunks.deleteTeam(id));
  }, [dispatch]);
  
  // Objeto con todos los valores y métodos
  const teamUtils = useMemo(() => ({
    // Datos
    teams,
    selectedTeam,
    loading,
    error,
    pagination,
    hasTeams,
    
    // Métodos
    fetchTeams,
    fetchTeamById,
    createTeam,
    updateTeam,
    deleteTeam,
    
    // Utilidades para obtener equipos específicos
    getTeamById: (id: string) => teams.find(team => team._id === id),
  }), [
    teams, 
    selectedTeam, 
    loading, 
    error, 
    pagination, 
    hasTeams,
    fetchTeams,
    fetchTeamById,
    createTeam,
    updateTeam,
    deleteTeam
  ]);
  
  return teamUtils;
}; 