import React from 'react'
import { useSelector } from 'react-redux'
import classNames from 'classnames'

import PokemonToCompare from './PokemonToCompare'

const Compare = () => {
  const theme = useSelector(state => state.theme)
  const pokemonsToCompare = useSelector(state => state.toCompare)

  const compareClass = classNames({
    compare: true,
    'compare--night': theme,
  })

  return (
    <div className="wrapper center">
      {pokemonsToCompare.length > 0 ? (
        <main className={compareClass}>
          {pokemonsToCompare.map(pokemonId => (
            <PokemonToCompare key={pokemonId} id={pokemonId} />
          ))}
        </main>
      ) : (
        <p className="compare--nothing-to-compare">
          You didn&apos;t add pokemons to compare
        </p>
      )}
    </div>
  )
}

export default Compare
