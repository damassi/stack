import { createStore } from 'redux';
import { camelCase } from 'lodash-node';
import rootReducer from 'reducers/index';

export function configureStore(initialState) {
  const store = createStore(rootReducer, initialState);

  if (module.hot) {
    module.hot.accept('reducers', () => {
      const nextRootReducer = require('reducers/index');
      store.replaceReducer(nextRootReducer);
    });
  }

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
