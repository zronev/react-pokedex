import React from 'react'

const Sprite = ({ side, sprites, parent }) => {
  const hasAnyImage = sprites.front_default || sprites.back_default

  return hasAnyImage ? (
    <img
      src={side ? sprites.back_default : sprites.front_default}
      alt="pokemon"
      className={`sprite__image ${parent}__sprite`}
    />
  ) : (
    <span className={`sprite__no-image ${parent}__sprite`}>
      No image <span className="sprite__emoji" role="img" aria-label="sad emoji">😥</span>
    </span>
  )
}

export default Sprite
