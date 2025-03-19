import { describe, test, expect, vi } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { useTeams } from '../../hooks/useTeams';
import teamsReducer from '../../store/slices/teams/teamsSlice';
import authReducer from '../../store/slices/auth/authSlice';
import usersReducer from '../../store/slices/users';
import * as teamsThunks from '../../store/slices/teams/thunks';
import { TeamListItem, PaginationParams, TeamFormData } from '../../types';
import { ReactNode } from 'react';

// Mock para los thunks
vi.mock('../../store/slices/teams/thunks', () => ({
  fetchTeams: vi.fn(() => () => {}),
  fetchTeamById: vi.fn(() => () => {}),
  createTeam: vi.fn(() => () => {}),
  updateTeam: vi.fn(() => () => {}),
  deleteTeam: vi.fn(() => () => {})
}));

describe('useTeams Hook', () => {
  // Configuración de la tienda de Redux para las pruebas
  const setupStore = (initialState = {}) => {
    return configureStore({
      reducer: {
        teams: teamsReducer,
        auth: authReducer,
        users: usersReducer
      },
      middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
      preloadedState: initialState
    });
  };

  // Mock de equipo para pruebas
  const mockTeam: TeamListItem = {
    _id: '1',
    nombre: 'Real Madrid',
    categoria: 'Senior',
    tipo: 'Masculino',
    entrenador: 'Carlo Ancelotti',
    logoUrl: 'logo1.jpg',
    activo: true
  };

  // Estado inicial con equipos
  const initialState = {
    teams: {
      teams: [mockTeam],
      selectedTeam: mockTeam,
      loading: false,
      error: null,
      total: 1,
      page: 1,
      limit: 10
    }
  };

  // Wrapper para el renderHook
  const Wrapper = ({ children }: { children: ReactNode }) => {
    const store = setupStore(initialState);
    return <Provider store={store}>{children}</Provider>;
  };

  // Función para renderizar el hook con un store personalizado
  const renderTeamHook = (customState = {}) => {
    const store = setupStore({
      ...initialState,
      ...customState
    });

    const wrapper = ({ children }: { children: ReactNode }) => (
      <Provider store={store}>{children}</Provider>
    );

    return renderHook(() => useTeams(), { wrapper });
  };

  // Limpiar mocks después de cada prueba
  afterEach(() => {
    vi.clearAllMocks();
  });

  test('debería devolver los datos del estado y las funciones', () => {
    const { result } = renderHook(() => useTeams(), { wrapper: Wrapper });

    // Verificar que devuelve los datos del estado
    expect(result.current.teams).toEqual([mockTeam]);
    expect(result.current.selectedTeam).toEqual(mockTeam);
    expect(result.current.loading).toBe(false);
    expect(result.current.error).toBeNull();
    expect(result.current.pagination).toEqual({
      total: 1,
      page: 1,
      limit: 10,
      totalPages: 1
    });

    // Verificar que devuelve las funciones
    expect(typeof result.current.fetchTeams).toBe('function');
    expect(typeof result.current.fetchTeamById).toBe('function');
    expect(typeof result.current.createTeam).toBe('function');
    expect(typeof result.current.updateTeam).toBe('function');
    expect(typeof result.current.deleteTeam).toBe('function');
  });

  test('fetchTeams debería llamar al thunk correspondiente', () => {
    const { result } = renderHook(() => useTeams(), { wrapper: Wrapper });
    const mockParams: PaginationParams = { page: 1, limit: 10 };

    // Ejecutar la función
    act(() => {
      result.current.fetchTeams(mockParams);
    });

    // Verificar que se llama al thunk con los parámetros correctos
    expect(teamsThunks.fetchTeams).toHaveBeenCalledWith(mockParams);
  });

  test('fetchTeamById debería llamar al thunk correspondiente', () => {
    const { result } = renderHook(() => useTeams(), { wrapper: Wrapper });
    const teamId = '1';

    // Ejecutar la función
    act(() => {
      result.current.fetchTeamById(teamId);
    });

    // Verificar que se llama al thunk con los parámetros correctos
    expect(teamsThunks.fetchTeamById).toHaveBeenCalledWith(teamId);
  });

  test('createTeam debería llamar al thunk correspondiente', () => {
    const { result } = renderHook(() => useTeams(), { wrapper: Wrapper });
    const teamData: TeamFormData = {
      nombre: 'Nuevo Equipo',
      categoria: 'Juvenil',
      tipo: 'Masculino',
      entrenador: 'Entrenador Nuevo'
    };

    // Ejecutar la función
    act(() => {
      result.current.createTeam(teamData);
    });

    // Verificar que se llama al thunk con los parámetros correctos
    expect(teamsThunks.createTeam).toHaveBeenCalledWith(teamData);
  });

  test('updateTeam debería llamar al thunk correspondiente', () => {
    const { result } = renderHook(() => useTeams(), { wrapper: Wrapper });
    const teamId = '1';
    const teamData: TeamFormData = {
      nombre: 'Real Madrid Actualizado',
      categoria: 'Senior',
      tipo: 'Masculino',
      entrenador: 'Zinedine Zidane'
    };

    // Ejecutar la función
    act(() => {
      result.current.updateTeam(teamId, teamData);
    });

    // Verificar que se llama al thunk con los parámetros correctos
    expect(teamsThunks.updateTeam).toHaveBeenCalledWith({ id: teamId, teamData });
  });

  test('deleteTeam debería llamar al thunk correspondiente', () => {
    const { result } = renderHook(() => useTeams(), { wrapper: Wrapper });
    const teamId = '1';

    // Ejecutar la función
    act(() => {
      result.current.deleteTeam(teamId);
    });

    // Verificar que se llama al thunk con los parámetros correctos
    expect(teamsThunks.deleteTeam).toHaveBeenCalledWith(teamId);
  });

  test('debería reflejar el estado de carga', () => {
    const { result } = renderTeamHook({
      teams: {
        ...initialState.teams,
        loading: true
      }
    });

    expect(result.current.loading).toBe(true);
  });

  test('debería reflejar errores', () => {
    const errorMessage = 'Error en la operación';
    const { result } = renderTeamHook({
      teams: {
        ...initialState.teams,
        error: errorMessage
      }
    });

    expect(result.current.error).toBe(errorMessage);
  });

  test('getTeamById debería devolver el equipo correcto', () => {
    const { result } = renderHook(() => useTeams(), { wrapper: Wrapper });
    
    expect(result.current.getTeamById('1')).toEqual(mockTeam);
    expect(result.current.getTeamById('2')).toBeUndefined();
  });
}); 