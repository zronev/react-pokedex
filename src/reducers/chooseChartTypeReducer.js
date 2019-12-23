export const chooseChartTypeReducer = (state = false, action) => {
  switch (action.type) {
    case 'TOGGLE_CHART_TYPE':
      return !state
    default:
      return state
  }
}
