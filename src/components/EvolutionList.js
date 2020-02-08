import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadEvolutionChain } from '../actions'

import EvolutionStage from './EvolutionStage'
import Spinner from './Spinner'

const EvolutionList = ({ species }) => {
  const dispatch = useDispatch()
  const evolutionChain = useSelector(state => state.evolutionChain)

  useEffect(() => {
    const controller = new AbortController()
    dispatch(loadEvolutionChain(species.evolution_chain.url, controller))

    return () => controller.abort()
  }, [dispatch, species.evolution_chain.url])

  const getEvolutionList = evolutionChain => {
    const evolution = evolutionChain.chain
    let evolutionList = []

    let name = evolution.species.name
    evolutionList.push([name])

    const evolvesTo = evolution.evolves_to
    let stage = 0

    const getNames = evolvesTo => {
      for (let variant in evolvesTo) {
        if (variant === '0') {
          evolutionList.push([])
          stage++
        }

        const pokemon = evolvesTo[variant]
        const name = pokemon.species.name
        evolutionList[stage].push(name)

        pokemon.evolves_to.length !== 0 && getNames(pokemon.evolves_to)
      }
    }
    getNames(evolvesTo)

    return evolutionList
  }

  return (
    <section className="evolutions pokemon__evolutions">
      {evolutionChain && evolutionChain.loaded && !evolutionChain.loading ? (
        <>
          <h2 className="evolutions__name">Evolution chain</h2>
          <div className="evolutions__chain">
            {getEvolutionList(evolutionChain.data).map((stage, index) => (
              <EvolutionStage key={index} index={index} stage={stage} />
            ))}
          </div>
        </>
      ) : null}

      {evolutionChain.error && !evolutionChain.loaded && <p>Load Error</p>}
      {evolutionChain.loading && <Spinner />}
    </section>
  )
}

export default EvolutionList
