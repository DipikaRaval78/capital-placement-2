import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import faker from "faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
   
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Qualified',
      data: labels.map(() => faker.datatype.number({ min: 250, max: 750 })),
      borderColor: 'rgba(251, 227, 142, 0.7)',
      backgroundColor: 'rgba(251, 227, 142, 0.7)',
    },
    {
      label: 'Disqualified',
      data: labels.map(() => faker.datatype.number({ min: 250, max: 750 })),
      borderColor: 'rgba(177, 165, 255, 1)',
      backgroundColor: 'rgba(177, 165, 255, 1)',
    },
  ],
};

export  const Chart = () => {
  return <Line className="w-full h-full" options={options} data={data} />;
}
