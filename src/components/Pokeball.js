import React, { useState } from 'react'

const Pokeball = () => {
  const [isAnimated, setIsAnimated] = useState(false)
  const handleOnClick = () => setIsAnimated(true)

  return (
    <div
      onClick={handleOnClick}
      onAnimationEnd={() => setIsAnimated(false)}
      className={`pokeball ${isAnimated ? 'pokeball--animated' : ''} header__pokeball`}
    >
      <div
        className={`pokeball__button ${isAnimated ? 'pokeball__button--animated' : ''}`}
      />
    </div>
  )
}

export default Pokeball
