// import React from "react";

// function Exp({ exp }) {
//     return (
//         <div className="bg-white p-6 rounded-lg shadow-md max-w-sm w-full">
//             <div className="flex items-center space-x-4">
//                 {/* Profile Image */}
//                 <div className="w-16 h-16 bg-gray-200 rounded-full">
//                     {/* Replace with an actual image by adding <img> tag */}
//                 </div>
//                 {/* Profile Info */}
//                 <div>
//                     <h3 className="text-xl font-semibold">{exp}</h3>
//                     <div className="flex space-x-3">
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

// export default Exp;
import React from "react";

function Exp({ exp }) {
    return (
        <div className="bg-white p-6 rounded-lg shadow-md max-w-sm w-full sm:max-w-md lg:max-w-lg">
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
                {/* Profile Image */}
                <div className="w-16 h-16 bg-gray-200 rounded-full">
                    {/* Replace with an actual image by adding <img> tag */}
                </div>
                {/* Profile Info */}
                <div className="flex-1">
                    <h3 className="text-xl font-semibold">{exp}</h3>
                    <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3 mt-4">
                        <button className="bg-gray-100 text-gray-500 px-4 py-2 rounded-md hover:border border-green-500">
                            Redeem
                        </button>
                        <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-white hover:text-green-500 hover:border border-green-500">
                            Collect Points
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Exp;
