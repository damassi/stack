import { combineReducers } from 'redux';
import usersReducer from 'modules/users/reducers/usersReducer';

export default combineReducers({
  users: usersReducer
});
