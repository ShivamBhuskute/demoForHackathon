// import React from "react";

// function CourseCard({ title, progress, lessons, assignments, students }) {
//     return (
//         <div className="bg-slate-100 p-6 rounded-lg shadow-md flex items-start justify-between max-w-80 sm:max-w-sm w-full">
//             {/* Left Section - Course Info */}
//             <div className="flex items-center">
//                 {/* Progress Circle */}
//                 <div className="relative w-16 h-16 mr-4">
//                     <svg
//                         className="absolute top-0 left-0 w-full h-full"
//                         viewBox="0 0 36 36"
//                     >
//                         <path
//                             className="text-gray-300"
//                             strokeDasharray="100, 100"
//                             d="M18 2.0845
//                 a 15.9155 15.9155 0 0 1 0 31.831
//                 a 15.9155 15.9155 0 0 1 0 -31.831"
//                             strokeWidth="2"
//                             fill="none"
//                         />
//                         <path
//                             className="text-green-500"
//                             strokeDasharray={`${progress}, 100`}
//                             d="M18 2.0845
//                 a 15.9155 15.9155 0 0 1 0 31.831
//                 a 15.9155 15.9155 0 0 1 0 -31.831"
//                             strokeWidth="2"
//                             fill="none"
//                         />
//                     </svg>
//                     <div className="absolute inset-0 flex items-center justify-center">
//                         <span className="text-lg font-bold text-green-500">
//                             {progress}%
//                         </span>
//                     </div>
//                 </div>

//                 {/* Course Info Text */}
//                 <div>
//                     <h3 className="text-lg font-semibold">{title}</h3>
//                     <p className="text-sm text-gray-500">
//                         {lessons} lessons · {assignments} assignments ·{" "}
//                         {students} students
//                     </p>
//                 </div>
//             </div>

//             {/* Right Section - Buttons */}
//             <div className="flex space-x-3">
//                 <button className="bg-gray-100 text-gray-500 px-4 py-2 rounded-md hover:border border-green-500">
//                     Skip
//                 </button>
//                 <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-white hover:text-green-500 hover:border border-green-500">
//                     Continue
//                 </button>
//             </div>
//         </div>
//     );
// }

// export default CourseCard;
import React from "react";

function CourseCard({ title, progress, lessons, assignments, students }) {
    return (
        <div className="bg-slate-100 p-6 rounded-lg shadow-md flex flex-col sm:flex-row items-start justify-between w-full max-w-full sm:max-w-sm">
            {/* Left Section - Course Info */}
            <div className="flex items-center w-full sm:w-auto mb-4 sm:mb-0">
                {/* Progress Circle */}
                <div className="relative w-16 h-16 mr-4">
                    <svg
                        className="absolute top-0 left-0 w-full h-full"
                        viewBox="0 0 36 36"
                    >
                        <path
                            className="text-gray-300"
                            strokeDasharray="100, 100"
                            d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
                            strokeWidth="2"
                            fill="none"
                        />
                        <path
                            className="text-green-500"
                            strokeDasharray={`${progress}, 100`}
                            d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
                            strokeWidth="2"
                            fill="none"
                        />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-lg font-bold text-green-500">
                            {progress}%
                        </span>
                    </div>
                </div>

                {/* Course Info Text */}
                <div>
                    <h3 className="text-lg font-semibold">{title}</h3>
                    <p className="text-sm text-gray-500">
                        {lessons} lessons · {assignments} assignments ·{" "}
                        {students} students
                    </p>
                </div>
            </div>

            {/* Right Section - Buttons */}
            <div className="flex space-x-3 w-full sm:w-auto justify-end">
                <button className="bg-gray-100 text-gray-500 px-4 py-2 rounded-md hover:border border-green-500">
                    Skip
                </button>
                <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-white hover:text-green-500 hover:border border-green-500">
                    Continue
                </button>
            </div>
        </div>
    );
}

export default CourseCard;
