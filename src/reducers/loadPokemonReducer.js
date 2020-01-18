const initialState = {
  data: {},
  loading: false,
  error: '',
}

export const loadPokemonReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOADING_POKEMON':
      return {
        ...state,
        loading: true,
        loaded: false,
        error: null,
      }

    case 'SET_DATA_POKEMON':
      return {
        ...state,
        data: action.data,
        loading: false,
        loaded: true,
      }

    case 'LOADING_ERROR_POKEMON':
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
