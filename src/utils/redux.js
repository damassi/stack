import { combineReducers, compose, createStore } from 'redux';
import { camelCase } from 'lodash-node';

import appReducer from 'modules/app/reducers';
import loginReducer from 'modules/login/reducers';
import usersReducer from 'modules/users/reducers';


export function configureStore(initialState) {
  const reducers = combineReducers(
    appReducer,
    // loginReducer(),
    // usersReducer()
  );

  const store = createStore(reducers, initialState);

  // if (module.hot) {
  //   module.hot.accept('reducers', () => {
  //     const nextRootReducer = require('reducers/index');
  //     store.replaceReducer(nextRootReducer);
  //   });
  // }

  return store;
}

export function reducer(actionsMap, initialState) {
  return (state = initialState, action) => {
    const reduceFn = actionsMap[camelCase(action.type)];

    if (!reduceFn) {
      return state;
    }

    return {
      ...state,
      ...reduceFn(state, action)
    };
  };
}
