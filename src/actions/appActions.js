import * as types from 'constants/appActionTypes';

export function loading(isLoading) {
  return {
    type: types.LOADING,
    payload: {
      loading: isLoading
    }
  };
}
