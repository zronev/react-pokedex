import React, { useState, useEffect } from 'react'
import { HorizontalBar } from 'react-chartjs-2'

const Stats = ({ stats }) => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)
  const [chartWidth, setChartWidth] = useState(350)

  useEffect(() => {
    const updateSize = () => {
      setScreenWidth(window.innerWidth)
    }
    updateSize()

    if (screenWidth <= 458) setChartWidth(275)
    else if (screenWidth <= 768) setChartWidth(350)
    else if (screenWidth <= 1024) setChartWidth(400)
    else if (screenWidth <= 1440) setChartWidth(450)

    window.addEventListener('resize', updateSize)
    return () => window.removeEventListener('resize', updateSize)
  }, [screenWidth])

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
    <div className="chart chart--stats pokemon__chart ">
      <HorizontalBar
        data={data}
        width={chartWidth}
        height={chartWidth}
        options={options}
      />
    </div>
  )
}

export default Stats
