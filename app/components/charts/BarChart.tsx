'use client'

import { Bar } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
)

interface BarChartProps {
  data: {
    labels: string[]
    values: number[]
  }
  xLabel?: string
  yLabel?: string
  height?: number
}

export function BarChart({ data, xLabel, yLabel, height = 400 }: BarChartProps) {
  if (!data || !data.labels || !data.values) {
    return <div style={{ height: height }}>Loading chart...</div>
  }

  const chartData = {
    labels: data.labels,
    datasets: [
      {
        data: data.values,
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
        borderColor: 'rgb(53, 162, 235)',
        borderWidth: 1,
      },
    ],
  }

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        title: {
          display: !!xLabel,
          text: xLabel,
        },
        ticks: {
          maxRotation: 45,
          minRotation: 45,
        },
      },
      y: {
        title: {
          display: !!yLabel,
          text: yLabel,
        },
        beginAtZero: true,
      },
    },
  }

  return (
    <div style={{ height: height }}>
      <Bar data={chartData} options={options} />
    </div>
  )
} 