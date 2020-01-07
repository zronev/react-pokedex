import React, { useCallback, useEffect } from 'react'
import { getPokemons } from '../modules/getPokemons'
import { useAsyncState } from '../custom hooks/useAsyncState'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { incOffset } from '../actions'
import { decOffset } from '../actions'

import Spinner from './Spinner'
import Card from './Card'
import ArrowLeftGrid from './ArrowLeftGrid'
import ArrowRightGrid from './ArrowRightGrid'
import FilterLiked from './FilterLiked'


const Grid = () => {
  const offset = useSelector(state => state.offset)
  const loader = useCallback(getPokemons(offset), [offset])
  const { payload, isLoading, loadError } = useAsyncState('pokemons', loader)

  const liked = useSelector(state => state.liked.sort((a, b) => a - b))
  const showLiked = useSelector(state => state.showLiked)

  const isLoaded = payload && payload.pokemons

  const loadAll = isLoaded
    ? payload.pokemons.results.map((pokemon, index) => (
        <Card key={index} url={pokemon.url} />
      ))
    : null

  const loadLiked = isLoaded
    ? liked.map((url, index) => (
        <Card key={index} url={`https://pokeapi.co/api/v2/pokemon/${url}`} />
      ))
    : null

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
        if (xDiff > 0) dispatch(incOffset())
        else dispatch(decOffset())
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
    <>
      {!showLiked ? (
        <div className="arrows">
          <ArrowLeftGrid />
          <ArrowRightGrid />
        </div>
      ) : null}

      <div className="grid">
        {liked.length === 0 && !showLiked ? null : <FilterLiked />}

        <main className="cards-grid grid__cards-grid">
          {showLiked && !isLoading ? loadLiked : loadAll}
          {loadError && <p>Load Error</p>}
          {isLoading && <Spinner />}
        </main>
      </div>
    </>
  )
}

export default Grid
