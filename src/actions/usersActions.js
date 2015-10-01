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
  return {
    type: types.GET_ALL
  };
}

export function remove() {
  return {
    type: types.REMOVE,
  };
}
