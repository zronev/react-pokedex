export const pokemonIDReducer = (state = 1, action) => {
  switch (action.type) {
    case 'NEXT_POKEMON':
      return state !== 802 ? state + 1 : 1
    case 'PREV_POKEMON':
      return state !== 1 ? state - 1 : 802
    case 'SET_ID':
      if (action.payload <= 802 && action.payload > 0) return action.payload
      else return state
    default:
      return state
  }
}
