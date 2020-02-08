import React from 'react'
import { useSelector } from 'react-redux'
import classNames from 'classnames'

import AbilitiesItem from './AbilitiesItem'

const AbilitiesList = ({ abilities, parent }) => {
  const theme = useSelector(state => state.theme)

  const divClass = classNames({
    abilities: parent === 'card',
    'abilities-main': parent === 'pokemon',
    'abilities-pokemon-to-compare': parent === 'pokemon-to-compare',
    'abilities-pokemon-to-compare--night': parent === 'pokemon-to-compare' && theme,
    [`${parent}__abilities`]: true,
  })

  const ulClass = classNames({
    abilities__list: parent === 'card',
    'abilities-main__list': parent === 'pokemon',
    'abilities-pokemon-to-compare__list': parent === 'pokemon-to-compare',
  })

  return (
    <div className={divClass}>
      {parent === 'pokemon' && <h2 className="abilities-main__title">Abilities</h2>}
      <ul className={ulClass}>
        {abilities.map((ability, index) => (
          <AbilitiesItem key={index} ability={ability.ability} parent={parent} />
        ))}
      </ul>
    </div>
  )
}

export default AbilitiesList
