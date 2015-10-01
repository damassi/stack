import { combineReducers } from 'redux';
import appReducer from 'modules/app/reducers/appReducer';

export default combineReducers({
  app: appReducer
});
