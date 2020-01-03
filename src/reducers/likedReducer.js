export const likedReducer = (state = [], { type, payload }) => {
  switch (type) {
    case 'ADD_TO_LIKED':
      return [...state, payload]

    case 'DELETE_FROM_LIKED':
      return [...state].filter(pokemonId => pokemonId !== payload)

    default:
      return state
  }
}
