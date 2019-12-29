export const switchSideReducer = (state = false, action) => {
  switch (action.type) {
    case 'SWITCH_SIDE':
      return !state
    default:
      return state
  }
}
