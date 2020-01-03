import React, { useCallback } from 'react'
import { getPokemon } from '../modules/getPokemon'
import { useSelector } from 'react-redux'
import { useAsyncState } from '../custom hooks/useAsyncState'
import Spinner from './Spinner'
import Pokemon from './Pokemon'
import ArrowLeftPokemon from './ArrowLeftPokemon'
import ArrowRightPokemon from './ArrowRightPokemon'

const Pokedex = () => {
  const id = useSelector(state => state.id)

  const loader = useCallback(getPokemon(id), [id])
  const { payload, isLoading, loadError } = useAsyncState('pokemon', loader)

  return (
    <div>
      {payload && payload.pokemon ? (
        <>
          <div className="arrows">
            <ArrowLeftPokemon />
            <ArrowRightPokemon />
          </div>
          <Pokemon pokemon={payload.pokemon} />
        </>
      ) : null}
      {loadError && <p>Load Error</p>}
      {isLoading && <Spinner />}
    </div>
  )
}

export default Pokedex
