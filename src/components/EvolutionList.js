import React, { useCallback } from 'react'
import { getEvolutionChain } from '../modules/getEvolutionChain'
import { useAsyncState } from '../custom hooks/useAsyncState'

import Spinner from './Spinner'
import EvolutionStage from './EvolutionStage'

const EvolutionList = ({ species }) => {
  const loader = useCallback(getEvolutionChain(species.evolution_chain.url), [
    species.evolution_chain.url,
  ])
  const { payload, isLoading, loadError } = useAsyncState('evolutionChain', loader)

  const getEvolutionList = evolutionChain => {
    const evolution = evolutionChain.chain
    let evolutionList = []

    let name = evolution.species.name
    evolutionList.push([name])

    const evolvesTo = evolution.evolves_to
    let stage = 0

    const getNames = evolvesTo => {
      for (let variant in evolvesTo) {
        // Intentional type conversion
        // eslint-disable-next-line eqeqeq
        if (variant == 0) {
          evolutionList.push([])
          stage++
        }

        const pokemon = evolvesTo[variant]
        const name = pokemon.species.name
        evolutionList[stage].push('> ' + name)

        if (pokemon.evolves_to.length !== 0) getNames(pokemon.evolves_to)
      }
    }

    getNames(evolvesTo)
    return evolutionList
  }

  return (
    <section className="evolutions pokemon__evolutions">
      {payload && payload.evolutionChain && !isLoading ? (
        <>
          <h2 className="evolutions__name">Evolution chain</h2>
          <div className="evolutions__chain">
            {getEvolutionList(payload.evolutionChain).map((stage, index) => (
              <EvolutionStage key={index} stage={stage} />
            ))}
          </div>
        </>
      ) : null}

      {loadError && !payload.evolutionChain && <p>Load Error</p>}
      {isLoading && <Spinner />}
    </section>
  )
}

export default EvolutionList
