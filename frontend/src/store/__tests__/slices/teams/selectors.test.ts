import { describe, test, expect } from 'vitest';
import { 
  selectTeams,
  selectSelectedTeam,
  selectLoading,
  selectError,
  selectTotal,
  selectPage,
  selectLimit,
  selectPagination,
  selectHasTeams,
  selectTeamById
} from '../../../slices/teams/selectors';
import { RootState } from '../../../index';
import { TeamListItem } from '../../../../types';

// Mock de equipos para pruebas
const mockTeams: TeamListItem[] = [
  {
    _id: '1',
    nombre: 'Real Madrid',
    categoria: 'Senior',
    tipo: 'Masculino',
    entrenador: 'Carlo Ancelotti',
    logoUrl: 'logo1.jpg',
    activo: true
  },
  {
    _id: '2',
    nombre: 'Barcelona',
    categoria: 'Senior',
    tipo: 'Masculino',
    entrenador: 'Xavi Hernández',
    logoUrl: 'logo2.jpg',
    activo: true
  }
];

// Mock del estado de la aplicación
const mockRootState = {
  auth: {
    user: null,
    token: null,
    isAuthenticated: false,
    loading: false,
    error: null
  },
  users: {
    users: [],
    selectedUser: null,
    loading: false,
    error: null,
    total: 0,
    page: 1,
    limit: 10
  },
  teams: {
    teams: mockTeams,
    selectedTeam: mockTeams[0],
    loading: false,
    error: null,
    total: 10,
    page: 2,
    limit: 5
  }
} as RootState;

describe('Teams Selectors', () => {
  test('selectTeams debería devolver la lista de equipos', () => {
    expect(selectTeams(mockRootState)).toEqual(mockTeams);
  });

  test('selectSelectedTeam debería devolver el equipo seleccionado', () => {
    expect(selectSelectedTeam(mockRootState)).toEqual(mockTeams[0]);
  });

  test('selectLoading debería devolver el estado de carga', () => {
    expect(selectLoading(mockRootState)).toBe(false);
  });

  test('selectError debería devolver el mensaje de error', () => {
    expect(selectError(mockRootState)).toBeNull();
  });

  test('selectTotal debería devolver el total de equipos', () => {
    expect(selectTotal(mockRootState)).toBe(10);
  });

  test('selectPage debería devolver la página actual', () => {
    expect(selectPage(mockRootState)).toBe(2);
  });

  test('selectLimit debería devolver el límite de equipos por página', () => {
    expect(selectLimit(mockRootState)).toBe(5);
  });

  test('selectPagination debería devolver la información de paginación', () => {
    expect(selectPagination(mockRootState)).toEqual({
      total: 10,
      page: 2,
      limit: 5,
      totalPages: 2
    });
  });

  test('selectHasTeams debería devolver true si hay equipos', () => {
    expect(selectHasTeams(mockRootState)).toBe(true);
  });

  test('selectHasTeams debería devolver false si no hay equipos', () => {
    const stateWithoutTeams = {
      ...mockRootState,
      teams: {
        ...mockRootState.teams,
        teams: []
      }
    } as RootState;

    expect(selectHasTeams(stateWithoutTeams)).toBe(false);
  });

  test('selectTeamById debería devolver el equipo con el ID especificado', () => {
    expect(selectTeamById(mockRootState, '1')).toEqual(mockTeams[0]);
  });

  test('selectTeamById debería devolver null si no encuentra el equipo', () => {
    expect(selectTeamById(mockRootState, '3')).toBeNull();
  });
}); 