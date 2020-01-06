import React from 'react'
import AbilitiesItem from './AbilitiesItem'

const AbilitiesList = ({ abilities, parent }) => {
  return (
    <ul className={`abilities ${parent}__abilities`}>
      {abilities.map((ability, index) => (
        <AbilitiesItem key={index} ability={ability.ability} />
      ))}
    </ul>
  )
}

export default AbilitiesList
