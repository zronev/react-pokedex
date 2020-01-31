import React from 'react'
import { useSelector } from 'react-redux'

const Sprite = ({ side, sprites, parent }) => {
  const theme = useSelector(state => state.theme)
  const hasAnyImage = sprites.front_default || sprites.back_default

  return hasAnyImage ? (
    <img
      src={side ? sprites.back_default : sprites.front_default}
      alt="pokemon"
      className={`sprite__image ${theme ? 'sprite__image--night' : ''} ${parent}__sprite`}
    />
  ) : (
    <span className={`sprite__no-image ${theme ? 'sprite__image--night' : ''} ${parent}__sprite`}>
      No image <span className="sprite__emoji" role="img" aria-label="sad emoji">😥</span>
    </span>
  )
}

export default Sprite
