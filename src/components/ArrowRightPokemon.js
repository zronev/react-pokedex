import React, { useCallback, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { nextPokemon } from '../actions'
import ArrowRight from './ArrowRight'

const ArrowRightPokemon = () => {
  const dispatch = useDispatch()
  const id = useSelector(state => state.id)

  const handleClick = () => dispatch(nextPokemon(id))

  const handleKeyDown = useCallback(
    e => {
      if (e.keyCode === 39) dispatch(nextPokemon(id))
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
    <button onClick={handleClick} onKeyDown={handleKeyDown}>
      <ArrowRight />
    </button>
  )
}

export default ArrowRightPokemon
