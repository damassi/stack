import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import { camelCase } from 'lodash-node'
import immutableToObject from 'utils/immutableToObject'
import rootReducer from 'reducers/index'

export function configureStore(initialState) {
  const logger = createLogger({
    transformer: immutableToObject
  })

  const createStoreWithMiddleware = applyMiddleware(
    thunk,
    logger
  )(createStore)

  const store = createStoreWithMiddleware(rootReducer, initialState)

  if (module.hot) {
    module.hot.accept('reducers', () => {
      const nextRootReducer = require('reducers/index')
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}

export function reducer(actionsMap, initialState) {
  return (state = initialState, action) => {
    const reduceFn = actionsMap[camelCase(action.type)]

    if (!reduceFn) {
      return state
    }

    return state.mergeDeep(reduceFn(state, action))
  }
}
