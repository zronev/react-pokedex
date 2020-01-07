import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { dataToggleAction } from '../actions'

const Pokeball = () => {
  const dispatch = useDispatch()
  const isAnimated = useSelector(state => state.animation)

  const handleOnClick = () => {
    dispatch(dataToggleAction('animation'))
  }

  useEffect(() => {
    if (isAnimated)
      setTimeout(() => {
        dispatch(dataToggleAction('animation'))
      }, 1800)
  }, [isAnimated, dispatch])

  return (
    <div
      onClick={handleOnClick}
      className={`pokeball ${isAnimated ? 'pokeball--animated' : ''} header__pokeball`}
    >
      <div
        className={`pokeball__button ${isAnimated ? 'pokeball__button--animated' : ''}`}
      ></div>
    </div>
  )
}

export default Pokeball
