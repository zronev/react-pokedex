import React, { useState } from 'react'
import Sprite from './Sprite'

const SpriteWithSwitcher = ({ sprites, parent }) => {
  const [side, setSide] = useState(false)
  const [rotate, setRotate] = useState(false)

  const handleClick = () => {
    setSide(!side)
    setRotate(true)
  }

  return (
    <div className={`sprite ${parent}__sprite`}>
      <Sprite side={side} sprites={sprites} parent={parent} />
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
