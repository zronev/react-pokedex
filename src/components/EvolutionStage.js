import React from 'react'
import EvolutionItem from './EvolutionItem'

const EvolutionStage = ({ stage }) => {
  return (
    <ul className="evolutions__stage">
      {stage.map((name, index) => (
        <EvolutionItem key={index} name={name} />
      ))}
    </ul>
  )
}

export default EvolutionStage
