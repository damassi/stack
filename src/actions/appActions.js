import * as types from 'constants/appActionTypes';

export function login() {
  return {
    type: types.LOGIN
  };
}

export function getUsers() {
  return {
    type: types.GET_USERS
  };
}
