import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { dataToggleAction } from '../actions'
import Sprite from './Sprite'

const SpriteWithSwitcher = ({ sprites }) => {
  const dispatch = useDispatch()
  const side = useSelector(state => state.side)

  const handleClick = () => {
    dispatch(dataToggleAction('side'))
  }

  return (
    <div className="sprite pokemon__sprite">
      <Sprite side={side} sprites={sprites} />
      <button onClick={handleClick} className="button button--switch sprite__switch-side">
        <i className="fas fa-sync-alt"></i>
      </button>
    </div>
  )
}

export default SpriteWithSwitcher
