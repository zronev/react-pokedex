import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { dataToggleAction } from '../actions'

const Sprite = ({ sprites }) => {
  const dispatch = useDispatch()
  const side = useSelector(state => state.side)

  const handleClick = () => {
    dispatch(dataToggleAction('side'))
  }

  return (
    <div className="sprite pokemon__sprite">
      <img
        src={side ? sprites.back_default : sprites.front_default}
        alt="pokemon"
        className="sprite__image"
      />
      <button onClick={handleClick} className="button button--switch sprite__switch-side">
        <i className="fas fa-sync-alt"></i>
      </button>
    </div>
  )
}

export default Sprite
