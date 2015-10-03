import { Iterable } from 'immutable'

export default function immutableToObject(state) {
  const newState = {}

  for (var i of Object.keys(state)) {
    if (Iterable.isIterable(state[i])) {
      newState[i] = state[i].toJS()
    } else {
      newState[i] = state[i]
    }
  }

  return newState
}
