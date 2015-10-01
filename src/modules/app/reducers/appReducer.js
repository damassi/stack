import { reducer } from 'utils/redux';

const initialState = {
  loading: true,
  loggedIn: false,
  users: []
};

const actionsMap = {

  getUsers(state, action) {
    return {
      users: action.payload.users
    };
  },

  loading(state, action) {
    return {
      loading: action.payload.loading
    };
  },

  login(state) {
    return {
      loggedIn: !state.loggedIn
    };
  }
};

export default reducer(actionsMap, initialState);
