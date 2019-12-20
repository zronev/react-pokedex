import React, { useCallback, useEffect } from 'react'
import { getPokemons } from '../modules/getPokemons'
import { useAsyncState } from '../custom hooks/useAsyncState'

const Pokedex = () => {
  const loader = useCallback(getPokemons(), [])
  console.log(loader)
  const { payload, isLoading, loadError } = useAsyncState('pokemons', loader)

  useEffect(() => {
    console.log(payload, isLoading, loadError)
  }, [payload, isLoading, loadError])

  return (
    <div>
      {payload && payload.count ? payload.count : null}
      {loadError && <p>Load Error</p>}
      {isLoading && <p>Loading...</p>}
    </div>
  )
}

export default Pokedex
