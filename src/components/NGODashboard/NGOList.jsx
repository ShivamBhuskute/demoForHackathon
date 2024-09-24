import React from 'react';

const NGOs = [
  { name: 'Educate India', region: 'Delhi', services: 'Scholarships, Mentoring' },
  { name: 'Helping Hands', region: 'Mumbai', services: 'Financial Aid, Counselling' }
  // More NGOs can be fetched from your API
];

const NGOList = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Registered NGOs</h2>
      <div className="space-y-4">
        {NGOs.map((ngo, index) => (
          <div key={index} className="border p-4 rounded-lg">
            <h3 className="text-lg font-semibold">{ngo.name}</h3>
            <p className="text-gray-500">Region: {ngo.region}</p>
            <p>Services: {ngo.services}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NGOList;
