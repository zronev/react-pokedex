import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { dataToggleAction } from '../actions'

const FilterLiked = () => {
  const dispatch = useDispatch()
  const showLiked = useSelector(state => state.showLiked)

  const handleClick = () => dispatch(dataToggleAction('showLiked'))

  return (
    <button
      onClick={handleClick}
      className={`filter-liked ${
        showLiked ? 'filter-liked--active' : ''
      } grid__filter-liked`}
    >
      {showLiked ? 'Show All' : `Show Liked`}
    </button>
  )
}

export default FilterLiked
