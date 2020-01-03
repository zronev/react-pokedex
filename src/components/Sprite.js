import React from 'react'

const Sprite = ({ side, sprites, parent }) => {
  const hasAnyImage = sprites.front_default || sprites.back_default

  return hasAnyImage ? (
    <img
      src={side ? sprites.back_default : sprites.front_default}
      alt="pokemon"
      className={`sprite--image ${parent}__sprite`}
    />
  ) : (
    <span className={`sprite--no-image ${parent}__sprite`}>Hello</span>
  )
}

export default Sprite
