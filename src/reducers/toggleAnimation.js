export const toggleAnimationReducer = (state = false, action) => {
  switch(action.type) {
    case 'TOGGLE_ANIMATION':
      return !state
    default:
      return state
  }
}