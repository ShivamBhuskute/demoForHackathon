import React from 'react';
import NGORegistration from './NGORegistration';
import NGOList from './NGOList.jsx';
import StudentProfiles from './StudentProfiles';

const NGODashboard = () => {
    return (
        <div className="bg-blue-50 min-h-screen p-6">
            <div className="flex flex-col w-full sm:w-2/3">
                <h1 className="text-3xl sm:text-5xl font-bold mb-2">NGO's Dashboard</h1>
                <div className="bg-white mt-2 shadow-lg p-1 flex items-center rounded-lg border border-gray-300 hover:shadow-xl transition-all duration-300">
                    <input
                        type="text"
                        className="flex-grow p-1 text-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md"
                        placeholder="Search for something..."
                    />
                    <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition-all duration-300">
                        Search
                    </button>
                </div>
            </div>            <div className="mt-8 space-y-8">
                <NGORegistration />
                <NGOList />
                <StudentProfiles />
            </div>
        </div>
    );
};

export default NGODashboard;
