import Immutable, { Map } from 'immutable'
import { reducer } from 'utils/redux'

const initialState = Immutable.fromJS({
  loading: true
})

const actionsMap = {

  loading(state, action) {
    return Map({
      loading: action.payload.get('loading')
    })
  }

}

export default reducer(actionsMap, initialState)
