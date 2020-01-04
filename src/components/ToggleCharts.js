import React from 'react'
import { useDispatch } from 'react-redux'
import { dataToggleAction } from '../actions'

const ToggleCharts = () => {
  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(dataToggleAction('chartType'))
  }

  return (
    <div className="toggle-type pokemon__toggle-type">
      <button className="toggle" onClick={handleClick}>
        Toggle Type of Chart
      </button>
      {/* <button className="toggle toggle--right" onClick={handleClick}>
        Radar
      </button> */}
    </div>
  )
}

export default ToggleCharts
