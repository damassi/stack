import * as types from 'modules/users/constants/userActionTypes';

export function getUsers() {
  return {
    type: types.GET_USERS
  };
}
