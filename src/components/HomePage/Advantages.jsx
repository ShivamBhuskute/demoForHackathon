
// import React from 'react'

// function Advantages() {

// const advantages = [
//   {
//     title: 'Digital Classroom',
//     description: 'Videos, simulations, quizzes, key terms, and prerequisites to facilitate interactive learning.',
//     icon: '🖥️',
//   },
//   {
//     title: 'Assignments',
//     description: 'Manage and review assignments with ease, track submissions, and provide feedback.',
//     icon: '📚',
//   },
//   {
//     title: 'Consultancy Services',
//     description: 'Personalized professional consultancy services to aid academic and career growth.',
//     icon: '💼',
//   },
//   {
//     title: 'Handling the Q&A Session',
//     description: 'Effective handling of Q&A sessions to clear student doubts and promote engagement.',
//     icon: '❓',
//   },
//   {
//     title: 'Feedback to Parents',
//     description: 'Report progress and performance directly to parents, keeping them engaged in their child’s learning.',
//     icon: '👪',
//   },
//   {
//     title: 'Study Material',
//     description: 'Add and manage study materials for students to ensure they have access to all learning resources.',
//     icon: '📖',
//   },
// ];

// const AdvantageCard = ({ title, description, icon }) => (
//   <div className="p-8 bg-white rounded-lg shadow-md transform transition-transform hover:scale-105 hover:bg-blue-300">
//     <div className="text-6xl text-blue-500 mb-4">{icon}</div>
//     <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
//     <p className="text-gray-600">{description}</p>
//   </div>
// );

// return (
//     <div className="min-h-screen bg-gradient-to-r from-blue-600 to-blue-200 flex flex-col items-center justify-center py-6">
//       <h1 className="text-4xl font-bold text-gray-800 mb-12">Explore our distinctive teaching advantages</h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl">
//         {advantages.map((advantage, index) => (
//           <AdvantageCard
//             key={index}
//             title={advantage.title}
//             description={advantage.description}
//             icon={advantage.icon}
//           />
//         ))}
//       </div>
//       <button className="mt-8 bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition-all">
//         Start Now
//       </button>
//     </div>
//   );
// }

// export default Advantages;




import React from 'react';

function Advantages() {

  const advantages = [
    {
      title: 'Digital Classroom',
      description: 'Access a vast range of interactive resources such as videos, simulations, quizzes, and key terms. Our digital classroom ensures personalized learning experiences with prerequisites and tailored content to enhance student engagement.',
      icon: '🖥️',
    },
    {
      title: 'Assignments',
      description: 'Effortlessly manage, review, and track student assignments in real-time. Teachers can provide instant feedback, set deadlines, and ensure students stay on top of their coursework for continuous progress.',
      icon: '📚',
    },
    {
      title: 'Consultancy Services',
      description: 'Provide professional academic consultancy services that cater to each student’s unique career and academic needs. Our personalized approach helps students navigate challenges and achieve their career aspirations.',
      icon: '💼',
    },
    {
      title: 'Handling the Q&A Session',
      description: 'Facilitate an interactive and engaging learning environment with structured Q&A sessions. Teachers can easily manage student questions, encourage participation, and clear doubts to ensure thorough understanding.',
      icon: '❓',
    },
    {
      title: 'Feedback to Parents',
      description: 'Maintain strong communication between teachers and parents through regular progress reports. Keep parents informed about their child’s academic achievements, challenges, and areas for improvement with insightful and easy-to-understand feedback.',
      icon: '👪',
    },
    {
      title: 'Study Material',
      description: 'Ensure that students have access to all necessary learning resources through our comprehensive library of study materials. Teachers can upload, organize, and manage essential content, making it available for students anytime, anywhere.',
      icon: '📖',
    },
  ];

  const AdvantageCard = ({ title, description, icon }) => (
    <div className="p-8 bg-white rounded-lg shadow-md transform transition-transform hover:scale-105 hover:bg-blue-300 flex flex-col items-center text-center">
      <div className="text-6xl text-blue-500 mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-600 to-blue-200 flex flex-col items-center justify-center py-6">
      <h1 className="text-4xl font-bold text-gray-800 mb-12">Explore our distinctive teaching advantages</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl">
        {advantages.map((advantage, index) => (
          <AdvantageCard
            key={index}
            title={advantage.title}
            description={advantage.description}
            icon={advantage.icon}
          />
        ))}
      </div>
      <button className="mt-8 bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition-all">
        Start Now
      </button>
    </div>
  );
}

export default Advantages;
