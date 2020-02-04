import React from 'react'
import { useSelector } from 'react-redux'
import PokemonToCompare from './PokemonToCompare'

const Compare = () => {
  const pokemonsToCompare = useSelector(state => state.toCompare)

  return (
    <div className="wrapper center">
      <main className="compare">
        {pokemonsToCompare.length > 0 ? (
          pokemonsToCompare.map(pokemonId => (
            <PokemonToCompare key={pokemonId} id={pokemonId} />
          ))
        ) : (
          <p className="compare__descr">You didn't add pokemons to compare</p>
        )}
      </main>
    </div>
  )
}

export default Compare
