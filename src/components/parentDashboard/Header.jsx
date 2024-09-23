import React, { useState } from 'react';
import { FaBell } from 'react-icons/fa';

const Header = () => {
  const [profileExpanded, setProfileExpanded] = useState(false);

  const toggleProfile = () => {
    setProfileExpanded(!profileExpanded);
  };

  return (
    <div className="flex flex-col justify-between items-center p-4 bg-white shadow-md">
      {/* Title Section */}
      <div className="w-full text-left mb-4">
        <h1 className="text-2xl sm:text-5xl font-bold">Parent's Dashboard</h1>
      </div>

      <div className="flex justify-between items-center w-full">
        {/* Search Bar Section */}
        <div className="flex items-center w-2/3 sm:w-1/2 bg-white shadow-lg p-1 rounded-lg border border-gray-300 hover:shadow-xl transition-all duration-300">
          <input
            type="text"
            className="flex-grow p-2 text-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md"
            placeholder="Search for something..."
          />
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg transition-all duration-300 ml-2">
            Search
          </button>
        </div>

        {/* Notification Bell at the Right End */}
        <div className="ml-4 ">
          <div className="bg-yellow-400 p-2 sm:p-4 rounded-full shadow-md flex items-center justify-center">
            < FaBell size={24} className="text-white" />
          </div>
        </div>
      </div>

      {/* Profile Section */}
      <div className="relative mt-4 sm:mt-0">
        <div className="flex items-center cursor-pointer" onClick={toggleProfile}>
          {/* Add a profile icon or avatar here if needed */}
        </div>

        {profileExpanded && (
          <div className="absolute right-0 mt-2 p-4 bg-white border rounded shadow-xl w-48 sm:w-60">
            <img
              src="https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?size=338&ext=jpg&ga=GA1.1.2113030492.1720310400&semt=sph"
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-md"
              alt="Profile Avatar"
            />
            <h3 className="font-bold text-sm sm:text-base">John Doe</h3>
            <p className="text-xs sm:text-sm">john.doe@example.com</p>
            <p className="text-xs sm:text-sm">Profile Info or Description...</p>
            <button
              type="button"
              className="text-white rounded-md p-1 mt-1 font-bold bg-red-500 text-xs sm:text-sm"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
