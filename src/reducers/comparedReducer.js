export const comparedReducer = (state = [], { type, payload }) => {
  switch (type) {
    case 'ADD_TO_COMPARED':
      return state.length < 6 ? [...state, payload] : state
    case 'DELETE_FROM_COMPARED':
      return [...state].filter(pokemonId => pokemonId !== payload)
    default:
      return state
  }
}