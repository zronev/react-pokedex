import React from 'react'
import EvolutionItem from './EvolutionItem'

const EvolutionStage = ({ stage, index }) => {
  return (
    <ul>
      {stage.map((name, i) => (
        <div key={i} className="stage evolutions__stage">
          {!(index === 0 && i === 0) && <i className="stage__arrow fas fa-arrow-right" />}
          <EvolutionItem name={name} index={`${index}.${i}`} />
        </div>
      ))}
    </ul>
  )
}

export default EvolutionStage
