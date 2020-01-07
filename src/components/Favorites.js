import React, { useCallback } from 'react'
import { getPokemons } from '../modules/getPokemons'
import { useSelector } from 'react-redux'
import { useAsyncState } from '../custom hooks/useAsyncState'

import Spinner from './Spinner'
import Card from './Card'

const Favorites = () => {
  const offset = useSelector(state => state.offset)
  const loader = useCallback(getPokemons(offset), [offset])
  const { payload, isLoading, loadError } = useAsyncState('pokemons', loader)

  const liked = useSelector(state => state.liked.sort((a, b) => a - b))

  const isLoaded = payload && payload.pokemons

  const loadLiked = isLoaded
    ? liked.map((url, index) => (
        <Card key={index} url={`https://pokeapi.co/api/v2/pokemon/${url}`} />
      ))
    : null

  return (
    <main className="cards-grid grid__cards-grid">
      {liked.length > 0 && !isLoading ? loadLiked : <p className="cards-grid__info">You don't have any favorite pokemons</p>}
      {loadError && <p>Load Error</p>}
      {isLoading && <Spinner />}
    </main>
  )
}

export default Favorites
