import Immutable, { Map } from 'immutable'
import { reducer } from 'utils/redux'

const initialState = Immutable.fromJS({
  loggedIn: false,
})

const actionsMap = {

  login() {
    return Map({
      loggedIn: true
    })
  },

  logout() {
    return Map({
      loggedIn: false
    })
  }

}

export default reducer(actionsMap, initialState)
