import * as teamsSelectors from './selectors';
import * as teamsThunks from './thunks';
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
} from './teamsSlice';

export {
  teamsSelectors,
  teamsThunks,
  teamsLoading, 
  teamsLoadSuccess, 
  teamLoadSuccess, 
  teamCreateSuccess, 
  teamUpdateSuccess, 
  teamDeleteSuccess, 
  teamsFail, 
  clearSelectedTeam, 
  clearErrors
};

export default teamsReducer; 