import React, { useState } from 'react';

const Header = () => {
  const [profileExpanded, setProfileExpanded] = useState(false);

  const toggleProfile = () => {
    setProfileExpanded(!profileExpanded);
  };

  return (
    <div className="flex flex-col sm:flex-row justify-between items-center p-4 bg-white shadow-md">
      <div className="mb-2 sm:mb-0">
        <p className='text-2xl sm:text-4xl font-bold'>Parent's Dashboard</p>
      </div>
      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search..."
        className="p-2 rounded-md border border-black w-full sm:w-2/3 mb-2 sm:mb-0"
      />
      {/* Profile Section */}
      <div className="relative">
        <div
          className="flex items-center cursor-pointer"
          onClick={toggleProfile}
        >
          <img
            src="https://via.placeholder.com/40"
            alt="Profile"
            className="rounded-full w-8 h-8 sm:w-10 sm:h-10"
          />
        </div>

        {profileExpanded && (
          <div className="absolute right-0 mt-2 p-4 bg-white border rounded shadow-xl w-48 sm:w-60">
            <img
              src="https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?size=338&ext=jpg&ga=GA1.1.2113030492.1720310400&semt=sph"
              className='w-16 h-16 sm:w-20 sm:h-20 rounded-md'
              alt="Profile Avatar"
            />
            <h3 className="font-bold text-sm sm:text-base">John Doe</h3>
            <p className="text-xs sm:text-sm">john.doe@example.com</p>
            <p className="text-xs sm:text-sm">Profile Info or Description...</p>
            <button type="button" className='text-white rounded-md p-1 mt-1 font-bold bg-red-500 text-xs sm:text-sm'>
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
