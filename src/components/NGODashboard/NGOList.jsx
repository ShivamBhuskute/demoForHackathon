// import React from 'react';
// import { FaMapMarkerAlt, FaHandsHelping, FaUniversity } from 'react-icons/fa';

// // Example NGO data with images (can be replaced by API data)
// const NGOs = [
//   { 
//     name: 'Educate India', 
//     region: 'Delhi', 
//     services: 'Scholarships, Mentoring', 
//     imageUrl: 'https://via.placeholder.com/100', 
//   },
//   { 
//     name: 'Helping Hands', 
//     region: 'Mumbai', 
//     services: 'Financial Aid, Counselling', 
//     imageUrl: 'https://via.placeholder.com/100', 
//   }
//   // More NGOs can be fetched from your API
// ];

// const NGOList = () => {
//   return (
//     <div className="bg-white p-6 rounded-lg shadow-md">
//       <h2 className="text-2xl font-bold mb-6 text-center">Registered NGOs</h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {NGOs.map((ngo, index) => (
//           <div key={index} className="border p-6 rounded-lg shadow-lg flex flex-col items-center">
//             {/* NGO Logo */}
//             <img 
//               src={ngo.imageUrl} 
//               alt={`${ngo.name} logo`} 
//               className="w-24 h-24 object-cover rounded-full mb-4"
//             />
            
//             {/* NGO Name */}
//             <h3 className="text-lg font-semibold mb-2 text-center">{ngo.name}</h3>
            
//             {/* Region with icon */}
//             <p className="flex items-center text-gray-500 mb-2">
//               <FaMapMarkerAlt className="mr-2 text-red-500" /> 
//               {ngo.region}
//             </p>
            
//             {/* Services with icon */}
//             <p className="flex items-center">
//               <FaHandsHelping className="mr-2 text-green-500" /> 
//               {ngo.services}
//             </p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default NGOList;



import React from 'react';
import { FaMapMarkerAlt, FaHandsHelping, FaUniversity } from 'react-icons/fa';

// Example NGO data with images (can be replaced by API data)
const NGOs = [
  { 
    name: 'Educate India', 
    region: 'Delhi', 
    services: 'Scholarships, Mentoring', 
    imageUrl: 'https://via.placeholder.com/100', 
  },
  { 
    name: 'Helping Hands', 
    region: 'Mumbai', 
    services: 'Financial Aid, Counselling', 
    imageUrl: 'https://via.placeholder.com/100', 
  },

  { 
    name: 'Women Empowerment Network', 
    region: 'Kolkata', 
    services: 'Skill Development, Microfinance', 
    imageUrl: 'https://via.placeholder.com/100', 
  },
  { 
    name: 'Urban Slum Education Initiative', 
    region: 'Hyderabad', 
    services: 'Free Schooling, Nutritional Support', 
    imageUrl: 'https://via.placeholder.com/100', 
  },
  { 
    name: 'Tech for Good', 
    region: 'Pune', 
    services: 'Digital Literacy, Coding Bootcamps', 
    imageUrl: 'https://via.placeholder.com/100', 
  },
  { 
    name: 'Global Giving', 
    region: 'Ahmedabad', 
    services: 'Charitable Donations, Volunteering', 
    imageUrl: 'https://via.placeholder.com/100', 
  }
  // More NGOs can be fetched from your API
];

const NGOList = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Registered NGOs</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {NGOs.map((ngo, index) => (
          <div key={index} className="border p-6 rounded-lg shadow-lg flex flex-col items-center">
            {/* NGO Logo */}
            <img 
              src={ngo.imageUrl} 
              alt={`${ngo.name} logo`} 
              className="w-24 h-24 object-cover rounded-full mb-4"
            />
            
            {/* NGO Name */}
            <h3 className="text-lg font-semibold mb-2 text-center">{ngo.name}</h3>
            
            {/* Region with icon */}
            <p className="flex items-center text-gray-500 mb-2">
              <FaMapMarkerAlt className="mr-2 text-red-500" /> 
              {ngo.region}
            </p>
            
            {/* Services with icon */}
            <p className="flex items-center">
              <FaHandsHelping className="mr-2 text-green-500" /> 
              {ngo.services}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NGOList;

