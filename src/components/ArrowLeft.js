import React, { useCallback, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { prevPokemon } from '../actions'

const ArrowLeft = () => {
  const dispatch = useDispatch()
  const id = useSelector(state => state.id)

  const handleClick = () => {
    dispatch(prevPokemon(id))
  }

  const handleKeyDown = useCallback(
    e => {
      if (e.keyCode === 37) dispatch(prevPokemon(id))
    },
    [dispatch, id],
  )

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [handleKeyDown])

  return (
    <button onClick={handleClick} onKeyDown={handleKeyDown} className="arrow arrow_left">
      <i className="fas fa-caret-left"></i>
    </button>
  )
}

export default ArrowLeft
