import * as types from 'modules/app/constants/appActionTypes';

export function loading(isLoading) {
  return {
    type: types.LOADING,
    payload: {
      loading: isLoading
    }
  };
}
