import React, { useCallback } from 'react'
import { getPokemons } from '../modules/getPokemons'
import { useAsyncState } from '../custom hooks/useAsyncState'
import Spinner from './Spinner'
import Card from './Card'
import ArrowLeftGrid from './ArrowLeftGrid'
import ArrowRightGrid from './ArrowRightGrid'
import { useSelector } from 'react-redux'

const Grid = () => {
  const offset = useSelector(state => state.offset)

  const loader = useCallback(getPokemons(offset), [offset])
  const { payload, isLoading, loadError } = useAsyncState('pokemons', loader)

  return (
    <>
      <div className="arrows">
        <ArrowLeftGrid />
        <ArrowRightGrid />
      </div>
      <main className="cards-grid">
        {payload && payload.pokemons
          ? payload.pokemons.results.map((pokemon, index) => (
              <Card key={index} url={pokemon.url} />
            ))
          : null}
        {loadError && <p>Load Error</p>}
        {isLoading && <Spinner />}
      </main>
    </>
  )
}

export default Grid
