import React, { useCallback, useEffect } from 'react'
import { getPokemon } from '../modules/getPokemon'
import { useSelector, useDispatch } from 'react-redux'
import { useAsyncState } from '../custom hooks/useAsyncState'
import Spinner from './Spinner'
import Pokemon from './Pokemon'
import ArrowLeftPokemon from './ArrowLeftPokemon'
import ArrowRightPokemon from './ArrowRightPokemon'
import { nextPokemon, prevPokemon } from '../actions'

const Pokedex = () => {
  const id = useSelector(state => state.id)

  const loader = useCallback(getPokemon(id), [id])
  const { payload, isLoading, loadError } = useAsyncState('pokemon', loader)

  const dispatch = useDispatch()

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
        /*most significant*/
        if (xDiff > 0) dispatch(nextPokemon())
        else dispatch(prevPokemon())
      }
      /* reset values */
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
      {payload && payload.pokemon && !isLoading ? (
        <>
          <div className="arrows">
            <ArrowLeftPokemon />
            <ArrowRightPokemon />
          </div>
          <Pokemon pokemon={payload.pokemon} />
        </>
      ) : null}
      {loadError && !payload.pokemon && <p>Load Error</p>}
      {isLoading && <Spinner />}
    </main>
  )
}

export default Pokedex
