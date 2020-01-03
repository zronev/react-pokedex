import React, { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { dataToggleAction } from '../actions'
import { getSpecies } from '../modules/getSpecies'
import { useAsyncState } from '../custom hooks/useAsyncState'

import AbilitiesList from './AbilitiesList'
import TypesList from './TypesList'
import Stats from './Stats'
import SpriteWithSwitcher from './SpriteWithSwitcher'
import Chart from './Chart'
import EvolutionList from './EvolutionList'

const Pokemon = ({ pokemon }) => {
  const { name, id, abilities, types, stats, sprites, species } = pokemon

  const dispatch = useDispatch()
  const chartType = useSelector(state => state.chartType)

  const loader = useCallback(getSpecies(species.url), [species.url])
  const { payload } = useAsyncState('species', loader)

  const handleClick = () => {
    dispatch(dataToggleAction('chartType'))
  }

  return (
    <section className="pokemon">
      <p className="name pokemon__name">
        <span className="id pokemon__id">{id}</span>
        {` ${name}`}
      </p>

      <SpriteWithSwitcher sprites={sprites} />

      <AbilitiesList abilities={abilities} />
      <TypesList types={types} />

      <button className="button toggle-type pokemon__toggle-type" onClick={handleClick}>
        Toggle Type
      </button>

      {chartType && <Chart stats={stats} />}
      {!chartType && <Stats stats={stats} />}

      {payload && payload.species ? <EvolutionList species={payload.species} /> : null}
    </section>
  )
}

export default Pokemon
