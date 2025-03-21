import axios from 'axios';
import { TeamFormData, TeamResponse, TeamsResponse, TeamPaginationParams } from '../types';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

/**
 * Servicio para gestionar equipos en el backend
 */
const teamService = {
  /**
   * Obtiene un listado paginado de equipos
   * @param params Parámetros de paginación
   * @returns Respuesta con listado de equipos
   */
  async getTeams(params: TeamPaginationParams): Promise<TeamsResponse> {
    try {
      const { page, limit, sort, order, search, categoria, tipo } = params;
      const response = await axios.get(`${API_URL}/equipos`, {
        params: { page, limit, sort, order, search, categoria, tipo },
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
      const response = await axios.get(`${API_URL}/equipos/${teamId}`, {
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
      const response = await axios.post(`${API_URL}/equipos`, teamData, {
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
      // Crear un nuevo objeto con la estructura correcta para el backend
      const backendData: Record<string, unknown> = {
        nombre: teamData.nombre,
        categoria: teamData.categoria,
        tipo: teamData.tipo,
        activo: teamData.activo === undefined ? true : teamData.activo
      };

      // Solo añadir entrenador si existe
      if (teamData.entrenador && teamData.entrenador.trim() !== '') {
        backendData.entrenador = teamData.entrenador;
      }

      // Solo añadir logo si es una URL válida
      if (teamData.logoUrl && teamData.logoUrl.trim() !== '') {
        try {
          new URL(teamData.logoUrl);
          backendData.logo = teamData.logoUrl;
        } catch {
          // No añadir el campo logo si no es una URL válida
          console.warn('La URL del logo no es válida, se omitirá este campo');
        }
      }

      console.log('Datos enviados al backend:', backendData);

      const response = await axios.put(`${API_URL}/equipos/${teamId}`, backendData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        console.error('Error de respuesta del servidor:', error.response.data);
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
      const response = await axios.delete(`${API_URL}/equipos/${teamId}`, {
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