export const LOADING = stateProperty => `${stateProperty}_LOADING`
export const SET_DATA = stateProperty => `${stateProperty}_SET_DATA`
export const LOADING_ERROR = stateProperty => `${stateProperty}_LOADING_ERROR`

// Action creators
export const dataLoadingAction = stateProperty => ({
  type: LOADING(stateProperty),
  payload: {},
})

export const dataSetDataAction = (stateProperty, payload) => ({
  type: SET_DATA(stateProperty),
  payload,
})

export const dataLoadingErrorAction = (stateProperty, error) => ({
  type: LOADING_ERROR(stateProperty),
  payload: error,
})

// Actions
export const nextPokemon = id => ({
  type: 'NEXT_POKEMON',
  payload: id,
})

export const prevPokemon = id => ({
  type: 'PREV_POKEMON',
  payload: id,
})

export const toggleChartType = () => ({
  type: 'TOGGLE_CHART_TYPE',
})
