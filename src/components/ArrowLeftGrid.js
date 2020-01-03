import React, { useCallback, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { decOffset } from '../actions'
import ArrowLeft from './ArrowLeft'

const ArrowLeftGrid = () => {
  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(decOffset())
  }

  const handleKeyDown = useCallback(
    e => {
      if (e.keyCode === 37) dispatch(decOffset())
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
      <ArrowLeft />
    </button>
  )
}

export default ArrowLeftGrid
