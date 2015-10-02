import http from 'axios';
import * as types from 'constants/usersActionTypes';

export function add() {
  return {
    type: types.ADD
  };
}

export function get() {
  return {
    type: types.GET
  };
}

export function getAll() {
  return (dispatch) => {
    http.get('/api/users').then(response => {
      dispatch({
        type: types.GET_ALL,
        payload: {
          users: response.data
        }
      });
    });
  };
}

export function remove() {
  return {
    type: types.REMOVE,
  };
}
