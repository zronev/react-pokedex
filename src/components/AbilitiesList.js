import React from 'react'
import AbilitiesItem from './AbilitiesItem'

const AbilitiesList = ({ abilities }) => {
  return <ul className="pokemon__abilities">
    {abilities.map((ability, index) => (
      <AbilitiesItem key={index} ability={ability.ability}/>
    ))}
  </ul>
}

export default AbilitiesList
