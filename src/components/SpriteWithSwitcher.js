import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { dataToggleAction } from '../actions'
import Sprite from './Sprite'

const SpriteWithSwitcher = ({ sprites }) => {
  const dispatch = useDispatch()
  const side = useSelector(state => state.side)

  const [rotate, setRotate] = useState(false)

  const handleClick = () => {
    dispatch(dataToggleAction('side'))
    setRotate(true)
  }

  return (
    <div className="sprite pokemon__sprite">
      <Sprite side={side} sprites={sprites} />
      <i
        onClick={handleClick}
        onAnimationEnd={() => setRotate(false)}
        className={`sprite__switch-side ${
          rotate ? 'sprite__switch-side--active' : ''
        } fas fa-sync-alt`}
      />
    </div>
  )
}

export default SpriteWithSwitcher
