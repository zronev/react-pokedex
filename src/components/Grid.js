import React, { useEffect, useState, useRef } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { incLimit, loadPokemons } from '../actions'

import Spinner from './Spinner'
import Card from './Card'
import FilterLiked from './FilterLiked'

const Grid = () => {
  const dispatch = useDispatch()

  const limit = useSelector(state => state.limit)
  const offset = useSelector(state => state.offset)
  const pokemons = useSelector(state => state.pokemons)

  const [pokemonsData, setPokemonsData] = useState()
  const [isVisible, setIsVisible] = useState(false)
  // const [isFetching, setIsFetching] = useState(false)

  const handleClick = () => {
    setIsVisible(false)
    // setIsFetching(true)
    dispatch(incLimit())
  }

  useEffect(() => {
    const controller = new AbortController()
    dispatch(loadPokemons(limit, offset, controller))

    return () => controller.abort()
  }, [dispatch, limit, offset])

  useEffect(() => {
    setPokemonsData(pokemons.data.results)
    // setIsFetching(false)
  }, [pokemons])

  const liked = useSelector(state => state.liked.sort((a, b) => a - b))
  const showLiked = useSelector(state => state.showLiked)

  const isLoaded = !!pokemonsData

  const loadAll = isLoaded
    ? pokemonsData.map((pokemon, index) => <Card key={index} url={pokemon.url} />)
    : null

  const loadLiked = isLoaded
    ? liked.map((url, index) => (
        <Card key={index} url={`https://pokeapi.co/api/v2/pokemon/${url}`} />
      ))
    : null

  useEffect(() => {
    const handleScroll = () => {
      const fullLength = window.innerHeight + document.documentElement.scrollTop
      if (fullLength !== document.documentElement.offsetHeight || showLiked) return
      setIsVisible(true)
    }

    document.addEventListener('scroll', handleScroll, false)
    return () => {
      document.removeEventListener('scroll', handleScroll, false)
    }
  }, [dispatch, showLiked])

  return (
    <div className="grid">
      {liked.length === 0 && !showLiked ? null : <FilterLiked />}
      <main className="cards-grid grid__cards-grid">
        {showLiked && !pokemons.loading ? loadLiked : loadAll}
        {pokemons.error && !loadLiked && !loadAll && <p>Load Error</p>}
        {pokemons.loading && <Spinner />}
      </main>
      {isVisible && !showLiked && (
        <button onClick={handleClick} className="button button--show-more grid__button">
          Show More
        </button>
      )}
      {/* {isFetching && <Spinner />} */}
    </div>
  )
}

export default Grid
