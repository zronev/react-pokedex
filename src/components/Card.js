import React, { useEffect, useState } from 'react'
import TypesList from './TypesList'
import AbilitiesList from './AbilitiesList'
import Sprite from './Sprite'
import Spinner from './Spinner'
import Like from './Like'

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
          <div className="card__header">
            <p className="name card__name">
              <span className="id card__id">{pokemon.id}</span>
              {` ${pokemon.name}`}
            </p>

            <Like id={pokemon.id}/>
          </div>

          {pokemon.sprites ? (
            <Sprite sprites={pokemon.sprites} parent={'card'} />
          ) : (
            <Spinner />
          )}

          <TypesList types={pokemon.types} />
          <AbilitiesList abilities={pokemon.abilities} />
        </>
      ) : null}
    </section>
  )
}

export default Card
