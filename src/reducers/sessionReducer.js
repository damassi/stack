import Immutable, { Map } from 'immutable';
import { reducer } from 'utils/redux';

const initialState = Immutable.fromJS({
  loggedIn: false,
});

const actionsMap = {

  login(state) {
    return Map({
      loggedIn: !state.get('loggedIn')
    });
  },

  logout() {
    return Map({
      loggedIn: false
    });
  }

};

export default reducer(actionsMap, initialState);
