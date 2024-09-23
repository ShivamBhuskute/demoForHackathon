// import React from "react";

// function Class({ className, studentsCount, time, schedule }) {
//     return (
//         <div className="bg-lime-200 shadow-lg rounded-lg p-6 w-full max-w-full sm:max-w-sm">
//             <h2 className="text-xl font-semibold mb-2">{className}</h2>
//             <p className="text-gray-500 mb-4">{studentsCount} students</p>

//             {/* Class Time */}
//             <div className="flex items-center space-x-2 mb-4">
//                 <span className="text-sm text-gray-600">Class Time:</span>
//                 <span className="text-sm font-medium text-gray-800">
//                     {time}
//                 </span>
//             </div>

//             {/* Scrollable Schedule Section */}
//             <div className="h-40 overflow-y-auto border border-black rounded-md p-2 mb-4">
//                 {schedule.map((item, index) => (
//                     <div key={index} className="py-1 hover:bg-slate-400">
//                         {item}
//                     </div>
//                 ))}
//             </div>

//             {/* Manage Button */}
//             <div className="flex justify-between items-center mt-4 gap-4">
//                 <button className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-white hover:text-black">
//                     Manage Class
//                 </button>
//                 <button className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-white hover:text-black">
//                     View Class
//                 </button>
//             </div>
//         </div>
//     );
// }

// export default Class;

// import React from "react";

// // Memoized component to avoid unnecessary re-renders for schedule items
// const ScheduleItem = React.memo(({ item }) => (
//     <div className="py-1 hover:bg-slate-400 transition duration-150">
//         {item}
//     </div>
// ));

// function Class({ className, studentsCount, time, schedule }) {
//     return (
//         <div className="bg-lime-200 shadow-lg rounded-lg p-6 w-full max-w-full sm:max-w-sm lg:max-w-md xl:max-w-lg">
//             {/* Class Title */}
//             <h2 className="text-xl font-semibold mb-2">{className}</h2>

//             {/* Student Count */}
//             <p className="text-gray-500 mb-4">{studentsCount} students</p>

//             {/* Class Time */}
//             <div className="flex items-center space-x-2 mb-4">
//                 <span className="text-sm text-gray-600">Class Time:</span>
//                 <span className="text-sm font-medium text-gray-800">{time}</span>
//             </div>

//             {/* Scrollable Schedule Section */}
//             <div className="h-40 overflow-y-auto border border-black rounded-md p-2 mb-4">
//                 {schedule.map((item, index) => (
//                     <ScheduleItem key={index} item={item} />
//                 ))}
//             </div>

//             {/* Manage and View Buttons */}
//             <div className="flex justify-between items-center mt-4 gap-4">
//                 <button
//                     aria-label="Manage Class"
//                     className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md transition duration-150 hover:bg-white hover:text-black"
//                 >
//                     Manage Class
//                 </button>
//                 <button
//                     aria-label="View Class"
//                     className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md transition duration-150 hover:bg-white hover:text-black"
//                 >
//                     View Class
//                 </button>
//             </div>
//         </div>
//     );
// }

// export default Class;

import React from "react";
import { FaBook, FaClock, FaChalkboardTeacher, FaEye } from "react-icons/fa";

function Class({ className, studentsCount, time, schedule }) {
    return (
        <div className="bg-gradient-to-r from-lime-200 to-green-200 shadow-lg rounded-lg p-6 w-full max-w-full sm:max-w-sm lg:max-w-md xl:max-w-lg transform transition hover:scale-105 hover:shadow-xl">
            {/* Class Title */}
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">{className}</h2>

            {/* Student Count */}
            <p className="text-gray-600 mb-2 text-center">{studentsCount} students</p>

            {/* Class Time */}
            <div className="flex items-center justify-center space-x-2 mb-4">
                <FaClock className="text-gray-600" />
                <span className="text-md text-gray-600">Class Time:</span>
                <span className="text-md font-medium text-gray-900">{time}</span>
            </div>

            {/* Scrollable Table Section */}
            <div className="overflow-y-auto border border-gray-300 rounded-md mb-4 bg-white shadow-inner max-h-40">
                <table className="min-w-full text-left text-sm">
                    <thead>
                        <tr className="bg-gray-100 text-gray-800">
                            <th className="p-2">Class</th>
                            <th className="p-2">Subject</th>
                        </tr>
                    </thead>
                    <tbody>
                        {schedule.map((item, index) => (
                            <tr
                                key={index}
                                className="border-t border-gray-200 hover:bg-gray-100 transition duration-150"
                            >
                                <td className="p-2 flex items-center gap-2">
                                    <FaBook className="text-blue-500" />
                                    {`Class ${index + 1}`}
                                </td>
                                <td className="p-2">{item}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Manage and View Buttons */}
            <div className="flex justify-between items-center mt-4 gap-4">
                <button
                    aria-label="Manage Class"
                    className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md flex items-center justify-center gap-2 hover:bg-white hover:text-blue-500 hover:border-blue-500 border transition duration-150"
                >
                    <FaChalkboardTeacher /> Manage Class
                </button>
                <button
                    aria-label="View Class"
                    className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md flex items-center justify-center gap-2 hover:bg-white hover:text-blue-500 hover:border-blue-500 border transition duration-150"
                >
                    <FaEye /> View Class
                </button>
            </div>
        </div>
    );
}

export default Class;
