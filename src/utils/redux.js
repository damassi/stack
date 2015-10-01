import { applyMiddleware, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { camelCase } from 'lodash-node';
import rootReducer from 'reducers/index';

export function configureStore(initialState) {
  const createStoreWithMiddleware = applyMiddleware(
    thunkMiddleware
  )(createStore);

  const store = createStoreWithMiddleware(rootReducer, initialState);

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
