import React, { useState, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setName, dataToggleAction, setId } from '../actions'
import { Link, useHistory } from 'react-router-dom'

const Search = ({ props }) => {
  const inputRef = useRef('')
  const dispatch = useDispatch()
  let history = useHistory()

  const isOpen = useSelector(state => state.search)
  const name = useSelector(state => state.name)

  // In the case we search by name
  const [pokemonId, setPokemonId] = useState(null)

  const handleSubmit = e => {
    e.preventDefault()

    if (Number(inputRef.current.value))
      dispatch(setId(Number(inputRef.current.value.trim())))
    else 
      dispatch(setName(inputRef.current.value.toLowerCase().trim()))

    inputRef.current.value = ''
    dispatch(dataToggleAction('SEARCH'))
    history.push('/')
  }

  const handleClick = () => {
    if (Number(inputRef.current.value)) {
      dispatch(setId(Number(inputRef.current.value.trim())))
    } else {
      dispatch(setName(inputRef.current.value.toLowerCase().trim()))
      pokemonId && dispatch(setId(pokemonId))
    }

    inputRef.current.value = ''
    dispatch(dataToggleAction('SEARCH'))
  }

  const handleCloseClick = () => {
    dispatch(dataToggleAction('SEARCH'))
  }

  useEffect(() => {
    if (!name) return

    const controller = new AbortController()
    const url = name => `https://pokeapi.co/api/v2/pokemon/${name}/`

    const fetchData = async () => {
      try {
        const res = await fetch(url(name), { signal: controller.signal })
        const data = await res.json()
        setPokemonId(data.id)
      } catch (e) {
        console.log(`${e.name}: ${e.message}`)
      }
    }
    fetchData()
    dispatch(setId(pokemonId))

    return () => controller.abort()
  }, [dispatch, name, pokemonId])

  return (
    <div className={`search ${isOpen ? 'search--is-open' : ''}`}>
      <form onSubmit={handleSubmit} className={`search__form`}>
        <input
          ref={inputRef}
          type="search"
          className="search__input"
          placeholder="Type a pokemon name or id..."
          required
        />
        <div className="search__buttons">
          <Link onClick={handleClick} className="search__find button button--find" to="/">
            Find
          </Link>
          <button
            onClick={handleCloseClick}
            type="button"
            className="search__close button button--close"
          >
            Close
          </button>
        </div>
      </form>

      <div onClick={handleCloseClick} className={`${isOpen ? 'overlay' : ''}`} />
    </div>
  )
}

export default Search
