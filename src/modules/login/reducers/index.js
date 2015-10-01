import { combineReducers } from 'redux';
import loginReducer from 'modules/login/reducers/loginReducer';

export default combineReducers({
  login: loginReducer
});
