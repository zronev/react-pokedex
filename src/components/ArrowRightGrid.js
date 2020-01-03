import React, { useCallback, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { incOffset } from '../actions'
import ArrowRight from './ArrowRight'

const ArrowRightGrid = () => {
  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(incOffset())
  }

  const handleKeyDown = useCallback(
    e => {
      if (e.keyCode === 39) dispatch(incOffset())
    },
    [dispatch],
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

export default ArrowRightGrid
