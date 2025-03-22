import playersReducer from './playersSlice';
import * as playersSelectors from './selectors';
import { 
  fetchPlayers, 
  fetchPlayerById, 
  createPlayer, 
  updatePlayer, 
  updatePlayerStats, 
  deletePlayer,
  assignPlayerToTeam,
  removePlayerFromTeam
} from './thunks';

const playersThunks = {
  fetchPlayers,
  fetchPlayerById,
  createPlayer,
  updatePlayer,
  updatePlayerStats,
  deletePlayer,
  assignPlayerToTeam,
  removePlayerFromTeam
};

export { playersSelectors, playersThunks };
export default playersReducer; 