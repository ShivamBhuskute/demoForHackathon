// import React from 'react';

// const ExamCard = () => {
//     return (
//         <div className="bg-yellow-200 p-4 rounded shadow w-full h-full md:col-span-1">
//             <h2 className="text-xl font-bold">Exam</h2>
//         </div>
//     );
// };

// export default ExamCard;
import React from 'react';
import { FaBook, FaCheckCircle, FaClock } from 'react-icons/fa';

const exams = [
  {
    subject: 'Mathematics',
    date: '20th September 2024',
    description: 'Algebra and Geometry',
    status: 'Completed',
  },
  {
    subject: 'Science',
    date: '22nd September 2024',
    description: 'Physics - Mechanics',
    status: 'Upcoming',
  },
  {
    subject: 'History',
    date: '25th September 2024',
    description: 'World War II',
    status: 'Completed',
  },
  {
    subject: 'English',
    date: '28th September 2024',
    description: 'Literature and Comprehension',
    status: 'Upcoming',
  },
  {
    subject: 'Geography',
    date: '30th September 2024',
    description: 'Climatic Regions',
    status: 'Upcoming',
  },
];

const ExamCard = () => {
  const completedExams = exams.filter(exam => exam.status === 'Completed').length;
  const totalExams = exams.length;

  return (
    <div className="bg-yellow-200 p-4 rounded shadow-lg w-full h-full md:col-span-1 flex flex-col">
      <h2 className="text-xl font-bold mb-4">Exams</h2>
      
      {/* Progress Bar */}
      <div className="mb-4">
        <div className="text-sm text-gray-700 mb-1">Exams Completed: {completedExams}/{totalExams}</div>
        <div className="w-full bg-gray-300 rounded-full h-2.5">
          <div
            className="bg-blue-500 h-2.5 rounded-full"
            style={{ width: `${(completedExams / totalExams) * 100}%` }}
          ></div>
        </div>
      </div>
      
      {/* Scrollable Exam List */}
      <div className="overflow-y-auto h-60 space-y-4 custom-scrollbar">
        {exams.map((exam, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-lg shadow-md flex items-start space-x-4"
          >
            <div className="text-2xl">
              {exam.status === 'Completed' ? (
                <FaCheckCircle className="text-green-500" />
              ) : (
                <FaClock className="text-yellow-500" />
              )}
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800">{exam.subject}</h3>
              <p className="text-sm text-gray-600">{exam.description}</p>
              <p className="text-sm text-gray-500 mt-1">Date: {exam.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExamCard;
