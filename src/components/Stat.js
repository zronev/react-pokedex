import React from 'react'

const Stat = ({ stat, max }) => {
  return (
    <div className="stat">
      <p className="stat__name">
        {stat.stat.name} — {stat.base_stat}
      </p>
      <progress
        max={max}
        value={stat.base_stat}
        className={`stat__progress stat--${max}-max `}
      />
    </div>
  )
}

export default Stat
