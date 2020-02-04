import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import Id from './Id'
import Like from './Like'
import SpriteWithSwitcher from './SpriteWithSwitcher'
import AddToCompare from './AddToCompare'
import ExcludeToCompare from './ExcludeToCompare'
import AbilitiesList from './AbilitiesList'
import TypesList from './TypesList'
import Stats from './Stats'

const PokemonToCompare = ({ id }) => {
  const [pokemon, setPokemon] = useState()

  const toCompare = useSelector(state => state.toCompare)
  const isPokemonInCompared = toCompare.includes(id)

  useEffect(() => {
    const controller = new AbortController()
    const url = id => `https://pokeapi.co/api/v2/pokemon/${id}/`

    const fetchData = async () => {
      try {
        const res = await fetch(url(id), { signal: controller.signal })
        const data = await res.json()
        setPokemon(data)
      } catch (e) {
        console.log(`${e.name}: ${e.message}`)
      }
    }
    fetchData()

    return () => controller.abort()
  }, [id])

  return (
    <>
      {pokemon && pokemon.id ? (
        <section className="pokemon-to-compare">
          <header className="pokemon-to-compare__header">
            <p className="name pokemon-to-compare__name">
              <Id id={pokemon.id} parent="pokemon-to-compare" />
              {` ${pokemon.name}`}
            </p>
            <div className="buttons-bar pokemon-to-compare__buttons-bar">
              <Like id={id} parent={'pokemon'} />
              {isPokemonInCompared ? (
                <ExcludeToCompare id={id} />
              ) : (
                <AddToCompare id={id} />
              )}
            </div>
          </header>
          <SpriteWithSwitcher sprites={pokemon.sprites} parent="pokemon-to-compare" />

          {pokemon && pokemon.types && (
            <TypesList types={pokemon.types} parent="pokemon-to-compare" />
          )}
          {pokemon && pokemon.abilities && (
            <AbilitiesList abilities={pokemon.abilities} parent="pokemon-to-compare" />
          )}

          <Stats stats={pokemon.stats} parent="pokemon-to-compare" />
        </section>
      ) : null}
    </>
  )
}

export default PokemonToCompare
