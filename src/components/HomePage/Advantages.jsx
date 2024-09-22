import React from 'react'

function Advantages() {

const advantages = [
  {
    title: 'Offline Assessments',
    description: 'Effortlessly create and customize question papers online to distribute them offline.',
    icon: '📄',
  },
  {
    title: 'Classroom Recordings',
    description: 'Record and share classroom lectures to help students catch up on missed lessons or review them.',
    icon: '🎥',
  },
  {
    title: 'Interactive WhiteBoard',
    description: 'Cutting-edge virtual display gives teachers access to a whiteboard with geometrical instruments and more.',
    icon: '🖼️',
  },
  {
    title: 'Power Test and Power Questions',
    description: 'Create unique yet similar questions for each student, making cheating nearly impossible.',
    icon: '💪',
  },
  {
    title: 'Test Templates',
    description: 'Effortlessly create question papers with a huge selection of pre-designed test templates.',
    icon: '📋',
  },
  {
    title: 'Recommendations',
    description: 'Tailored guidance for enhanced teaching strategies.',
    icon: '⭐',
  },
];

const AdvantageCard = ({ title, description, icon }) => (
  <div className="p-8 bg-white rounded-lg shadow-md transform transition-transform hover:scale-105 hover:bg-blue-300">
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

export default Advantages
