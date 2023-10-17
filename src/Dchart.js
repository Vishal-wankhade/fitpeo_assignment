import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend, Title);

const totalBuys = 100;
const oldCustomerBuys = totalBuys * 0.35; // 35% of total buys
const newCustomerBuys = totalBuys * 0.65; // 65% of total buys

const data = {
  labels: ['Old Customers', 'New Customers'],
  datasets: [
    {
      data: [oldCustomerBuys, newCustomerBuys],
      backgroundColor: ['rgba(108, 1, 189, 0.93)', // Blue for new customers
      'rgba(255, 0, 67, 0.89)'],
      hoverBackgroundColor: ['rgba(255, 99, 132, 1)', 'rgba(75, 192, 192, 1)'],
      borderColor: 'white',
      borderWidth: 10,
    },
  ],
};

export default function Dchart() {
  return (
   <div className='pie'>
       <Doughnut
      data={data}
      options={{
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: true,
            position: 'bottom',
          },
          title: {
            display: true,
            text: `65% total new customers`,
            position: 'bottom',
            font:{
              fontWeight:'bold'
            },
            color:'black',
          },
          tooltip: {
            callbacks: {
              label: function (context) {
                const label = context.label || '';
                const value = context.parsed || 0;
                if (label && value) {
                  return `${label}: ${value} Buys`;
                }
                return '';
              },
            },
          },
        },
      }}
    />
   </div>
  );
}
