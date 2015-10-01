import { reducer } from 'utils/redux';

const initialState = {
  loggedIn: false,
};

const actionsMap = {

  login(state) {
    return {
      loggedIn: !state.loggedIn
    };
  },

  logout() {
    return {
      loggedIn: false
    };
  }

};

export default reducer(actionsMap, initialState);
