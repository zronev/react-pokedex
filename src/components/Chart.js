import React, { useState, useEffect } from 'react'
import { Radar } from 'react-chartjs-2'

const Chart = ({ stats }) => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)
  const [chartWidth, setChartWidth] = useState(350)
  const [fontSize, setFontSize] = useState(16)

  useEffect(() => {
    const updateSize = () => {
      setScreenWidth(window.innerWidth)
    }
    updateSize()

    if (screenWidth <= 458) {
      setFontSize(14)
      setChartWidth(275)
    } else if (screenWidth <= 768) {
      setFontSize(16)
      setChartWidth(350)
    } else if (screenWidth <= 1024) {
      setFontSize(18)
      setChartWidth(400)
    } else if (screenWidth <= 1440) {
      setFontSize(20)
      setChartWidth(450)
    }

    window.addEventListener('resize', updateSize)
    return () => window.removeEventListener('resize', updateSize)
  }, [screenWidth])

  const baseStats = stats.map(stat => stat.base_stat)
  const statsNames = stats.map(stat => stat.stat.name)

  const options = {
    legend: {
      display: false,
    },
    scale: {
      angleLines: {
        display: false,
      },
      pointLabels: {
        fontSize: fontSize,
        fontFamily: 'Open Sans',
        fontColor: '#2d3436',
      },
      ticks: {
        suggestedMin: 50,
        stepSize: 10,
      },
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
    <div className="chart chart--radar pokemon__chart">
      <Radar
        data={data}
        width={chartWidth}
        height={chartWidth}
        options={options}
        redraw={true}
      />
    </div>
  )
}

export default Chart
