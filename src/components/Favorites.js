import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { loadPokemons } from '../actions'

import Spinner from './Spinner'
import Card from './Card'

const Favorites = () => {
  const dispatch = useDispatch()
  const offset = useSelector(state => state.offset)
  const pokemons = useSelector(state => state.pokemons)
  const liked = useSelector(state => state.liked.sort((a, b) => a - b))

  useEffect(() => {
    const controller = new AbortController()
    dispatch(loadPokemons(0, offset, controller))

    return () => controller.abort()
  }, [dispatch, offset])

  const loadLiked =
    pokemons.loaded &&
    liked.map((url, index) => (
      <Card key={index} url={`https://pokeapi.co/api/v2/pokemon/${url}`} />
    ))

  return (
    <main className="cards-grid grid__cards-grid">
      {liked.length > 0 && !pokemons.loading ? (
        loadLiked
      ) : (
        <p className="cards-grid__info">You don't have any favorite pokemons</p>
      )}
      {pokemons.error && !loadLiked && <p>Load Error</p>}
      {pokemons.loading && <Spinner />}
    </main>
  )
}

export default Favorites
