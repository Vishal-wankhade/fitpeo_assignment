import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import data from './Data.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

// Extracting labels and earnings from the JSON data
const labels = data.map(item => item.month.slice(0,3));
const earnings = data.map(item => item.earnings);

const currentMonthIndex = (new Date().getMonth()) % 12; // Get the index of the current month

const backgroundColor = labels.map((month, index) =>
  index === currentMonthIndex
    ? 'blue' // Blue-violet for the current month
    : 'rgba(170, 162, 252, 0.197)' // Light violet with reduced opacity for other months
);

const chartData = {
  labels,
  datasets: [
    {
      label: 'Monthly Earning',
      data: earnings,
      backgroundColor, // Bar color
       // Border color of the bars
   
      borderRadius:'10',// Border width of the bars
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false, // Hide the legend
    },
    title: {
      display: true,
      text: 'Overview ' + 'Monthly Earnings',
      color:'black',
      font: {
        weight: 'bold', 
     
      },
    },
  },
  scales: {
    x: {
      angle: 0, // Keep labels horizontal
      display: true, // Display x-axis
      beginAtZero: true,
      grid: {
        display: false, // Remove the x-axis grid lines
      },
      color:'black',
      ticks: {
        font: {
          weight: 'bold', 
          
          // Set the font weight to bold for the labels
        },
      },
    },
    y: {
      display: false, // Hide the y-axis ticks
    },
  },
  layout: {
    padding: {
      left: 10,
      right: 10,
      top: 10,
      bottom: 10,
    },
    backgroundColor:'white',
  },
  maintainAspectRatio: false, // Set to false to control the aspect ratio
};


const chartStyles = {
  chartContainer: {
    background: 'white', // Set the chart background to white
    padding: '10px',
    borderRadius: '10px',
  },
  overviewLabel: {
    fontWeight: 'bold',
    // Make the monthly names bold
  },
  color:'black' ,
};

export default function BarCom() {
  return(

    <div className='bar'>
      {/* <div className="overview-label">Overview</div> */}
      <Bar options={options} data={chartData} />
    </div>
  );
}
