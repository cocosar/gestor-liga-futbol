import { createAsyncThunk } from '@reduxjs/toolkit';
import { teamService } from '../../../api';
import { TeamFormData, PaginationParams } from '../../../types';
import { 
  teamsLoading, 
  teamsLoadSuccess, 
  teamLoadSuccess, 
  teamCreateSuccess, 
  teamUpdateSuccess, 
  teamDeleteSuccess, 
  teamsFail 
} from './teamsSlice';
import { AppDispatch } from '../../index';

// Obtener listado de equipos
export const fetchTeams = createAsyncThunk<
  void,
  PaginationParams,
  { dispatch: AppDispatch }
>('teams/fetchTeams', async (params, { dispatch }) => {
  dispatch(teamsLoading());
  try {
    const response = await teamService.getTeams(params);
    if (response.success && response.equipos) {
      dispatch(teamsLoadSuccess({ 
        teams: response.equipos,
        total: response.totalEquipos || 0,
        page: params.page,
        limit: params.limit
      }));
      return;
    }
    dispatch(teamsFail(response.message || 'Error al cargar equipos'));
  } catch {
    dispatch(teamsFail('Error al conectarse con el servidor'));
  }
});

// Obtener un equipo por ID
export const fetchTeamById = createAsyncThunk<
  void,
  string,
  { dispatch: AppDispatch }
>('teams/fetchTeamById', async (teamId, { dispatch }) => {
  dispatch(teamsLoading());
  try {
    const response = await teamService.getTeamById(teamId);
    if (response.success && response.equipo) {
      dispatch(teamLoadSuccess(response.equipo));
      return;
    }
    dispatch(teamsFail(response.message || 'Error al cargar equipo'));
  } catch {
    dispatch(teamsFail('Error al conectarse con el servidor'));
  }
});

// Crear un nuevo equipo
export const createTeam = createAsyncThunk<
  void,
  TeamFormData,
  { dispatch: AppDispatch }
>('teams/createTeam', async (teamData, { dispatch }) => {
  dispatch(teamsLoading());
  try {
    const response = await teamService.createTeam(teamData);
    if (response.success && response.equipo) {
      dispatch(teamCreateSuccess(response.equipo));
      return;
    }
    dispatch(teamsFail(response.message || 'Error al crear equipo'));
  } catch {
    dispatch(teamsFail('Error al conectarse con el servidor'));
  }
});

// Actualizar un equipo
export const updateTeam = createAsyncThunk<
  void,
  { id: string; teamData: TeamFormData },
  { dispatch: AppDispatch }
>('teams/updateTeam', async ({ id, teamData }, { dispatch }) => {
  dispatch(teamsLoading());
  try {
    const response = await teamService.updateTeam(id, teamData);
    if (response.success && response.equipo) {
      dispatch(teamUpdateSuccess(response.equipo));
      return;
    }
    dispatch(teamsFail(response.message || 'Error al actualizar equipo'));
  } catch {
    dispatch(teamsFail('Error al conectarse con el servidor'));
  }
});

// Eliminar un equipo
export const deleteTeam = createAsyncThunk<
  void,
  string,
  { dispatch: AppDispatch }
>('teams/deleteTeam', async (teamId, { dispatch }) => {
  dispatch(teamsLoading());
  try {
    const response = await teamService.deleteTeam(teamId);
    if (response.success) {
      dispatch(teamDeleteSuccess(teamId));
      return;
    }
    dispatch(teamsFail(response.message || 'Error al eliminar equipo'));
  } catch {
    dispatch(teamsFail('Error al conectarse con el servidor'));
  }
}); 