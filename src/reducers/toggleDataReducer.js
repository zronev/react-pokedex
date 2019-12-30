import { TOGGLE } from '../actions'

export const toggleDataReducer = stateProperty => {
  const reducer = (state = false, action) => {
    switch (action.type) {
      case TOGGLE(stateProperty):
        return !state

      default:
        return state
    }
  }

  return reducer
}
