import * as usersSelectors from './selectors';
import * as usersThunks from './thunks';
import usersReducer, { 
  usersLoading, 
  usersLoadSuccess, 
  userLoadSuccess, 
  userCreateSuccess, 
  userUpdateSuccess, 
  userDeleteSuccess, 
  usersFail, 
  clearSelectedUser, 
  clearErrors 
} from './usersSlice';

export {
  usersSelectors,
  usersThunks,
  usersLoading, 
  usersLoadSuccess, 
  userLoadSuccess, 
  userCreateSuccess, 
  userUpdateSuccess, 
  userDeleteSuccess, 
  usersFail, 
  clearSelectedUser, 
  clearErrors
};

export default usersReducer; 