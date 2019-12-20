import { LOADING, SET_DATA, LOADING_ERROR } from '../actions'

const initialState = {
  isLoading: false,
  loadError: false,
  loadErrorDetails: null,
  payload: null,
}

// Reducer creator
export const getAsyncDataReducer = stateProperty => {
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case LOADING(stateProperty):
        return {
          ...state,
          isLoading: true,
          loadErrorDetails: null,
        }

      case SET_DATA(stateProperty):
        return {
          ...state,
          isLoading: false,
          loadErrorDetails: null,
          payload: action.payload,
        }

      case LOADING_ERROR(stateProperty):
        return {
          ...state,
          isLoading: false,
          loadError: true,
          loadErrorDetails: action.payload,
        }

      default:
        return state
    }
  }

  return reducer
}
