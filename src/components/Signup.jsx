// import React from "react";
// import { Link, useNavigate } from "react-router-dom";

// function Signup() {
//     const navigate = useNavigate();

//     const handleSubmit = (event) => {
//         event.preventDefault();
//         navigate("/student");
//     };

//     return (
//         <div className="flex items-center justify-center min-h-screen bg-gray-100">
//             <div className="mx-auto my-10 max-w-lg bg-white rounded-xl p-10 border border-black shadow-xl">
//                 <h2 className="text-center text-2xl font-bold leading-tight">
//                     Sign up to create an account
//                 </h2>
//                 <p className="mt-2 text-center text-base text-black/60">
//                     Already have an account?&nbsp;
//                     <Link
//                         to="/login"
//                         className="font-medium text-blue-600 transition-all duration-200 hover:underline"
//                     >
//                         Sign In
//                     </Link>
//                 </p>

//                 <form onSubmit={handleSubmit} className="mt-6 space-y-5">
//                     <div>
//                         <label className="block text-sm font-medium text-gray-700">
//                             Name
//                         </label>
//                         <input
//                             type="text"
//                             required
//                             className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
//                         />
//                     </div>
//                     <div>
//                         <label className="block text-sm font-medium text-gray-700">
//                             Password
//                         </label>
//                         <input
//                             type="password"
//                             required
//                             className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
//                         />
//                     </div>
//                     <button
//                         type="submit"
//                         className="w-full py-2 px-4 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-700 transition duration-200"
//                     >
//                         Sign Up
//                     </button>
//                 </form>
//             </div>
//         </div>
//     );
// }

// export default Signup;
import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

function Signup() {
    const navigate = useNavigate();
    const { userType } = useParams(); // Get the user type from URL parameters

    const handleSubmit = (event) => {
        event.preventDefault();
        // Navigate to the respective dashboard based on userType
        switch (userType) {
            case "parent":
                navigate("/parent");
                break;
            case "student":
                navigate("/StudentDash");
                break;
            case "teacher":
                navigate("/teacher");
                break;
            case "university":
                navigate("/university");
                break;
            
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="mx-auto my-10 max-w-lg bg-white rounded-xl p-10 border border-black shadow-xl">
                <h2 className="text-center text-2xl font-bold leading-tight">
                    Sign up to create an account
                </h2>
                <p className="mt-2 text-center text-base text-black/60">
                    Already have an account?&nbsp;
                    <Link
                        to="/login"
                        className="font-medium text-blue-600 transition-all duration-200 hover:underline"
                    >
                        Sign In
                    </Link>
                </p>

                <form onSubmit={handleSubmit} className="mt-6 space-y-5">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Name
                        </label>
                        <input
                            type="text"
                            required
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Password
                        </label>
                        <input
                            type="password"
                            required
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full py-2 px-4 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-700 transition duration-200"
                    >
                        Sign Up
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Signup;
