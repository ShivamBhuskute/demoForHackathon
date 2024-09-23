import React from 'react';
import { FaChalkboardTeacher, FaMedkit, FaChartLine, FaPhoneAlt, FaLaptop, FaHeart } from 'react-icons/fa';

// Array of features with updated icons from react-icons
const features = [
  {
    title: 'Virtual Tutoring & Mentoring',
    description: 'Provides on-demand academic support and guidance, helping students excel in their studies with expert mentors.',
    icon: <FaChalkboardTeacher size={50} />,
    bgColor: 'bg-blue-100',
    btnColor: 'bg-blue-500',
  },
  {
    title: 'Mental Health Focus',
    description: 'Yoga, meditation, and counseling sessions are available to reduce stress, boost focus, and enhance student well-being.',
    icon: <FaMedkit size={50} />,
    bgColor: 'bg-blue-200',
    btnColor: 'bg-blue-500',
  },
  {
    title: 'Data-Driven Insights',
    description: 'Real-time insights that help educators make informed decisions and improve student outcomes through data analytics.',
    icon: <FaChartLine size={50} />,
    bgColor: 'bg-blue-300',
    btnColor: 'bg-blue-500',
  },
  {
    title: 'Instant Helpline Support',
    description: 'Rapid response helplines provide immediate assistance to students in need, especially those at risk of dropping out.',
    icon: <FaPhoneAlt size={50} />,
    bgColor: 'bg-blue-400',
    btnColor: 'bg-blue-500',
  },
  {
    title: 'Blended Learning Model',
    description: 'A combination of online and offline education methods provides a flexible and accessible learning environment for students.',
    icon: <FaLaptop size={50} />,
    bgColor: 'bg-blue-500',
    btnColor: 'bg-blue-600',
  },
  {
    title: 'Social-Emotional Learning (SEL)',
    description: 'Enhances emotional resilience, well-being, and interpersonal skills through activities designed to improve social-emotional learning.',
    icon: <FaHeart size={50} />,
    bgColor: 'bg-blue-600',
    btnColor: 'bg-blue-700',
  },
];

// Reusable feature card component
const FeatureCard = ({ title, description, icon, bgColor, btnColor }) => (
  <div className={`p-6 rounded-lg shadow-md ${bgColor} transform transition-all hover:scale-105`}>
    <div className="mb-4">{icon}</div>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-gray-700 mb-4">{description}</p>
    <button className={`px-4 py-2 rounded-lg text-white ${btnColor} hover:bg-blue-700 transition-all`}>Learn More</button>
  </div>
);

function StudentContent1() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center py-12">
      <h1 className="text-4xl font-bold mb-12 text-blue-800">A Comprehensive Approach to Learning and Well-being</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl">
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
    </div>
  );
}

export default StudentContent1;
