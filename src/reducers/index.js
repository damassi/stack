import { combineReducers } from 'redux'
import appReducer from 'reducers/appReducer'
import sessionReducer from 'reducers/sessionReducer'
import usersReducer from 'reducers/usersReducer'

export default combineReducers({
  app: appReducer,
  session: sessionReducer,
  users: usersReducer
})
