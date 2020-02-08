import React, { useState, useEffect } from 'react'

import EvolutionItem from './EvolutionItem'

const EvolutionStage = ({ stage, index }) => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)

  useEffect(() => {
    const updateSize = () => setScreenWidth(window.innerWidth)
    updateSize()

    window.addEventListener('resize', updateSize)
    return () => window.removeEventListener('resize', updateSize)
  }, [screenWidth])

  return (
    <ul className="stage evolutions__stage">
      {stage.map((name, i) => (
        <div key={i} className="stage__pokemon">
          {!(index === 0 && i === 0) && <i className="stage__arrow fas fa-arrow-down" />}
          <EvolutionItem name={name} index={`${index}.${i}`} />
        </div>
      ))}
    </ul>
  )
}

export default EvolutionStage
