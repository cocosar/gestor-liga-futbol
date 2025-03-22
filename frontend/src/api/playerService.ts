import axios from 'axios';
import { 
  Player, 
  PlayersResponse, 
  CreatePlayerData, 
  UpdatePlayerData, 
  PlayerFilters,
  UpdatePlayerStatsData
} from '../types';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

/**
 * Servicio para gestionar jugadores en el backend
 */
const playerService = {
  /**
   * Obtiene un listado paginado de jugadores con filtros
   * @param filters Filtros de búsqueda y paginación
   * @returns Respuesta con listado de jugadores
   */
  async getPlayers(filters: PlayerFilters = {}): Promise<PlayersResponse> {
    try {
      const response = await axios.get(`${API_URL}/jugadores`, {
        params: filters,
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Error(
          error.response?.data?.message || 'Error al obtener jugadores'
        );
      }
      throw new Error('Error al obtener jugadores');
    }
  },

  /**
   * Obtiene un jugador por su ID
   * @param playerId ID del jugador
   * @returns Datos del jugador
   */
  async getPlayerById(playerId: string): Promise<Player> {
    try {
      const response = await axios.get(`${API_URL}/jugadores/${playerId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Error(
          error.response?.data?.message || 'Error al obtener el jugador'
        );
      }
      throw new Error('Error al obtener el jugador');
    }
  },

  /**
   * Crea un nuevo jugador
   * @param playerData Datos del jugador
   * @returns Datos del jugador creado
   */
  async createPlayer(playerData: CreatePlayerData): Promise<Player> {
    try {
      const response = await axios.post(`${API_URL}/jugadores`, playerData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
          'Content-Type': 'application/json',
        },
      });
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Error(
          error.response?.data?.message || 'Error al crear el jugador'
        );
      }
      throw new Error('Error al crear el jugador');
    }
  },

  /**
   * Actualiza un jugador existente
   * @param playerId ID del jugador
   * @param playerData Datos a actualizar
   * @returns Datos del jugador actualizado
   */
  async updatePlayer(
    playerId: string,
    playerData: UpdatePlayerData
  ): Promise<Player> {
    try {
      const response = await axios.put(
        `${API_URL}/jugadores/${playerId}`,
        playerData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
            'Content-Type': 'application/json',
          },
        }
      );
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Error(
          error.response?.data?.message || 'Error al actualizar el jugador'
        );
      }
      throw new Error('Error al actualizar el jugador');
    }
  },

  /**
   * Actualiza las estadísticas de un jugador
   * @param playerId ID del jugador
   * @param statsData Datos de estadísticas a actualizar
   * @returns Datos del jugador con estadísticas actualizadas
   */
  async updatePlayerStats(
    playerId: string,
    statsData: UpdatePlayerStatsData
  ): Promise<Player> {
    try {
      const response = await axios.patch(
        `${API_URL}/jugadores/${playerId}/estadisticas`,
        statsData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
            'Content-Type': 'application/json',
          },
        }
      );
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Error(
          error.response?.data?.message || 
          'Error al actualizar las estadísticas del jugador'
        );
      }
      throw new Error('Error al actualizar las estadísticas del jugador');
    }
  },

  /**
   * Elimina un jugador (baja lógica)
   * @param playerId ID del jugador
   * @returns Mensaje de confirmación
   */
  async deletePlayer(playerId: string): Promise<{ message: string }> {
    try {
      const response = await axios.delete(`${API_URL}/jugadores/${playerId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Error(
          error.response?.data?.message || 'Error al eliminar el jugador'
        );
      }
      throw new Error('Error al eliminar el jugador');
    }
  },
};

export default playerService; 