import React from 'react'
import AbilitiesList from './AbilitiesList'
import TypesList from './TypesList'
import Stats from './Stats'
import Sprite from './Sprite'

const Pokemon = ({ pokemon }) => {
  const { name, id, abilities, types, stats } = pokemon

  return (
    <section className="pokemon">
      <p className="pokemon__name">{name}</p>
      <span className="pokemon__id">{id}</span>
      <Sprite url={pokemon.sprites.front_default} />
      <AbilitiesList abilities={abilities} />
      <TypesList types={types} />
      <Stats stats={stats} />
    </section>
  )
}

export default Pokemon
