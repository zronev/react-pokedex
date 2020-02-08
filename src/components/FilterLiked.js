import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { dataToggleAction } from '../actions'
import classNames from 'classnames'

const FilterLiked = () => {
  const dispatch = useDispatch()
  const showLiked = useSelector(state => state.showLiked)

  const handleClick = () => dispatch(dataToggleAction('showLiked'))

  const btnClass = classNames({
    'filter-liked': true,
    'filter-liked--active': showLiked,
    'grid__filter-liked': true,
  })

  return (
    <button onClick={handleClick} className={btnClass}>
      {showLiked ? 'Show All' : `Show Liked`}
    </button>
  )
}

export default FilterLiked
