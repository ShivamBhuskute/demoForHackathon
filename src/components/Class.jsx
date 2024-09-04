// import React from "react";

// function Class({ className, studentsCount, time }) {
//     return (
//         <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-full sm:max-w-sm">
//             <h2 className="text-xl font-semibold mb-2">{className}</h2>
//             <p className="text-gray-500 mb-4">{studentsCount} students</p>

//             {/* Class Time */}
//             <div className="flex items-center space-x-2 mb-4">
//                 <span className="text-sm text-gray-600">Class Time:</span>
//                 <span className="text-sm font-medium text-gray-800">
//                     {time}
//                 </span>
//             </div>

//             {/* Manage Button */}
//             <div className="flex justify-between items-center mt-4">
//                 <button className="text-green-500 hover:text-blue-700 font-semibold py-2 border border-green-600 rounded-md">
//                     Manage Class
//                 </button>
//                 <button className="bg-green-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-green-600">
//                     View Class
//                 </button>
//             </div>
//         </div>
//     );
// }

// export default Class;
import React from "react";

function Class({ className, studentsCount, time, schedule }) {
    return (
        <div className="bg-blue-200 shadow-md rounded-lg p-6 w-full max-w-full sm:max-w-sm">
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
            <div className="flex justify-between items-center mt-4">
                <button className="text-green-500 hover:text-blue-700 font-semibold py-2 border border-green-600 rounded-md">
                    Manage Class
                </button>
                <button className="bg-green-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-green-600">
                    View Class
                </button>
            </div>
        </div>
    );
}

export default Class;
