export const LOADING = stateProperty => `LOADING`
export const SET_DATA = stateProperty => `SET_DATA`
export const LOADING_ERROR = stateProperty => `LOADING_ERROR`

export const TOGGLE = stateProperty => `TOGGLE_${stateProperty}`

// Action creators
export const dataToggleAction = stateProperty => ({
  type: TOGGLE(stateProperty),
})

// Actions
export const loadPokemon = (id, controller) => async dispatch => {
  dispatch({ type: 'LOADING_POKEMON' })

  try {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}/`
    const res = await fetch(url, { signal: controller.signal })
    const data = await res.json()

    dispatch({
      type: 'SET_DATA_POKEMON',
      data,
    })
  } catch (error) {
    dispatch({
      type: 'LOADING_ERROR_POKEMON',
      error: error.message || 'Unexpected Error!!!',
    })
  }
}

export const loadPokemons = (
  limit = 20,
  offset = 0,
  controller,
  setIsFetching,
) => async dispatch => {
  dispatch({ type: 'LOADING_POKEMONS' })

  try {
    const url = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`

    const res = await fetch(url, { signal: controller.signal })
    const data = await res.json()

    dispatch({
      type: 'SET_DATA_POKEMONS',
      data,
    })
  } catch (error) {
    dispatch({
      type: 'LOADING_ERROR_POKEMONS',
      error: error.message || 'Unexpected Error!!!',
    })
  } finally {
    setIsFetching && setIsFetching(false)
  }
}

export const loadSpecies = (url, controller) => async dispatch => {
  dispatch({ type: 'LOADING_SPECIES' })

  try {
    const res = await fetch(url, { signal: controller.signal })
    const data = await res.json()

    dispatch({
      type: 'SET_DATA_SPECIES',
      data,
    })
  } catch (error) {
    dispatch({
      type: 'LOADING_ERROR_SPECIES',
      error: error.message || 'Unexpected Error!!!',
    })
  }
}

export const loadEvolutionChain = (url, controller) => async dispatch => {
  dispatch({ type: 'LOADING_EVOLUTION' })

  try {
    const res = await fetch(url, { signal: controller.signal })
    const data = await res.json()

    dispatch({
      type: 'SET_DATA_EVOLUTION',
      data,
    })
  } catch (error) {
    dispatch({
      type: 'LOADING_ERROR_EVOLUTION',
      error: error.message || 'Unexpected Error!!!',
    })
  }
}

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

export const incLimit = () => ({
  type: 'INC_LIMIT',
})

export const addToLiked = id => ({
  type: 'ADD_TO_LIKED',
  payload: id,
})

export const deleteFromLiked = id => ({
  type: 'DELETE_FROM_LIKED',
  payload: id,
})
