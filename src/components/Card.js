import React, { useEffect, useState } from 'react'
import TypesList from './TypesList'
import AbilitiesList from './AbilitiesList'
import Sprite from './Sprite'
import Spinner from './Spinner'
import Like from './Like'
import Id from './Id'

const Card = ({ url }) => {
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

  return (
    <section className="card">
      {pokemon ? (
        <>
          <header className="card__header">
            <p className="name card__name">
              <Id id={pokemon.id} />
              {` ${pokemon.name}`}
            </p>

            <Like id={pokemon.id} parent={'card'} />
          </header>

          {pokemon.sprites ? (
            <Sprite sprites={pokemon.sprites} parent={'card'} />
          ) : (
            <Spinner />
          )}

          <TypesList types={pokemon.types} />
          <AbilitiesList abilities={pokemon.abilities} parent={'card'} />
        </>
      ) : null}
    </section>
  )
}

export default Card
