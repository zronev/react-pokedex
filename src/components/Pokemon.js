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

const Pokemon = ({ pokemon }) => {
  const dispatch = useDispatch()
  const theme = useSelector(state => state.theme)
  const speciesData = useSelector(state => state.speciesData)

  const { name, id, abilities, types, stats, sprites, species } = pokemon

  useEffect(() => {
    const controller = new AbortController()
    dispatch(loadSpecies(species.url, controller))

    return () => controller.abort()
  }, [dispatch, species.url])

  return (
    <section className={`pokemon ${theme ? 'pokemon--night' : ''}`}>
      <p className="name pokemon__name">
        <Id id={id} />
        {` ${name}`}
      </p>

      <Like id={id} parent={'pokemon'} />

      <SpriteWithSwitcher sprites={sprites} />

      <AbilitiesList abilities={abilities} parent={'pokemon'} />
      <TypesList types={types} />

      <Stats stats={stats} />

      {speciesData && speciesData.loaded ? (
        <EvolutionList species={speciesData.data} />
      ) : null}
    </section>
  )
}

export default Pokemon
