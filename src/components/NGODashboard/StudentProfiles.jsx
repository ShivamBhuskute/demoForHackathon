import React from 'react';

const Students = [
  { id: 1, issue: 'Financial struggles', region: 'Maharashtra', intervention: 'Scholarship offered' },
  { id: 2, issue: 'Low attendance', region: 'Delhi', intervention: 'Assigned tutor' }
  // More student profiles can be fetched from your API
];

const StudentProfiles = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">At-Risk Student Profiles</h2>
      <div className="space-y-4">
        {Students.map((student) => (
          <div key={student.id} className="border p-4 rounded-lg">
            <h3 className="text-lg font-semibold">Student {student.id}</h3>
            <p className="text-gray-500">Region: {student.region}</p>
            <p>Issue: {student.issue}</p>
            <p>Intervention: {student.intervention}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentProfiles;
