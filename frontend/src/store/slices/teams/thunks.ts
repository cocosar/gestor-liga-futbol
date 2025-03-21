import { createAsyncThunk } from '@reduxjs/toolkit';
import { teamService } from '../../../api';
import { TeamFormData, TeamPaginationParams } from '../../../types';
import { 
  teamsLoading, 
  teamsLoadSuccess, 
  teamLoadSuccess, 
  teamCreateSuccess, 
  teamUpdateSuccess, 
  teamDeleteSuccess, 
  teamsFail 
} from '../../../store/slices/teams';
import { AppDispatch } from '../../index';

/**
 * Thunk para obtener listado de equipos
 */
export const fetchTeams = createAsyncThunk<void, TeamPaginationParams, { dispatch: AppDispatch }>(
  'teams/fetchTeams',
  async (params, { dispatch, rejectWithValue }) => {
    try {
      dispatch(teamsLoading());
      const response = await teamService.getTeams(params);
      
      if (!response.success) {
        dispatch(teamsFail(response.message || 'Error al obtener los equipos'));
        return rejectWithValue(response.message || 'Error al obtener los equipos');
      }
      
      dispatch(teamsLoadSuccess({
        teams: response.equipos || [],
        total: response.totalEquipos || 0,
        page: params.page,
        limit: params.limit
      }));
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : 'Error al conectarse con el servidor';
      dispatch(teamsFail(errorMessage));
      return rejectWithValue(errorMessage);
    }
  }
);

/**
 * Thunk para obtener equipo por ID
 */
export const fetchTeamById = createAsyncThunk<void, string, { dispatch: AppDispatch }>(
  'teams/fetchTeamById',
  async (id, { dispatch, rejectWithValue }) => {
    try {
      dispatch(teamsLoading());
      const response = await teamService.getTeamById(id);
      
      if (!response.success) {
        dispatch(teamsFail(response.message || 'Error al obtener el equipo'));
        return rejectWithValue(response.message || 'Error al obtener el equipo');
      }
      
      dispatch(teamLoadSuccess(response.equipo));
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : 'Error al obtener el equipo';
      dispatch(teamsFail(errorMessage));
      return rejectWithValue(errorMessage);
    }
  }
);

/**
 * Thunk para crear un nuevo equipo
 */
export const createTeam = createAsyncThunk<void, TeamFormData, { dispatch: AppDispatch }>(
  'teams/createTeam',
  async (teamData, { dispatch, rejectWithValue }) => {
    try {
      dispatch(teamsLoading());
      const response = await teamService.createTeam(teamData);
      
      if (!response.success) {
        dispatch(teamsFail(response.message || 'Error al crear el equipo'));
        return rejectWithValue(response.message || 'Error al crear el equipo');
      }
      
      dispatch(teamCreateSuccess(response.equipo));
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : 'Error al crear el equipo';
      dispatch(teamsFail(errorMessage));
      return rejectWithValue(errorMessage);
    }
  }
);

/**
 * Thunk para actualizar un equipo existente
 */
export const updateTeam = createAsyncThunk<
  void, 
  { id: string; teamData: TeamFormData }, 
  { dispatch: AppDispatch }
>(
  'teams/updateTeam',
  async ({ id, teamData }, { dispatch, rejectWithValue }) => {
    try {
      dispatch(teamsLoading());
      const response = await teamService.updateTeam(id, teamData);
      
      if (!response.success) {
        dispatch(teamsFail(response.message || 'Error al actualizar el equipo'));
        return rejectWithValue(response.message || 'Error al actualizar el equipo');
      }
      
      dispatch(teamUpdateSuccess(response.equipo));
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : 'Error al actualizar el equipo';
      dispatch(teamsFail(errorMessage));
      return rejectWithValue(errorMessage);
    }
  }
);

/**
 * Thunk para eliminar un equipo
 */
export const deleteTeam = createAsyncThunk<void, string, { dispatch: AppDispatch }>(
  'teams/deleteTeam',
  async (id, { dispatch, rejectWithValue }) => {
    try {
      dispatch(teamsLoading());
      const response = await teamService.deleteTeam(id);
      
      if (!response.success) {
        dispatch(teamsFail(response.message || 'Error al eliminar el equipo'));
        return rejectWithValue(response.message || 'Error al eliminar el equipo');
      }
      
      dispatch(teamDeleteSuccess(id));
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : 'Error al eliminar el equipo';
      dispatch(teamsFail(errorMessage));
      return rejectWithValue(errorMessage);
    }
  }
); 