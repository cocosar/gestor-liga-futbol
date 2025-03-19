import { RootState } from '../../index';
import { createSelector } from '@reduxjs/toolkit';

// Selector para obtener la lista de equipos
export const selectTeams = (state: RootState) => state.teams.teams;

// Selector para obtener el equipo seleccionado
export const selectSelectedTeam = (state: RootState) => state.teams.selectedTeam;

// Selector para verificar si se están cargando datos
export const selectLoading = (state: RootState) => state.teams.loading;

// Selector para obtener errores
export const selectError = (state: RootState) => state.teams.error;

// Selector para obtener el total de equipos
export const selectTotal = (state: RootState) => state.teams.total;

// Selector para obtener la página actual
export const selectPage = (state: RootState) => state.teams.page;

// Selector para obtener el límite de equipos por página
export const selectLimit = (state: RootState) => state.teams.limit;

// Selector para obtener información de paginación (usando memoización)
export const selectPagination = createSelector(
  [selectTotal, selectPage, selectLimit],
  (total, page, limit) => ({
    total,
    page,
    limit,
    totalPages: Math.ceil(total / limit)
  })
);

// Selector para verificar si existen equipos
export const selectHasTeams = (state: RootState) => state.teams.teams.length > 0;

// Selector para obtener equipo por ID
export const selectTeamById = (state: RootState, teamId: string) => 
  state.teams.teams.find(team => team._id === teamId) || null; 