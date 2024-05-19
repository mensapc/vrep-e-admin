import React from 'react';
import { Line } from 'react-chartjs-2';

import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  Filler,
  Title,
  Tooltip,
} from 'chart.js';

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  Filler,
  Title,
  Tooltip
);

function LineChart({ graphData }) {
  const data = {
    labels: graphData.labels,
    datasets: [
      {
        label: 'Last Year',
        data: graphData.last_year,
        borderColor: '#FB7D5B',
        backgroundColor: 'rgba(251,125,91,0.2)',
        fill: true,
        pointBorderWidth: 1,
        tension: 0.5,
      },
      {
        label: 'This Year',
        data: graphData.this_year,
        borderColor: '#FCC43E',
        backgroundColor: 'rgba(252,196,92,0.2)',
        fill: true,
        pointBorderWidth: 1,
        tension: 0.5,
      },
    ],
  };
  const options = {
    plugins: {
      legend: true,
    },
    scales: {
      y: {
        grid: { display: false },
        min: 0,
        max: 100,
        ticks: { stepSize: 25 },
      },
    },
  };

  return (
    <div className="line-chart-main">
      <Line data={data} options={options} />
    </div>
  );
}

export default LineChart;

