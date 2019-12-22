import React from 'react'

const Stats = ({ stats }) => {
  return <ul className="stats pokemon__stats">
    {stats.map((stat, index) => (
      <li key={index}>{stat.stat.name}: {stat.base_stat}</li>
    ))}
  </ul>
}

export default Stats
