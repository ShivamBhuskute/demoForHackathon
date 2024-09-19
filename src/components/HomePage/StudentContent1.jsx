import React from 'react';

const features = [
  {
    title: 'Live Classes',
    description: 'Expert-led live classes, bringing quality education to your doorstep, eliminating the need for external coaching.',
    icon: '📚',
    bgColor: 'bg-blue-100',
    btnColor: 'bg-blue-500',
  },
  {
    title: 'Self Study',
    description: 'Personalize your studies by selecting and exploring specific topics, chapters, and subjects whenever you want.',
    icon: '📘',
    bgColor: 'bg-blue-200',
    btnColor: 'bg-blue-500',
  },
  {
    title: 'Flexi Institute',
    description: 'Set your goal and study on your available days with our personalized course designed exclusively for you.',
    icon: '📅',
    bgColor: 'bg-blue-300',
    btnColor: 'bg-blue-500',
  },
  {
    title: 'Practice & Test',
    description: 'Enhance your exam preparation with unlimited questions of various types and their detailed solutions.',
    icon: '📝',
    bgColor: 'bg-blue-400',
    btnColor: 'bg-blue-500',
  },
];

const FeatureCard = ({ title, description, icon, bgColor, btnColor }) => (
  <div className={`p-6 rounded-lg shadow-md ${bgColor} transform transition-all hover:scale-105`}>
    <div className="text-6xl mb-4">{icon}</div>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-gray-700 mb-4">{description}</p>
    <button className={`px-4 py-2 rounded-lg text-white ${btnColor} hover:bg-blue-700 transition-all`}>Learn More</button>
  </div>
);

function StudentContent1() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center py-12">
      <h1 className="text-4xl font-bold mb-12 text-blue-800">A multilayered learning landscape for exam success</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            title={feature.title}
            description={feature.description}
            icon={feature.icon}
            bgColor={feature.bgColor}
            btnColor={feature.btnColor}
          />
        ))}
      </div>
      <div className="mt-12">
        <img src="/path/to/your/illustration.png" alt="Illustration" className="w-full md:w-1/3 mx-auto animate-bounce" />
      </div>
    </div>
  );
}

export default StudentContent1;
