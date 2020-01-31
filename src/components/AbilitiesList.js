import React from 'react'
import AbilitiesItem from './AbilitiesItem'

const AbilitiesList = ({ abilities, parent }) => {
  return (
    <div
      className={`abilities${parent === 'pokemon' ? '-main' : ''} ${parent}__abilities`}
    >
      {parent === 'pokemon' && (
        <h2 className={`abilities${parent === 'pokemon' ? '-main' : ''}__title`}>
          Abilities
        </h2>
      )}
      <ul className={`abilities${parent === 'pokemon' ? '-main' : ''}__list`}>
        {abilities.map((ability, index) => (
          <AbilitiesItem key={index} ability={ability.ability} parent={parent} />
        ))}
      </ul>
    </div>
  )
}

export default AbilitiesList
