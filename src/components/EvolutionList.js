import React, { useCallback } from 'react'
import { getEvolutionChain } from '../modules/getEvolutionChain'
import { useAsyncState } from '../custom hooks/useAsyncState'
import EvolutionItem from './EvolutionItem'
import Spinner from './Spinner'

const EvolutionList = ({ species }) => {
  const loader = useCallback(getEvolutionChain(species.evolution_chain.url), [
    species.evolution_chain.url,
  ])
  const { payload, isLoading, loadError } = useAsyncState('evolutionChain', loader)

  const getEvolutionList = evolutionChain => {
    const evolution = evolutionChain.chain
    let evolutions = []

    const firstForm = {}
    firstForm.name = evolution.species.name
    evolutions.push(firstForm)

    const item = evolution.evolves_to

    const getNames = item => {
      for (let value in item) {
        const specItem = item[value]
        const evol = {}

        evol.name = specItem.species.name
        evolutions.push(evol)

        if (specItem.evolves_to) getNames(specItem.evolves_to)
      }
    }

    getNames(item)
    return evolutions
  }

  return (
    <section className="evolutions pokemon__evolutions">
      {payload && payload.evolutionChain ? (
        <>
          <h2 className="evolutions__name">Evolution chain</h2>
          <ul className="evolutions__list">
            {getEvolutionList(payload.evolutionChain).map(evolution => (
              <EvolutionItem key={evolution.name} name={evolution.name} />
            ))}
          </ul>
        </>
      ) : null}

      {loadError && <p>Load Error</p>}
      {isLoading && <Spinner />}
    </section>
  )
}

export default EvolutionList
