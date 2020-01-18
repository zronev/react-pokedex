const initialState = {
  data: {},
  loading: false,
  loaded: false,
  error: '',
}

export const loadPokemonsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOADING_POKEMONS':
      return {
        ...state,
        loading: true,
        loaded: false,
        error: null,
      }

    case 'SET_DATA_POKEMONS':
      return {
        ...state,
        data: action.data,
        loading: false,
        loaded: true,
      }

    case 'LOADING_ERROR_POKEMONS':
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
