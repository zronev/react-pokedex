export const limitReducer = (state = 20, action) => {
  switch (action.type) {
    case 'INC_LIMIT':
      return state + 20
    default:
      return state
  }
}
