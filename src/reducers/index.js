import { combineReducers } from 'redux';
import appReducer from 'reducers/appReducer';

export default combineReducers({
  app: appReducer
});
