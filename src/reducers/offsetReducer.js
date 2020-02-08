export const offsetReducer = (state = 0, action) => {
  switch (action.type) {
    case 'INC_OFFSET':
      if (state >= 800) return 0
      return state + 20
    case 'DEC_OFFSET':
      if (state === 0) return 800
      return state - 20
    default:
      return state
  }
}
