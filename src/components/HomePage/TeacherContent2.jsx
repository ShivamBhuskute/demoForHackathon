
import React from 'react';

const features = [
  {
    title: 'Classroom Planning',
    description: 'Elevating education through meticulous class scheduling, lecture prep, and engaging pre-reads.',
    icon: '📋',
    bgColor: 'bg-blue-100',
  },
  {
    title: 'Lecture Delivery and Management',
    description: 'Enhance your lectures through curated content, attendance tracking, shared recordings, and more.',
    icon: '🎓',
    bgColor: 'bg-blue-200',
  },
  {
    title: 'Assessment Support',
    description: 'Upgrade your assessments with customized tests, a wide question repository, and automated evaluation.',
    icon: '📝',
    bgColor: 'bg-blue-300',
  },
  {
    title: 'Performance Evaluation',
    description: 'Access comprehensive classroom reports, monitor progress, and stay in the loop with attendance updates.',
    icon: '📈',
    bgColor: 'bg-blue-400',
  },
];

const FeatureCard = ({ title, description, icon, bgColor }) => (
  <div className={`p-6 rounded-lg shadow-md ${bgColor} transform transition-all hover:scale-105`}>
    <div className="text-6xl mb-4">{icon}</div>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-gray-700">{description}</p>
  </div>
);

function TeacherContent2() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center py-12">
      <h1 className="text-4xl font-bold mb-12 text-blue-800">Comprehensive teacher support across all teaching phases</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            title={feature.title}
            description={feature.description}
            icon={feature.icon}
            bgColor={feature.bgColor}
          />
        ))}
      </div>
    </div>
  );
}

export default TeacherContent2;
