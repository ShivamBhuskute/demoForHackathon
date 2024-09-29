import React from 'react';
import { FaMapMarkerAlt, FaExclamationCircle, FaHandHoldingHeart } from 'react-icons/fa';

// Example student data (can be replaced by API data)
const Students = [
  { 
    id: 1, 
    issue: 'Financial struggles', 
    region: 'Maharashtra', 
    intervention: 'Scholarship offered', 
    imageUrl: 'https://via.placeholder.com/100' 
  },
  { 
    id: 2, 
    issue: 'Low attendance', 
    region: 'Delhi', 
    intervention: 'Assigned tutor', 
    imageUrl: 'https://via.placeholder.com/100' 
  },
  { 
    id: 3, 
    issue: 'Mental health challenges', 
    region: 'Karnataka', 
    intervention: 'Counseling sessions arranged', 
    imageUrl: 'https://via.placeholder.com/100' 
  },
  { 
    id: 4, 
    issue: 'Bullying at school', 
    region: 'West Bengal', 
    intervention: 'Transferred to a safer environment', 
    imageUrl: 'https://via.placeholder.com/100' 
  },
  { 
    id: 5, 
    issue: 'Language barriers', 
    region: 'Uttar Pradesh', 
    intervention: 'Enrolled in language tutoring', 
    imageUrl: 'https://via.placeholder.com/100' 
  },
  { 
    id: 6, 
    issue: 'Family issues affecting attendance', 
    region: 'Kerala', 
    intervention: 'Family counseling and support', 
    imageUrl: 'https://via.placeholder.com/100' 
  },
 
  // More student profiles can be fetched from your API
];

const StudentProfiles = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">At-Risk Student Profiles</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {Students.map((student) => (
          <div key={student.id} className="border p-6 rounded-lg shadow-lg flex flex-col items-center">
            {/* Student Image */}
            <img 
              src={student.imageUrl} 
              alt={`Student ${student.id}`} 
              className="w-24 h-24 object-cover rounded-full mb-4"
            />
            
            {/* Student ID */}
            <h3 className="text-lg font-semibold mb-2 text-center">Student {student.id}</h3>
            
            {/* Region with icon */}
            <p className="flex items-center text-gray-500 mb-2">
              <FaMapMarkerAlt className="mr-2 text-blue-500" /> 
              {student.region}
            </p>
            
            {/* Issue with icon */}
            <p className="flex items-center text-red-600 mb-2">
              <FaExclamationCircle className="mr-2" /> 
              <strong>Issue:</strong> {student.issue}
            </p>
            
            {/* Intervention with icon */}
            <p className="flex items-center text-green-600">
              <FaHandHoldingHeart className="mr-2" /> 
              <strong>Intervention:</strong> {student.intervention}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentProfiles;
