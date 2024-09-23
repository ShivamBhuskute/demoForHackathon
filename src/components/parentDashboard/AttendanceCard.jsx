// import React from 'react';

// const AttendanceCard = () => {
//   return (
//     <div className="bg-yellow-200 p-4 rounded shadow w-full h-48 md:col-span-1">
//       <h2 className="text-xl font-bold">Attendance</h2>
//     </div>
//   );
// };

// export default AttendanceCard;

import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const AttendanceCard = () => {
  // Replace these numbers with your dynamic data
  const presentStudents = 80;
  const absentStudents = 20;

  const data = {
    labels: [
      `Present: ${presentStudents}`, 
      `Absent: ${absentStudents}`
    ],
    datasets: [
      {
        label: `Present: ${presentStudents} | Absent: ${absentStudents}`,
        data: [presentStudents, absentStudents], 
        backgroundColor: [
          'rgb(15, 205, 50)', // Parrot green for Present
          'rgb(255, 0, 0)', // Red color for Absent
        ],
        borderColor: [
          'rgba(50, 205, 50, 1)',
          'rgba(255, 99, 132, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
      },
    },
  };

  return (
    <div className="bg-slate-200 p-4 rounded shadow-lg w-full h-full md:col-span-1 ">
      <h2 className="text-xl font-bold mb-4">Attendance</h2>
      <div className="h-56">
        <Doughnut data={data} options={options} />
      </div>
    </div>
  );
};

export default AttendanceCard;
