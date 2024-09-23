import React, { useEffect, useRef } from 'react';
import { Line } from 'react-chartjs-2';
import { FaUserGraduate } from 'react-icons/fa';
import { 
  Chart as ChartJS, 
  LineElement, 
  PointElement, 
  LineController, 
  CategoryScale, 
  LinearScale, 
  Title, 
  Tooltip, 
  Legend 
} from 'chart.js';

// Register necessary Chart.js components
ChartJS.register(
  LineElement,
  PointElement,
  LineController,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend
);

const StudentInsights = () => {
  const chartRef = useRef(null);
  const progressData = {
    labels: ['June', 'July', 'August', 'September'],
    datasets: [
      {
        label: 'Academic Performance',
        data: [70, 75, 80, 90],
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: true,
        tension: 0.4,
      },
    ],
  };

  useEffect(() => {
    const chartInstance = chartRef.current?.chartInstance;

    return () => {
      if (chartInstance) {
        chartInstance.destroy();
      }
    };
  }, []);

  return (
    <div className="bg-gradient-to-r from-blue-200 via-blue-300 to-blue-400 p-6 rounded-lg shadow-lg w-full md:col-span-2">
      <div className="flex items-center mb-4">
        <FaUserGraduate className="text-blue-600 text-3xl mr-3" />
        <h2 className="text-2xl font-bold">Student Progress</h2>
      </div>

      <div className="bg-white p-4 rounded-md shadow-md">
        <Line ref={chartRef} data={progressData} options={{ maintainAspectRatio: false }} />
      </div>

      <div className="mt-4 bg-gray-100 p-4 rounded-lg">
        <h3 className="font-semibold text-lg">Progress Notes</h3>
        <p>
          Your child has shown consistent improvement in their academic
          performance over the last four months. Keep up the great work!
        </p>
        <button className="mt-2 text-blue-500 hover:underline">
          View Detailed Report
        </button>
      </div>
    </div>
  );
};

export default StudentInsights;
