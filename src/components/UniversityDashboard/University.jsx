// import React from "react";
// import Sidebar from "../Sidebar";

// function University() {
//     return (
//         <div className="min-h-screen bg-blue-100 flex overflow-hidden">
//             {/* Sidebar */}
//             <Sidebar />

//             {/* Main Content */}
//             <div className="flex-1 p-5">
//                 {/* Header */}
//                 <h1 className="text-2xl font-bold mb-8">
//                     University's Dashboard
//                 </h1>
//                 <div className="mb-6 text-left grid grid-cols-2 sm:grid-cols-4 gap-y-3 gap-x-3">
//                     <div className="flex justify-center">
//                         <button className="px-8 py-2 bg-pink-200 text-gray-800 rounded-full text cursor-pointer w-full">
//                             Updates
//                         </button>
//                     </div>
//                     <div className="flex justify-center space-x-4">
//                         <button className="px-9 py-2 bg-pink-200 text-gray-800 rounded-full w-full">
//                             Facilities
//                         </button>
//                     </div>
//                     <div className="flex justify-center space-x-4">
//                         <button className="px-9 py-2 bg-pink-200 text-gray-800 rounded-full w-full">
//                             Alumni
//                         </button>
//                     </div>
//                     <div className="flex justify-center space-x-4">
//                         <button className="px-9 py-2 bg-pink-200 text-gray-800 rounded-full w-full">
//                             Complaint
//                         </button>
//                     </div>
//                 </div>

//                 {/* Grid Content */}
//                 <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
//                     <div className="col-span-1">
//                     <div className="flex flex-col justify-start p-6 bg-yellow-100 rounded-lg text-center shadow-lg pb-10 cursor-pointer">
//                         <span className="mb-10">Student</span>
//                     </div>
//                     <div className="p-6 bg-yellow-100 rounded-lg text-center shadow-lg cursor-pointer">
//                         Faculty
//                     </div>
//                     <div className="flex flex-col justify-start p-6 bg-blue-200 rounded-lg text-center shadow-lg pb-10 cursor-pointer">
//                         <span className="mb-14">Courses</span>
//                     </div>
//                     <div className="p-6 bg-blue-300 rounded-lg text-center shadow-lg cursor-pointer">
//                         Exam
//                     </div>
//                     </div>
//                     <div className="col-span-2 p-10 bg-yellow-100 rounded-xl text-center shadow-lg flex flex-col justify-start cursor-pointer">
//                         <span className="">Faculty Training</span>
//                     </div>
//                     <div className="col-span-2 p-20 bg-blue-400 rounded-xl text-center shadow-lg flex flex-col justify-star cursor-pointert">
//                         <span className="mb-10">Notice</span>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default University;
import React from "react";
import Sidebar from "../Sidebar";
import AcademicCalendarCard from "./AcademicCalendarCard";
import Notices from "./Notices";
function University() {
    return (
        <div className="min-h-screen bg-blue-100 flex overflow-hidden">
            {/* Sidebar */}
            <Sidebar />

            {/* Main Content */}
            <div className="flex-1 p-5">
                {/* Header */}
                <div className="mb-6 flex flex-col lg:flex-row justify-between items-center">
                    <h1 className="text-3xl font-bold mb-4 lg:mb-0">
                        University Name
                    </h1>
                    <input
                        type="search"
                        placeholder="search"
                        className="px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring w-full lg:w-auto"
                    />
                </div>

                {/* Buttons Section */}
                <div className="mb-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
                    <button className="px-8 py-2 bg-pink-200 text-gray-800 rounded-full w-full">
                        Updates
                    </button>
                    <button className="px-8 py-2 bg-pink-200 text-gray-800 rounded-full w-full">
                        Facilities
                    </button>
                    <button className="px-8 py-2 bg-pink-200 text-gray-800 rounded-full w-full">
                        Alumni
                    </button>
                    <button className="px-8 py-2 bg-pink-200 text-gray-800 rounded-full w-full">
                        Complaint
                    </button>
                </div>

                {/* Grid Content */}
                <div className="mb-10 grid grid-cols-2 sm:grid-cols-3 gap-5 gap-y-5">
                    {/* Left Column */}
                    <div className="space-y-3 sm:space-y-5">
                        <div className="p-6 sm:p-20 bg-blue-200 rounded-lg text-center shadow-lg cursor-pointer gap-y-8">
                            Student
                        </div>
                        <div className="p-6 sm:p-20 bg-blue-300 rounded-lg text-center shadow-lg cursor-pointer">
                            Faculty
                        </div>
                    </div>
                    <div className="space-y-3 sm:space-y-5">
                        <div className="p-6 sm:p-20 bg-blue-200 rounded-lg text-center shadow-lg cursor-pointer">
                            Courses
                        </div>
                        <div className="p-6 sm:p-20 bg-blue-300 rounded-lg text-center shadow-lg cursor-pointer">
                            Exam
                        </div>
                    </div>

                    {/* Middle and Right Columns for Large Screens */}
                    <div className="col-span-2 sm:col-span-1 bg-yellow-100 rounded-xl text-center shadow-lg cursor-pointer h-80 sm:h-full">
                        <AcademicCalendarCard/>
                    </div>
                </div>

                <div className="mb-10 grid grid-cols-2 sm:grid-cols-2 gap-5 gap-y-5">
                    {/* Left Column */}
                    <div className="space-y-3 sm:space-y-5">
                        <div className="p-6 sm:p-20 bg-blue-200 rounded-lg text-center shadow-lg cursor-pointer gap-y-8">
                            Faculty tracking 
                        </div>
                        
                    </div>
                    

                    {/* Middle and Right Columns for Large Screens */}
                    <div className="col-span-2 sm:col-span-1 bg-yellow-100 rounded-xl text-center shadow-lg cursor-pointer h-80 sm:h-full">
                        <Notices/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default University;