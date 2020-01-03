import React, { useCallback } from 'react'
import { getPokemons } from '../modules/getPokemons'
import { useAsyncState } from '../custom hooks/useAsyncState'
import Spinner from './Spinner'
import Card from './Card'
import ArrowLeftGrid from './ArrowLeftGrid'
import ArrowRightGrid from './ArrowRightGrid'
import { useSelector } from 'react-redux'
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
          {showLiked ? loadLiked : loadAll}
          {loadError && <p>Load Error</p>}
          {isLoading && <Spinner />}
        </main>
      </div>
    </>
  )
}

export default Grid
