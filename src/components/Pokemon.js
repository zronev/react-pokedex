import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { loadSpecies } from '../actions'

import AbilitiesList from './AbilitiesList'
import TypesList from './TypesList'
import Stats from './Stats'
import SpriteWithSwitcher from './SpriteWithSwitcher'
import EvolutionList from './EvolutionList'
import Like from './Like'
import Id from './Id'
import AddToCompare from './AddToCompare'
import ExcludeToCompare from './ExcludeToCompare'

const Pokemon = ({ pokemon }) => {
  const { name, id, abilities, types, stats, sprites, species } = pokemon

  const dispatch = useDispatch()

  const theme = useSelector(state => state.theme)
  const speciesData = useSelector(state => state.speciesData)
  const toCompare = useSelector(state => state.toCompare)
  
  const isPokemonInCompared = toCompare.includes(id)

  useEffect(() => {
    const controller = new AbortController()
    dispatch(loadSpecies(species.url, controller))

    return () => controller.abort()
  }, [dispatch, species.url])

  return (
    <section className={`pokemon ${theme ? 'pokemon--night' : ''}`}>
      <p className="name pokemon__name">
        <Id id={id} parent="pokemon" />
        {` ${name}`}
      </p>

      <div className="buttons-bar pokemon__buttons-bar">
        <Like id={id} parent={'pokemon'} />
        {isPokemonInCompared ? <ExcludeToCompare id={id} /> : <AddToCompare id={id} />}
      </div>

      <SpriteWithSwitcher sprites={sprites} parent="pokemon" />

      <AbilitiesList abilities={abilities} parent="pokemon" />
      <TypesList types={types} parent="pokemon"/>

      <Stats stats={stats} parent="pokemon" />

      {speciesData && speciesData.loaded ? (
        <EvolutionList species={speciesData.data} parent="pokemon"/>
      ) : null}
    </section>
  )
}

export default Pokemon
