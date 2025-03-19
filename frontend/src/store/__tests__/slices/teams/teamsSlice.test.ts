import { describe, test, expect } from 'vitest';
import teamsReducer, { 
  teamsLoading, 
  teamsLoadSuccess, 
  teamLoadSuccess, 
  teamCreateSuccess, 
  teamUpdateSuccess, 
  teamDeleteSuccess, 
  teamsFail, 
  clearSelectedTeam, 
  clearErrors 
} from '../../../slices/teams/teamsSlice';
import { TeamListItem } from '../../../../types';

describe('Teams Slice', () => {
  // Estado inicial esperado
  const initialState = {
    teams: [],
    selectedTeam: null,
    loading: false,
    error: null,
    total: 0,
    page: 1,
    limit: 10
  };

  // Mock de datos de equipo para pruebas
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

  test('debería retornar el estado inicial', () => {
    expect(teamsReducer(undefined, { type: 'unknown' })).toEqual(initialState);
  });

  test('debería manejar teamsLoading correctamente', () => {
    const action = teamsLoading();
    const state = teamsReducer(initialState, action);
    
    expect(state.loading).toBe(true);
    expect(state.error).toBe(null);
  });

  test('debería manejar teamsLoadSuccess correctamente', () => {
    const payload = {
      teams: mockTeams,
      total: 10,
      page: 2,
      limit: 5
    };
    
    const action = teamsLoadSuccess(payload);
    const state = teamsReducer(initialState, action);
    
    expect(state.teams).toEqual(mockTeams);
    expect(state.total).toBe(10);
    expect(state.page).toBe(2);
    expect(state.limit).toBe(5);
    expect(state.loading).toBe(false);
    expect(state.error).toBe(null);
  });

  test('debería manejar teamLoadSuccess correctamente', () => {
    const action = teamLoadSuccess(mockTeams[0]);
    const state = teamsReducer(initialState, action);
    
    expect(state.selectedTeam).toEqual(mockTeams[0]);
    expect(state.loading).toBe(false);
    expect(state.error).toBe(null);
  });

  test('debería manejar teamCreateSuccess correctamente', () => {
    const stateBefore = {
      ...initialState,
      teams: [mockTeams[1]],
      total: 1
    };
    
    const action = teamCreateSuccess(mockTeams[0]);
    const state = teamsReducer(stateBefore, action);
    
    // El nuevo equipo debe ser añadido al principio del array
    expect(state.teams[0]).toEqual(mockTeams[0]);
    expect(state.teams.length).toBe(2);
    expect(state.total).toBe(2);
    expect(state.loading).toBe(false);
    expect(state.error).toBe(null);
  });

  test('debería manejar teamUpdateSuccess correctamente', () => {
    const stateBefore = {
      ...initialState,
      teams: [...mockTeams],
      selectedTeam: mockTeams[0]
    };
    
    const updatedTeam = {
      ...mockTeams[0],
      nombre: 'Real Madrid CF',
      entrenador: 'Zinedine Zidane'
    };
    
    const action = teamUpdateSuccess(updatedTeam);
    const state = teamsReducer(stateBefore, action);
    
    // Verificar que se ha actualizado el equipo en la lista
    expect(state.teams.find(team => team._id === '1')).toEqual(updatedTeam);
    // Verificar que se ha actualizado el equipo seleccionado
    expect(state.selectedTeam).toEqual(updatedTeam);
    expect(state.loading).toBe(false);
    expect(state.error).toBe(null);
  });

  test('debería manejar teamUpdateSuccess sin afectar el equipo seleccionado si es distinto', () => {
    const stateBefore = {
      ...initialState,
      teams: [...mockTeams],
      selectedTeam: mockTeams[1]
    };
    
    const updatedTeam = {
      ...mockTeams[0],
      nombre: 'Real Madrid CF',
      entrenador: 'Zinedine Zidane'
    };
    
    const action = teamUpdateSuccess(updatedTeam);
    const state = teamsReducer(stateBefore, action);
    
    // Verificar que se ha actualizado el equipo en la lista
    expect(state.teams.find(team => team._id === '1')).toEqual(updatedTeam);
    // Verificar que NO se ha actualizado el equipo seleccionado porque es distinto
    expect(state.selectedTeam).toEqual(mockTeams[1]);
  });

  test('debería manejar teamDeleteSuccess correctamente', () => {
    const stateBefore = {
      ...initialState,
      teams: [...mockTeams],
      total: 2
    };
    
    const action = teamDeleteSuccess('1');
    const state = teamsReducer(stateBefore, action);
    
    // Verificar que se ha eliminado el equipo
    expect(state.teams.length).toBe(1);
    expect(state.teams[0]._id).toBe('2');
    expect(state.total).toBe(1);
  });

  test('debería manejar teamDeleteSuccess eliminando el equipo seleccionado', () => {
    const stateBefore = {
      ...initialState,
      teams: [...mockTeams],
      selectedTeam: mockTeams[0],
      total: 2
    };
    
    const action = teamDeleteSuccess('1');
    const state = teamsReducer(stateBefore, action);
    
    // Verificar que se ha eliminado el equipo y el selectedTeam se ha puesto a null
    expect(state.teams.length).toBe(1);
    expect(state.selectedTeam).toBeNull();
  });

  test('debería manejar teamsFail correctamente', () => {
    const errorMessage = 'Error en la operación';
    const action = teamsFail(errorMessage);
    const state = teamsReducer(initialState, action);
    
    expect(state.loading).toBe(false);
    expect(state.error).toBe(errorMessage);
  });

  test('debería manejar clearSelectedTeam correctamente', () => {
    const stateBefore = {
      ...initialState,
      selectedTeam: mockTeams[0]
    };
    
    const action = clearSelectedTeam();
    const state = teamsReducer(stateBefore, action);
    
    expect(state.selectedTeam).toBeNull();
  });

  test('debería manejar clearErrors correctamente', () => {
    const stateBefore = {
      ...initialState,
      error: 'Algún error'
    };
    
    const action = clearErrors();
    const state = teamsReducer(stateBefore, action);
    
    expect(state.error).toBeNull();
    // Verificar que no se modifican otros campos
    expect(state.teams).toEqual(initialState.teams);
    expect(state.selectedTeam).toEqual(initialState.selectedTeam);
    expect(state.loading).toBe(initialState.loading);
  });
}); 