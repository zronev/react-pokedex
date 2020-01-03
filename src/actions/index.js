export const LOADING = stateProperty => `${stateProperty}_LOADING`
export const SET_DATA = stateProperty => `${stateProperty}_SET_DATA`
export const LOADING_ERROR = stateProperty => `${stateProperty}_LOADING_ERROR`
export const TOGGLE = stateProperty => `TOGGLE_${stateProperty}`

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

export const dataToggleAction = stateProperty => ({
  type: TOGGLE(stateProperty),
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

export const setId = id => ({
  type: 'SET_ID',
  payload: id,
})

export const setName = name => ({
  type: 'SET_NAME',
  payload: name,
})

export const incOffset = () => ({
  type: 'INC_OFFSET',
})

export const decOffset = () => ({
  type: 'DEC_OFFSET',
})
