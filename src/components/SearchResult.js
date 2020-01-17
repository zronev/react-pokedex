import React, { useCallback, useEffect, useState } from 'react'
import Pokemon from './Pokemon'
import { useSelector, useDispatch } from 'react-redux'
import { setName } from '../actions'
import Spinner from './Spinner'

const SearchResult = () => {
  const name = useSelector(state => state.name)
  const dispatch = useDispatch()

  const [pokemon, setPokemon] = useState(null)

  const handleClick = () => {
    dispatch(setName(''))
  }

  const fetchData = useCallback(async () => {
    try {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}/`)
      const data = await res.json()
      setPokemon(data)
    } catch (error) {
      console.log(`Ошибка: ${error}`)
      dispatch(setName(''))
    }
  }, [dispatch, name])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  return (
    <>
      <main className={`search-result ${name ? 'search-result--is-show' : ''}`}>
        {pokemon && <Pokemon pokemon={pokemon} />}
        {!pokemon && <Spinner />}
      </main>
      <div onClick={handleClick} className={`${name ? 'overlay' : ''}`} />
    </>
  )
}

export default SearchResult
