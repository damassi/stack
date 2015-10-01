import { reducer } from 'utils/redux';

const initialState = {
  loading: true
};

const actionsMap = {

  loading(state, action) {
    return {
      loading: action.payload.loading
    };
  }

};

export default reducer(actionsMap, initialState);
