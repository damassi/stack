import Immutable, { Map } from 'immutable'
import { reducer } from 'utils/redux'

const initialState = Immutable.fromJS({
  users: [],
  user: {}
})

const actionsMap = {

  add(state, action) {
    return Map({
      users: action.payload.users,
      foo: 'bar'
    })
  },

  get(state, action) {
    return Map({
      user: action.payload.user
    })
  },

  getAll(state, action) {
    return Map({
      users: action.payload.users
    })
  },

  remove(state, action) {
    return Map({
      users: action.payload.users
    })
  }

}

export default reducer(actionsMap, initialState)
