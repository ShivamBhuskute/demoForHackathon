// import React from "react";

// function Experience({ exp }) {
//     return (
//         <div className="bg-white p-6 rounded-lg shadow-md max-w-sm w-full sm:max-w-md lg:max-w-lg">
//             <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
//                 {/* Profile Image */}
//                 <div className="w-16 h-16 bg-gray-200 rounded-full">
//                     <img
//                         src="https://t3.ftcdn.net/jpg/07/95/95/14/240_F_795951406_h17eywwIo36DU2L8jXtsUcEXqPeScBUq.jpg"
//                         alt="Profile"
//                         className="rounded-full size-16"
//                     />
//                     {/* rounded-full size-16 */}
//                 </div>
//                 {/* Profile Info */}
//                 <div className="flex-1">
//                     <h3 className="text-xl font-semibold">{exp}</h3>
//                     <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3 mt-4">
//                         <button className="bg-gray-100 text-gray-500 px-4 py-2 rounded-md hover:border border-green-500">
//                             Redeem
//                         </button>
//                         <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-white hover:text-green-500 hover:border border-green-500">
//                             Collect Points
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Experience;
// import React from "react";

// function ProfileCard({ exp }) {
//     return (
//         <div className="bg-red-200 p-6 rounded-lg shadow-md w-full max-w-md h-[45vh] mt-5">
//             <div className="flex flex-col items-center space-y-8">
//                 {/* Profile Image */}
//                 <div className="w-24 h-24 bg-gray-200 rounded-full">
//                     <img
//                         src="https://t3.ftcdn.net/jpg/07/95/95/14/240_F_795951406_h17eywwIo36DU2L8jXtsUcEXqPeScBUq.jpg"
//                         alt="Profile"
//                         className="rounded-full size-24"
//                     />
//                 </div>
//                 {/* Profile Info */}
//                 <div className="text-center">
//                     <h3 className="text-xl font-semibold">{exp}</h3>
//                     <div className="flex flex-col space-y-2 mt-4">
//                         <button className="bg-gray-100 text-gray-500 px-4 py-2 rounded-md hover:border border-green-500">
//                             Redeem
//                         </button>
//                         <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-white hover:text-green-500 hover:border border-green-500">
//                             Collect Points
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default ProfileCard;

import React from "react";

function ProfileCard({ exp }) {
    return (
        <div className="bg-sky-200 p-6 rounded-lg shadow-lg w-full max-w-md h-[45vh] mt-5 transform transition-all hover:scale-105 hover:shadow-lg">
            <div className="flex flex-col items-center space-y-4">
                {/* Profile Image */}
                <div className="w-20 h-20 bg-gray-200 rounded-full relative overflow-hidden">
                    <img
                        src="https://t3.ftcdn.net/jpg/07/95/95/14/240_F_795951406_h17eywwIo36DU2L8jXtsUcEXqPeScBUq.jpg"
                        alt="Profile"
                        className="rounded-full w-full h-full object-cover"
                    />
                </div>

                {/* XP Info */}
                <div className="text-center">
                    <h3 className="text-lg font-bold text-gray-800">{exp} XP</h3>
                    <p className="text-xs text-gray-500 mt-1">Experience Points</p>
                </div>

                {/* Buttons (Compact in height) */}
                <div className="flex flex-col space-y-1 w-full px-4">
                    <button className="bg-blue-700 text-white text-sm px-3 py-2 rounded-md hover:bg-gray-300 transition mb-2">
                        Redeem
                    </button>
                    <button className="bg-blue-700 text-white text-sm px-3 py-2 rounded-md hover:bg-white hover:text-green-500 hover:border border-green-500 transition">
                        Collect
                    </button>
                </div>

                {/* Progress Bar (Compact) */}
                <div className="w-full bg-gray-300 rounded-full h-2 mt-2">
                    <div className="bg-blue-700 h-2 rounded-full" style={{ width: '60%' }}></div>
                </div>
                <p className="text-xs text-gray-600">60% to Next Level</p>

                {/* Additional Info (Compact) */}
                <div className="text-xs text-gray-500 text-center">
                    <p>Level: 5</p>
                    <p>Achievements: 12</p>
                </div>
            </div>
        </div>
    );
}

export default ProfileCard;
