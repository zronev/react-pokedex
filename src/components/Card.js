import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setId } from '../actions'
import classNames from 'classnames'

import TypesList from './TypesList'
import AbilitiesList from './AbilitiesList'
import Sprite from './Sprite'
import Spinner from './Spinner'
import Like from './Like'
import Id from './Id'

const Card = ({ url }) => {
  const dispatch = useDispatch()

  const theme = useSelector(state => state.theme)
  const [pokemon, setPokemon] = useState()

  useEffect(() => {
    const controller = new AbortController()
    const fetchData = async () => {
      try {
        const res = await fetch(url, { signal: controller.signal })
        const data = await res.json()
        setPokemon(data)
      } catch (e) {
        console.log(`${e.name}: ${e.message}`)
      }
    }
    fetchData()

    return () => controller.abort()
  }, [url])

  const handleClick = () => dispatch(setId(pokemon.id))

  const sectionClass = classNames({
    card: true,
    'card--night': theme,
  })

  return (
    <section className={sectionClass}>
      {pokemon ? (
        <>
          <header className="card__header">
            <p className="name card__name">
              <Id id={pokemon.id} parent="card" />
              {` ${pokemon.name}`}
            </p>

            <Like id={pokemon.id} parent={'card'} />
          </header>

          <Link onClick={handleClick} to="/">
            {pokemon.sprites ? (
              <Sprite sprites={pokemon.sprites} parent={'card'} />
            ) : (
              <Spinner />
            )}
          </Link>

          <TypesList types={pokemon.types} />
          <AbilitiesList abilities={pokemon.abilities} parent="card" />
        </>
      ) : null}
    </section>
  )
}

export default Card
