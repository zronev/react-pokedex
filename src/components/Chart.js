import React from "react";
import { Radar } from "react-chartjs-2";

const Chart = ({ stats }) => {
  const baseStats = stats.map(stat => stat.base_stat);
  const statsNames = stats.map(stat => stat.stat.name);

  const options = {
    legend: {
      display: false,
    },
    scale: {
      angleLines: {
        display: false
      },
      pointLabels: {
        fontSize: 14,
        fontFamily: 'Open Sans',
        fontColor: '#2d3436'
      },
      ticks: {
        suggestedMin: 50,
        stepSize: 10
      }
    }
  };

  const data = {
    labels: statsNames,
    datasets: [
      {
        label: 'Stats',
        backgroundColor: "rgba(179,181,198,0.2)",
        borderColor: "#eb4d4b",
        borderWidth: "3",
        pointBackgroundColor: "#eb4d4b",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "#eb4d4b",
        data: baseStats
      }
    ]
  };

  return (
    <div className="radar pokemon__radar">
      <Radar data={data} width={350} height={350} options={options} />
    </div>
  );
};

export default Chart;
