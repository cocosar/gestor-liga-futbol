import axios from 'axios';
import { TeamFormData, TeamResponse, TeamsResponse, PaginationParams } from '../types';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:4000/api';

/**
 * Servicio para gestionar equipos en el backend
 */
const teamService = {
  /**
   * Obtiene un listado paginado de equipos
   * @param params Parámetros de paginación
   * @returns Respuesta con listado de equipos
   */
  async getTeams(params: PaginationParams): Promise<TeamsResponse> {
    try {
      const { page, limit, sort, order, search } = params;
      const response = await axios.get(`${API_URL}/teams`, {
        params: { page, limit, sort, order, search },
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        return error.response.data as TeamsResponse;
      }
      return {
        success: false,
        message: 'Error de conexión con el servidor',
      };
    }
  },

  /**
   * Obtiene un equipo por su ID
   * @param teamId ID del equipo
   * @returns Respuesta con datos del equipo
   */
  async getTeamById(teamId: string): Promise<TeamResponse> {
    try {
      const response = await axios.get(`${API_URL}/teams/${teamId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        return error.response.data as TeamResponse;
      }
      return {
        success: false,
        message: 'Error de conexión con el servidor',
      };
    }
  },

  /**
   * Crea un nuevo equipo
   * @param teamData Datos del equipo a crear
   * @returns Respuesta con el equipo creado
   */
  async createTeam(teamData: TeamFormData): Promise<TeamResponse> {
    try {
      const response = await axios.post(`${API_URL}/teams`, teamData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        return error.response.data as TeamResponse;
      }
      return {
        success: false,
        message: 'Error de conexión con el servidor',
      };
    }
  },

  /**
   * Actualiza un equipo existente
   * @param teamId ID del equipo a actualizar
   * @param teamData Datos actualizados del equipo
   * @returns Respuesta con el equipo actualizado
   */
  async updateTeam(teamId: string, teamData: TeamFormData): Promise<TeamResponse> {
    try {
      const response = await axios.put(`${API_URL}/teams/${teamId}`, teamData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        return error.response.data as TeamResponse;
      }
      return {
        success: false,
        message: 'Error de conexión con el servidor',
      };
    }
  },

  /**
   * Elimina un equipo
   * @param teamId ID del equipo a eliminar
   * @returns Respuesta con resultado de la operación
   */
  async deleteTeam(teamId: string): Promise<TeamResponse> {
    try {
      const response = await axios.delete(`${API_URL}/teams/${teamId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        return error.response.data as TeamResponse;
      }
      return {
        success: false,
        message: 'Error de conexión con el servidor',
      };
    }
  },
};

export default teamService; 