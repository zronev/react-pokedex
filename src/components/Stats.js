import React, { useState, useEffect } from 'react'
import Stat from './Stat'
import { useSelector } from 'react-redux'

const Stats = ({ stats, parent }) => {
  const [maxStat, setMaxStat] = useState(0)
  const night = useSelector(state => state.theme)

  useEffect(() => {
    let max = 0
    for (let stat of stats) {
      if (stat.base_stat > max) max = stat.base_stat
    }

    switch (true) {
      case max > 250:
        setMaxStat(275)
        break
      case max > 200:
        setMaxStat(250)
        break
      case max > 150:
        setMaxStat(200)
        break
      case max > 100:
        setMaxStat(150)
        break
      case max > 75:
        setMaxStat(100)
        break
      case max > 50:
        setMaxStat(75)
        break
      default:
        setMaxStat(50)
    }
  }, [stats])

  return (
    <div className={`stats ${parent}__stats`}>
      {parent === 'pokemon' ? <h2 className="stats__title">Base stats</h2> : null}
      <div
        className={`stats__bars stats__bars--${parent} ${
          night ? 'stats__bars--night' : ''
        }`}
      >
        {stats.map((stat, index) => (
          <Stat key={index} stat={stat} max={maxStat} />
        ))}
      </div>
    </div>
  )
}

export default Stats
