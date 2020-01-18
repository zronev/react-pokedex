const initialState = {
  data: {},
  loading: false,
  error: '',
}

export const loadSpeciesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOADING_SPECIES':
      return {
        ...state,
        loading: true,
        loaded: false,
        error: null,
      }

    case 'SET_DATA_SPECIES':
      return {
        ...state,
        data: action.data,
        loading: false,
        loaded: true,
      }

    case 'LOADING_ERROR_SPECIES':
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
