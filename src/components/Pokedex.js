import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { nextPokemon, prevPokemon, loadPokemon } from '../actions'

import Spinner from './Spinner'
import Pokemon from './Pokemon'
import ArrowLeftPokemon from './ArrowLeftPokemon'
import ArrowRightPokemon from './ArrowRightPokemon'

const Pokedex = () => {
  const id = useSelector(state => state.id)
  const pokemon = useSelector(state => state.pokemon)
  const dispatch = useDispatch()

  useEffect(() => {
    const controller = new AbortController()
    dispatch(loadPokemon(id, controller))

    return () => controller.abort()
  }, [dispatch, id])

  useEffect(() => {
    // https://stackoverflow.com/questions/2264072/detect-a-finger-swipe-through-javascript-on-the-iphone-and-android
    let xDown = null
    let yDown = null

    const getTouches = e => e.touches

    const handleTouchStart = e => {
      const firstTouch = getTouches(e)[0]
      xDown = firstTouch.clientX
      yDown = firstTouch.clientY
    }

    const handleTouchMove = e => {
      if (!xDown || !yDown) return

      let xUp = e.touches[0].clientX
      let yUp = e.touches[0].clientY

      let xDiff = xDown - xUp
      let yDiff = yDown - yUp

      if (Math.abs(xDiff) > Math.abs(yDiff)) {
        if (xDiff > 0) dispatch(nextPokemon())
        else dispatch(prevPokemon())
      }

      xDown = null
      yDown = null
    }

    document.addEventListener('touchstart', handleTouchStart, false)
    document.addEventListener('touchmove', handleTouchMove, false)
    return () => {
      document.removeEventListener('touchstart', handleTouchStart, false)
      document.removeEventListener('touchmove', handleTouchMove, false)
    }
  }, [dispatch])

  return (
    <main>
      {pokemon.loaded && (
        <>
          <div className="arrows">
            <ArrowLeftPokemon />
            <ArrowRightPokemon />
          </div>
          <Pokemon pokemon={pokemon.data} />
        </>
      )}

      {pokemon.error && !pokemon.loaded && <p>Load Error</p>}
      {pokemon.loading && <Spinner />}
    </main>
  )
}

export default Pokedex
