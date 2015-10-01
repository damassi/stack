import { reducer } from 'utils/redux';

const initialState = {
  users: [],
  user: {}
};

const actionsMap = {

  add(state, action) {
    return {
      users: action.payload.users
    };
  },

  get(state, action) {
    return {
      user: action.payload.user
    };
  },

  getAll(state, action) {
    return {
      users: action.payload.users
    };
  },

  remove(state, action) {
    return {
      users: action.payload.users
    };
  }

};

export default reducer(actionsMap, initialState);
