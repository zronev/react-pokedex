const initialState = {
  data: {},
  loading: false,
  loaded: false,
  error: '',
}

export const loadEvolutionReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOADING_EVOLUTION':
      return {
        ...state,
        loading: true,
        loaded: false,
        error: null,
      }

    case 'SET_DATA_EVOLUTION':
      return {
        ...state,
        data: action.data,
        loading: false,
        loaded: true,
      }

    case 'LOADING_ERROR_EVOLUTION':
      return {
        ...state,
        loading: false,
        loaded: false,
        error: action.error,
      }

    default:
      return state
  }
}
