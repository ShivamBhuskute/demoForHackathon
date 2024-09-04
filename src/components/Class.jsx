import React from "react";

function Class({ className, studentsCount, time, schedule }) {
    return (
        <div className="bg-yellow-200 shadow-md rounded-lg p-6 w-full max-w-full sm:max-w-sm">
            <h2 className="text-xl font-semibold mb-2">{className}</h2>
            <p className="text-gray-500 mb-4">{studentsCount} students</p>

            {/* Class Time */}
            <div className="flex items-center space-x-2 mb-4">
                <span className="text-sm text-gray-600">Class Time:</span>
                <span className="text-sm font-medium text-gray-800">
                    {time}
                </span>
            </div>

            {/* Scrollable Schedule Section */}
            <div className="h-40 overflow-y-auto border border-black rounded-md p-2 mb-4">
                {schedule.map((item, index) => (
                    <div key={index} className="py-1 hover:bg-slate-400">
                        {item}
                    </div>
                ))}
            </div>

            {/* Manage Button */}
            <div className="flex justify-between items-center mt-4 gap-4">
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-white hover:text-black">
                    Manage Class
                </button>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-white hover:text-black">
                    View Class
                </button>
            </div>
        </div>
    );
}

export default Class;
