// import React from 'react';

// const HomeworkCard = () => {
//   return (
//     <div className="bg-red-200 p-4 rounded shadow w-full h-48 md:col-span-2">
//       <h2 className="text-xl font-bold">Home-Work</h2>
//     </div>
//   );
// };

// export default HomeworkCard;
import React from 'react';

const homeworkList = [
  {
    subject: 'Mathematics',
    dueDate: '10th September 2024',
    description: 'Complete exercises 5 to 10 on page 34.',
    status: 'Pending',
  },
  {
    subject: 'Science',
    dueDate: '12th September 2024',
    description: 'Read chapter 4 and summarize the key points.',
    status: 'Completed',
  },
  {
    subject: 'History',
    dueDate: '15th September 2024',
    description: 'Write an essay on World War II.',
    status: 'Pending',
  },
  // Add more homework entries as needed
  {
    subject: 'English',
    dueDate: '17th September 2024',
    description: 'Analyze the themes in the novel assigned.',
    status: 'Pending',
  },
  {
    subject: 'Physics',
    dueDate: '19th September 2024',
    description: 'Solve the problems from chapter 3.',
    status: 'Pending',
  },
];

const HomeworkCard = () => {
  return (
    <div className="bg-red-200 p-4 rounded shadow w-full h-full md:col-span-2">
      <h2 className="text-xl font-bold mb-4">Home-Work</h2>
      <div className="overflow-y-auto h-60 space-y-4 custom-scrollbar rounded-md">
        {homeworkList.map((homework, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-md">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold text-gray-800">{homework.subject}</h3>
              <span className={`text-sm px-2 py-1 rounded-full ${homework.status === 'Completed' ? 'bg-green-600 text-white' : 'bg-red-600 text-white'}`}>
                {homework.status}
              </span>
            </div>
            <p className="text-gray-600 mt-2">{homework.description}</p>
            <p className="text-sm text-gray-500 mt-1">Due: {homework.dueDate}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default HomeworkCard;
