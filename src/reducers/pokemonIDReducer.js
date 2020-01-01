export const pokemonIDReducer = (state = 1, action) => {
  switch (action.type) {
    case 'NEXT_POKEMON':
      return state !== 802 ? state + 1 : 1
    case 'PREV_POKEMON':
      return state !== 1 ? state - 1 : 802
    case 'SET_ID':
      return action.payload
    default:
      return state
  }
}
