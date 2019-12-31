import React from 'react'
import { HorizontalBar } from 'react-chartjs-2'

const Stats = ({ stats }) => {
  const baseStats = stats.map(stat => stat.base_stat)
  const statsNames = stats.map(stat => stat.stat.name)

  const options = {
    legend: {
      display: false,
    },
    maintainAspectRatio: false,
  }

  const data = {
    labels: statsNames,
    datasets: [
      {
        label: 'Stats',
        backgroundColor: 'rgba(179,181,198,0.2)',
        borderColor: '#eb4d4b',
        borderWidth: '3',
        pointBackgroundColor: '#eb4d4b',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: '#eb4d4b',
        data: baseStats,
      },
    ],
  }

  return (
    <div className="stats pokemon__stats">
      <HorizontalBar data={data} width={350} height={350} options={options} />
    </div>
  )
}

export default Stats
