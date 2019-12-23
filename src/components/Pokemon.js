import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AbilitiesList from './AbilitiesList'
import TypesList from './TypesList'
import Stats from './Stats'
import Sprite from './Sprite'
import Chart from './Chart'
import { toggleChartType } from '../actions'

const Pokemon = ({ pokemon }) => {
  const { name, id, abilities, types, stats, sprites } = pokemon
  const chartType = useSelector(state => state.chartType)
  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(toggleChartType())
  }

  return (
    <section className="pokemon">
      <p className="pokemon__name">{name}</p>
      <span className="pokemon__id">{id}</span>
      <Sprite url={sprites.front_default} />

      <AbilitiesList abilities={abilities} />
      <TypesList types={types} />

      <button className="toggle-type pokemon__toggle-type" onClick={handleClick}>
        Toggle Type
      </button>

      {chartType && <Chart stats={stats} />}
      {!chartType && <Stats stats={stats} />}
    </section>
  )
}

export default Pokemon
