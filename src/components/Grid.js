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

  const arrowRef = useRef()
  const [pokemonsData, setPokemonsData] = useState()
  const [screenHeight, setScreenHeight] = useState(window.innerHeight)

  const handleShowMoreClick = () => {
    dispatch(incLimit())
  }

  const handleArrowTopClick = () => {
    window.scrollTo(0, 0)
  }

  useEffect(() => {
    const controller = new AbortController()
    dispatch(loadPokemons(limit, offset, controller))

    return () => controller.abort()
  }, [dispatch, limit, offset])

  useEffect(() => {
    setPokemonsData(pokemons.data.results)
  }, [pokemons])

  useEffect(() => {
    const updateSize = () => setScreenHeight(window.innerHeight)
    updateSize()

    window.addEventListener('resize', updateSize)
    return () => window.removeEventListener('resize', updateSize)
  }, [screenHeight])

  useEffect(() => {
    const hideArrow = () => arrowRef.current.hidden = window.pageYOffset < screenHeight

    window.addEventListener('scroll', hideArrow)
    return () => window.removeEventListener('scroll', hideArrow)
  }, [screenHeight])

  const liked = useSelector(state => state.liked.sort((a, b) => a - b))
  const showLiked = useSelector(state => state.showLiked)
  const isLoaded = !!pokemonsData

  const loadAll = isLoaded
    ? pokemonsData.map((pokemon, index) => <Card key={index} url={pokemon.url} />)
    : null

  const loadLiked = isLoaded
    ? liked.map((id, index) => (
        <Card key={index} url={`https://pokeapi.co/api/v2/pokemon/${id}`} />
      ))
    : null

  return (
    <div className="grid">
      {liked.length === 0 && !showLiked ? null : <FilterLiked />}
      <main className="cards-grid grid__cards-grid">
        <i
          ref={arrowRef}
          onClick={handleArrowTopClick}
          className="arrow-top fas fa-sort-up"
          hidden
        />
        {showLiked && !pokemons.loading ? loadLiked : loadAll}
        {pokemons.error && !loadLiked && !loadAll && <p>Load Error</p>}
        {pokemons.loading && <Spinner />}
      </main>
      {!showLiked && (
        <button
          onClick={handleShowMoreClick}
          className="button button--show-more grid__button"
        >
          Show More
        </button>
      )}
      {pokemons.loading && <Spinner />}
    </div>
  )
}

export default Grid
