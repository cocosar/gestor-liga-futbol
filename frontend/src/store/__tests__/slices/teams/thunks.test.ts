import { describe, test, expect, vi, beforeEach } from 'vitest';
import {
  fetchTeams,
  fetchTeamById,
  createTeam,
  updateTeam,
  deleteTeam
} from '../../../slices/teams/thunks';
import {
  teamsLoading,
  teamsLoadSuccess,
  teamLoadSuccess,
  teamCreateSuccess,
  teamUpdateSuccess,
  teamDeleteSuccess,
  teamsFail
} from '../../../slices/teams/teamsSlice';
import { teamService } from '../../../../api';
import { TeamListItem, TeamFormData, PaginationParams } from '../../../../types';

// Mock del servicio de equipos
vi.mock('../../../../api', () => ({
  teamService: {
    getTeams: vi.fn(),
    getTeamById: vi.fn(),
    createTeam: vi.fn(),
    updateTeam: vi.fn(),
    deleteTeam: vi.fn()
  }
}));

describe('Teams Thunks', () => {
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

  // Mock de datos de formulario
  const mockTeamFormData: TeamFormData = {
    nombre: 'Real Madrid',
    categoria: 'Senior',
    tipo: 'Masculino',
    entrenador: 'Carlo Ancelotti',
    logoUrl: 'logo1.jpg',
    activo: true
  };

  // Mock de dispatch
  const mockDispatch = vi.fn();

  // Limpiar mocks antes de cada prueba
  beforeEach(() => {
    vi.resetAllMocks();
  });

  describe('fetchTeams', () => {
    const mockParams: PaginationParams = {
      page: 1,
      limit: 10
    };

    test('debería dispatchar teamsLoadSuccess cuando la petición es exitosa', async () => {
      // Configurar mock para retornar datos de éxito
      (teamService.getTeams as vi.Mock).mockResolvedValue({
        success: true,
        equipos: [mockTeam],
        totalEquipos: 1
      });

      // Ejecutar el thunk
      await fetchTeams(mockParams)(mockDispatch);

      // Verificar que se llama a las acciones correctas
      expect(mockDispatch).toHaveBeenCalledWith(teamsLoading());
      expect(mockDispatch).toHaveBeenCalledWith(
        teamsLoadSuccess({
          teams: [mockTeam],
          total: 1,
          page: 1,
          limit: 10
        })
      );

      // Verificar llamada al servicio
      expect(teamService.getTeams).toHaveBeenCalledWith(mockParams);
    });

    test('debería dispatchar teamsFail cuando la petición falla', async () => {
      // Configurar mock para retornar datos de error
      (teamService.getTeams as vi.Mock).mockResolvedValue({
        success: false,
        message: 'Error al obtener equipos'
      });

      // Ejecutar el thunk
      await fetchTeams(mockParams)(mockDispatch);

      // Verificar que se llama a las acciones correctas
      expect(mockDispatch).toHaveBeenCalledWith(teamsLoading());
      expect(mockDispatch).toHaveBeenCalledWith(teamsFail('Error al obtener equipos'));
    });

    test('debería dispatchar teamsFail cuando la petición lanza una excepción', async () => {
      // Configurar mock para lanzar excepción
      (teamService.getTeams as vi.Mock).mockRejectedValue(new Error('Error en la petición'));

      // Ejecutar el thunk
      await fetchTeams(mockParams)(mockDispatch);

      // Verificar que se llama a las acciones correctas
      expect(mockDispatch).toHaveBeenCalledWith(teamsLoading());
      expect(mockDispatch).toHaveBeenCalledWith(teamsFail('Error al conectarse con el servidor'));
    });
  });

  describe('fetchTeamById', () => {
    const teamId = '1';

    test('debería dispatchar teamLoadSuccess cuando la petición es exitosa', async () => {
      // Configurar mock para retornar datos de éxito
      (teamService.getTeamById as vi.Mock).mockResolvedValue({
        success: true,
        equipo: mockTeam
      });

      // Ejecutar el thunk
      await fetchTeamById(teamId)(mockDispatch);

      // Verificar que se llama a las acciones correctas
      expect(mockDispatch).toHaveBeenCalledWith(teamsLoading());
      expect(mockDispatch).toHaveBeenCalledWith(teamLoadSuccess(mockTeam));

      // Verificar llamada al servicio
      expect(teamService.getTeamById).toHaveBeenCalledWith(teamId);
    });

    test('debería dispatchar teamsFail cuando la petición falla', async () => {
      // Configurar mock para retornar datos de error
      (teamService.getTeamById as vi.Mock).mockResolvedValue({
        success: false,
        message: 'Error al obtener equipo'
      });

      // Ejecutar el thunk
      await fetchTeamById(teamId)(mockDispatch);

      // Verificar que se llama a las acciones correctas
      expect(mockDispatch).toHaveBeenCalledWith(teamsLoading());
      expect(mockDispatch).toHaveBeenCalledWith(teamsFail('Error al obtener equipo'));
    });
  });

  describe('createTeam', () => {
    test('debería dispatchar teamCreateSuccess cuando la petición es exitosa', async () => {
      // Configurar mock para retornar datos de éxito
      (teamService.createTeam as vi.Mock).mockResolvedValue({
        success: true,
        equipo: mockTeam
      });

      // Ejecutar el thunk
      await createTeam(mockTeamFormData)(mockDispatch);

      // Verificar que se llama a las acciones correctas
      expect(mockDispatch).toHaveBeenCalledWith(teamsLoading());
      expect(mockDispatch).toHaveBeenCalledWith(teamCreateSuccess(mockTeam));

      // Verificar llamada al servicio
      expect(teamService.createTeam).toHaveBeenCalledWith(mockTeamFormData);
    });

    test('debería dispatchar teamsFail cuando la petición falla', async () => {
      // Configurar mock para retornar datos de error
      (teamService.createTeam as vi.Mock).mockResolvedValue({
        success: false,
        message: 'Error al crear equipo'
      });

      // Ejecutar el thunk
      await createTeam(mockTeamFormData)(mockDispatch);

      // Verificar que se llama a las acciones correctas
      expect(mockDispatch).toHaveBeenCalledWith(teamsLoading());
      expect(mockDispatch).toHaveBeenCalledWith(teamsFail('Error al crear equipo'));
    });
  });

  describe('updateTeam', () => {
    const teamId = '1';

    test('debería dispatchar teamUpdateSuccess cuando la petición es exitosa', async () => {
      // Configurar mock para retornar datos de éxito
      (teamService.updateTeam as vi.Mock).mockResolvedValue({
        success: true,
        equipo: mockTeam
      });

      // Ejecutar el thunk
      await updateTeam({ id: teamId, teamData: mockTeamFormData })(mockDispatch);

      // Verificar que se llama a las acciones correctas
      expect(mockDispatch).toHaveBeenCalledWith(teamsLoading());
      expect(mockDispatch).toHaveBeenCalledWith(teamUpdateSuccess(mockTeam));

      // Verificar llamada al servicio
      expect(teamService.updateTeam).toHaveBeenCalledWith(teamId, mockTeamFormData);
    });

    test('debería dispatchar teamsFail cuando la petición falla', async () => {
      // Configurar mock para retornar datos de error
      (teamService.updateTeam as vi.Mock).mockResolvedValue({
        success: false,
        message: 'Error al actualizar equipo'
      });

      // Ejecutar el thunk
      await updateTeam({ id: teamId, teamData: mockTeamFormData })(mockDispatch);

      // Verificar que se llama a las acciones correctas
      expect(mockDispatch).toHaveBeenCalledWith(teamsLoading());
      expect(mockDispatch).toHaveBeenCalledWith(teamsFail('Error al actualizar equipo'));
    });
  });

  describe('deleteTeam', () => {
    const teamId = '1';

    test('debería dispatchar teamDeleteSuccess cuando la petición es exitosa', async () => {
      // Configurar mock para retornar datos de éxito
      (teamService.deleteTeam as vi.Mock).mockResolvedValue({
        success: true
      });

      // Ejecutar el thunk
      await deleteTeam(teamId)(mockDispatch);

      // Verificar que se llama a las acciones correctas
      expect(mockDispatch).toHaveBeenCalledWith(teamsLoading());
      expect(mockDispatch).toHaveBeenCalledWith(teamDeleteSuccess(teamId));

      // Verificar llamada al servicio
      expect(teamService.deleteTeam).toHaveBeenCalledWith(teamId);
    });

    test('debería dispatchar teamsFail cuando la petición falla', async () => {
      // Configurar mock para retornar datos de error
      (teamService.deleteTeam as vi.Mock).mockResolvedValue({
        success: false,
        message: 'Error al eliminar equipo'
      });

      // Ejecutar el thunk
      await deleteTeam(teamId)(mockDispatch);

      // Verificar que se llama a las acciones correctas
      expect(mockDispatch).toHaveBeenCalledWith(teamsLoading());
      expect(mockDispatch).toHaveBeenCalledWith(teamsFail('Error al eliminar equipo'));
    });
  });
}); 