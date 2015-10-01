import { reducer } from 'utils/redux';

const initialState = {
  users: []
};

const actionsMap = {

  getUsers(state, action) {
    return {
      users: action.payload.users
    };
  },

};

export default reducer(actionsMap, initialState);
