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
    const fetchData = async () => {
      const res = await fetch(url)
      const data = await res.json()

      setPokemon(data)
    }

    fetchData()
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
