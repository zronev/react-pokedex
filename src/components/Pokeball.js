import React, { useState } from 'react'
import classNames from 'classnames'

const Pokeball = () => {
  const [isAnimated, setIsAnimated] = useState(false)
  const handleOnClick = () => setIsAnimated(true)

  const pokeballClass = classNames({
    pokeball: true,
    'pokeball--animated': isAnimated,
    header__pokeball: true,
  })

  const pokeballButtonClass = classNames({
    pokeball__button: true,
    'pokeball__button--animated': isAnimated,
  })

  return (
    <div
      onClick={handleOnClick}
      onAnimationEnd={() => setIsAnimated(false)}
      className={pokeballClass}
    >
      <div className={pokeballButtonClass} />
    </div>
  )
}

export default Pokeball
