// import React, { useState, useEffect } from "react";
// import Sidebar from "../Sidebar";
// import CourseCard from "../CourseCard";
// import Chart from "../Chart";
// import ProfileCard from "../ProfileCard";
// import Experience from "../Experience";
// import Todo from "../Consult";
// import Class from "../Class";
// import ChatWidget from "../ChatWidget";
// import AttendanceCard from "../parentDashboard/AttendanceCard";
// import { FaSmile, FaBrain, FaClipboardList, FaBell } from "react-icons/fa";

// function Student() {
//   const [isSmallScreen, setIsSmallScreen] = useState(false);

//   useEffect(() => {
//     const checkScreenSize = () => {
//       setIsSmallScreen(window.innerWidth < 640); // Tailwind's 'sm' breakpoint is 640px
//     };

//     // Initial check
//     checkScreenSize();

//     // Event listener for window resize
//     window.addEventListener("resize", checkScreenSize);

//     // Clean up event listener
//     return () => {
//       window.removeEventListener("resize", checkScreenSize);
//     };
//   }, []);

//   return (
//     <div className="flex min-h-screen overflow-hidden flex-auto sm:flex-row bg-slate-100">
//       {/* Sidebar */}
//       <Sidebar />
//       <div className="flex-1">
//         <div className="flex flex-col lg:flex-row justify-between items-center">
//           <div>
//             <h1 className="text-3xl font-bold ml-6 mt-2">Hello, Student 👋</h1>
//             <p className="text-gray-600 ml-6">
//               Nice to have you back, what an exciting day!
//             </p>
//           </div>


//           {/* Search Bar Section */}
//           <div className="flex items-center w-full bg-white shadow-lg p-1 rounded-lg border border-gray-300 hover:shadow-xl transition-all duration-300">
//             <input
//               type="text"
//               className="flex-grow p-1 text-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md"
//               placeholder="Search for something..."
//             />
//             <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition-all duration-300 ml-2">
//               Search
//             </button>
//           </div>
//           {/* Notification Bell at the Right End */}
//           <div className="ml-4 ">
//             <div className="bg-yellow-400 p-2 sm:p-4 rounded-full shadow-md flex items-center justify-center">
//               < FaBell size={24} className="text-white" />
//             </div>
//           </div>
//         </div>

//         {/* Main Content */}
//         <div className="grid grid-cols-1 sm:grid-cols-12 p-6 w-full space-y-5 sm:space-x-5 sm:space-y-0">
//           {/* Left Section (4/12) */}
//           <div className="col-span-4 flex flex-col bg-blue-200 rounded-md p-4">
//             <div className="flex flex-wrap justify-center gap-6">
//               {/* Take Test Button with Description */}
//               <div className="bg-gradient-to-r from-green-300 to-green-500 rounded-lg shadow-lg p-6 sm:w-96 w-full mt-5 text-center cursor-pointer transform hover:scale-105 transition-all duration-300">
//                 <h2 className="text-lg font-bold flex items-center justify-center gap-2">
//                   <FaClipboardList />
//                   Take Test
//                 </h2>
//                 <p className="text-sm mt-2">
//                   Ready to check your knowledge? Click the button to start a test and track your progress! Remember, testing yourself regularly helps you understand concepts better and boosts your confidence in the subject.
//                 </p>
//               </div>
//             </div>

//             {/* Course Section */}
//             <section className="grid grid-cols-1 gap-6 mt-6 sm:">
//               <CourseCard
//                 title="Biology"
//                 progress={79}
//                 lessons={21}
//                 assignments={5}
//               />
//               <CourseCard
//                 title="Physics"
//                 progress={64}
//                 lessons={10}
//                 assignments={2}
//               />
//             </section>

//             {/* Class Schedule */}
//             <div className=" mt-10">
//               <Class
//                 className="Schedule:-"
//                 studentsCount={30}
//                 time="10:00 AM - 11:00 AM"
//                 schedule={[
//                   "Class 1: Introduction",
//                   "Class 2: Algebra",
//                   "Class 3: Geometry",
//                   "Class 4: Calculus",
//                   "Class 6: Biology",
//                   "Class 7: Physics",
//                   "Class 8: Mathematics",
//                 ]}
//               />
//             </div>
//           </div>

//           {/* Right Section (8/12) */}
//           <div className="col-span-8 flex flex-col bg-blue-200 rounded-lg">
//             {/* Top Section with Profile and Cards */}
//             <div className="flex flex-col sm:flex-row space-y-6 sm:space-y-0 sm:space-x-4 p-4">
//               {/* Profile Card */}
//               <div className="w-full sm:w-1/3 mt-5 hover:shadow-xl transform hover:scale-105 transition-all duration-300">
//                 <AttendanceCard />
//               </div>
//               <div className="w-full sm:w-1/3 mt-5 hover:shadow-xl transform hover:scale-105 transition-all duration-300">
//                 <Experience exp={"2400XP"} />
//               </div>
//               <div className="w-full sm:w-1/3 mt-5 hover:shadow-xl transform hover:scale-105 transition-all duration-300">
//                 <Todo />
//               </div>
//             </div>

//             {/* Calm Corner and Concentration Challenge */}
//             <div className="space-y-4 p-4">
//               {/* Calm Corner */}
//               <div className="bg-yellow-100 rounded-lg shadow-lg p-6 w-full text-center cursor-pointer transform hover:scale-105 transition-all duration-300">
//                 <h2 className="text-lg font-bold flex items-center justify-center gap-2">
//                   <FaSmile className="text-yellow-500" />
//                   Calm Corner
//                 </h2>
//                 <p className="text-sm mt-2">
//                   Take a moment to relax, breathe deeply, and clear your mind. A calm mind is a productive mind!
//                 </p>
//               </div>

//               {/* Concentration Challenge */}
//               <div className="bg-green-100 rounded-lg shadow-lg p-6 w-full text-center cursor-pointer transform hover:scale-105 transition-all duration-300">
//                 <h2 className="text-lg font-bold flex items-center justify-center gap-2">
//                   <FaBrain className="text-green-600" />
//                   Concentration Challenge
//                 </h2>
//                 <p className="text-sm mt-2">
//                   Sharpen your focus with daily challenges. Let's see how long you can maintain full concentration on your tasks!
//                 </p>
//               </div>
//             </div>

//             {/* Full-width Chart Section */}
//             <div className="p-4">
//               {!isSmallScreen && (
//                 <div className="sm:mt-4 sm:shadow-lg rounded-lg bg-white p-4 w-full">
//                   <h1 className="ml-10 font-bold text-2xl">Chart:- </h1>
//                   <Chart />
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>

//         <ChatWidget />
//       </div>
//     </div>
//   );
// }

// export default Student;










import React, { useState, useEffect } from "react";
import Sidebar from "../Sidebar";
import CourseCard from "../CourseCard";
import Chart from "../Chart";
import ProfileCard from "../ProfileCard";
import Experience from "../Experience";
import Todo from "../Consult";
import Class from "../Class";
import ChatWidget from "../ChatWidget";
import AttendanceCard from "../parentDashboard/AttendanceCard";
import { FaSmile, FaBrain, FaClipboardList, FaBell } from "react-icons/fa";
import StudentInsights from "./StudentInsights";

function Student() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 640); // Tailwind's 'sm' breakpoint is 640px
    };

    // Initial check
    checkScreenSize();

    // Event listener for window resize
    window.addEventListener("resize", checkScreenSize);

    // Clean up event listener
    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  return (
    <div className="flex min-h-screen overflow-hidden flex-auto sm:flex-row bg-slate-100">
      {/* Sidebar */}
      <Sidebar />
      <div className="flex-1">
        <div className="flex flex-col justify-between items-start px-6 py-4">
          <div>
            <h1 className="text-3xl font-bold">Hello, Student 👋</h1>
            <p className="text-gray-600">
              Nice to have you back, what an exciting day!
            </p>
          </div>

<<<<<<< HEAD
          {/* Search Bar and Notification Bell Section */}
          <div className="flex items-center justify-between w-full mt-4">
            <div className="flex items-center w-full bg-white shadow-lg p-1 rounded-lg border border-gray-300 hover:shadow-xl transition-all duration-300">
              <input
                type="text"
                className="flex-grow p-1 text-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md"
                placeholder="Search for something..."
              />
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition-all duration-300 ml-2">
                Search
              </button>
=======
                        <div className=" mt-10">
                            <Class
                                className="Schedule:-"
                                studentsCount={30}
                                time="10:00 AM - 11:00 AM"
                                schedule={[
                                    "Class 1: Introduction",
                                    "Class 2: Algebra",
                                    "Class 3: Geometry",
                                    "Class 4: Calculus",
                                    "Class 6: Biology",
                                    "Class 7: Physics",
                                    "Class 8: Mathematics",
                                ]}
                            />
                        </div>
                        <div className="bg-yellow-200 rounded-lg shadow-lg p-6 sm:w-96 mt-10 text-center cursor-pointer transform hover:scale-105 transition-all duration-300">
                            <h2 className="text-lg font-bold">
                                Learning Paths
                            </h2>
                        </div>
                        <div className="bg-red-200 rounded-lg shadow-lg p-6 sm:w-96 mt-10 text-center cursor-pointer transform hover:scale-105 transition-all duration-300">
                            <h2 className="text-lg font-bold">
                                Announcment Box
                            </h2> 
                        </div>
                    </div>

                    {/* Right Section (8/12) */}
                    <div className="col-span-8 flex flex-col bg-blue-200 rounded-lg">
                        {/* Top Section with Profile and Cards */}
                        <div className="flex flex-col sm:flex-row space-y-6 sm:space-y-0 sm:space-x-4 p-4">
                            {/* Profile Card */}
                            <div className="w-full sm:w-1/3 mt-5 hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                                <ProfileCard
                                    name={"Student"}
                                    courses={10}
                                    certifications={5}
                                />
                            </div>
                            <div className="w-full sm:w-1/3 mt-5 hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                                <Experience exp={"2400XP"} />
                            </div>
                            <div className="w-full sm:w-1/3 mt-5 hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                                <Todo />
                            </div>
                        </div>
                        <div className="space-y-4 p-4">
                            <div className="bg-yellow-100 rounded-lg shadow-lg p-6 w-full text-center cursor-pointer transform hover:scale-105 transition-all duration-300">
                                <h2 className="text-lg font-bold">
                                    Calm Corner
                                </h2>
                            </div>
                            <div className="bg-green-100 rounded-lg shadow-lg p-6 w-full text-center cursor-pointer transform hover:scale-105 transition-all duration-300">
                                <h2 className="text-lg font-bold">
                                    Concentration Challenge
                                </h2>
                            </div>
                        </div>

                        {/* Full-width Chart Section */}
                        {/* Conditionally render the Chart component based on screen size */}
                        <div className="p-4">
                            {!isSmallScreen && (
                                <div className="sm:mt-4 sm:shadow-lg rounded-lg bg-white p-4 w-full">
                                    <h1 className="ml-10 font-bold text-2xl">
                                        Chart:-{" "}
                                    </h1>
                                    <Chart />
                                </div>
                            )}
                        </div>
                    </div>
                    {/* New Box Section */}
                    {/* <div className="w-full mt-10">
                    <div className="flex flex-col sm:flex-row justify-center space-y-6 sm:space-y-0 sm:space-x-6">
                        <div className="bg-blue-200 rounded-lg shadow-lg p-6 w-full sm:w-1/3 text-center cursor-pointer transform hover:scale-105 transition-all duration-300">
                            <h2 className="text-lg font-bold">
                                Concentration Challenge
                            </h2>
                        </div>
                        <div className="bg-yellow-100 rounded-lg shadow-lg p-6 w-full sm:w-1/3 text-center cursor-pointer transform hover:scale-105 transition-all duration-300">
                            <h2 className="text-lg font-bold">Calm Corner</h2>
                        </div>
                        <div className="bg-blue-500 rounded-lg shadow-lg p-6 w-full sm:w-1/3 text-center cursor-pointer text-white transform hover:scale-105 transition-all duration-300">
                            <h2 className="text-lg font-bold">
                                Announcement Box
                            </h2>
                        </div>
                    </div>
                </div> */}
                </div>
                <ChatWidget />
>>>>>>> 6f09d6b57b9dab370b290c951159baa17d9b97b0
            </div>

            {/* Notification Bell */}
            <div className="ml-4">
              <div className="bg-yellow-400 p-2 sm:p-4 rounded-full shadow-md flex items-center justify-center">
                <FaBell size={24} className="text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 sm:grid-cols-12 p-6 w-full space-y-5 sm:space-x-5 sm:space-y-0">
          {/* Left Section (4/12) */}
          <div className="col-span-4 flex flex-col bg-blue-200 rounded-md p-4">
            <div className="flex flex-wrap justify-center gap-6">
              {/* Take Test Button with Description */}
              <div className="bg-gradient-to-r from-green-300 to-green-500 rounded-lg shadow-lg p-6 sm:w-96 w-full mt-5 text-center cursor-pointer transform hover:scale-105 transition-all duration-300">
                <h2 className="text-lg font-bold flex items-center justify-center gap-2">
                  <FaClipboardList />
                  Take Test
                </h2>
                <p className="text-sm mt-2">
                  Ready to check your knowledge? Click the button to start a test and track your progress! Remember, testing yourself regularly helps you understand concepts better and boosts your confidence in the subject.
                </p>
              </div>
            </div>

            {/* Course Section */}
            <section className="grid grid-cols-1 gap-6 mt-6 sm:">
              <CourseCard
                title="Biology"
                progress={79}
                lessons={21}
                assignments={5}
              />
              <CourseCard
                title="Physics"
                progress={64}
                lessons={10}
                assignments={2}
              />
            </section>

            {/* Class Schedule */}
            <div className=" mt-10">
              <Class
                className="Schedule:-"
                studentsCount={30}
                time="10:00 AM - 11:00 AM"
                schedule={[
                  "Class 1: Introduction",
                  "Class 2: Algebra",
                  "Class 3: Geometry",
                  "Class 4: Calculus",
                  "Class 6: Biology",
                  "Class 7: Physics",
                  "Class 8: Mathematics",
                ]}
              />
            </div>
            {/* Learning Paths */}
            <div className="flex justify-center flex-col ml-10">
              <div className="bg-gradient-to-r from-yellow-300 to-yellow-500 rounded-lg shadow-lg p-6 sm:w-96 w-full mt-10 text-center cursor-pointer transform hover:scale-105 transition-all duration-300">
                <h2 className="text-lg font-bold flex items-center justify-center gap-2">
                  <span>📚</span> Learning Paths
                </h2>
              </div>

              {/* Announcement Box */}
              <div className="bg-gradient-to-r from-pink-300 to-pink-500 rounded-lg shadow-lg p-6 sm:w-96 w-full mt-10 text-center cursor-pointer transform hover:scale-105 transition-all duration-300">
                <h2 className="text-lg font-bold flex items-center justify-center gap-2">
                  <span>📢</span> Announcement Box
                </h2>
              </div>
            </div>
          </div>

          {/* Right Section (8/12) */}
          <div className="col-span-8 flex flex-col bg-blue-200 rounded-lg">
            {/* Top Section with Profile and Cards */}
            <div className="flex flex-col sm:flex-row space-y-6 sm:space-y-0 sm:space-x-4 p-4">
              {/* Profile Card */}
              <div className="w-full sm:w-1/3 mt-5 hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                <AttendanceCard />
              </div>
              <div className="w-full sm:w-1/3 mt-5 hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                <Experience exp={"2400XP"} />
              </div>
              <div className="w-full sm:w-1/3 mt-5 hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                <Todo />
              </div>
            </div>

            {/* Calm Corner and Concentration Challenge */}
            <div className="space-y-4 p-4">
              {/* Calm Corner */}
              <div className="bg-yellow-100 rounded-lg shadow-lg p-6 w-full text-center cursor-pointer transform hover:scale-105 transition-all duration-300">
                <h2 className="text-lg font-bold flex items-center justify-center gap-2">
                  <FaSmile className="text-yellow-500" />
                  Calm Corner
                </h2>
                <p className="text-sm mt-2">
                  Take a moment to relax, breathe deeply, and clear your mind. A calm mind is a productive mind!
                </p>
              </div>

              {/* Concentration Challenge */}
              <div className="bg-green-100 rounded-lg shadow-lg p-6 w-full text-center cursor-pointer transform hover:scale-105 transition-all duration-300">
                <h2 className="text-lg font-bold flex items-center justify-center gap-2">
                  <FaBrain className="text-green-600" />
                  Concentration Challenge
                </h2>
                <p className="text-sm mt-2">
                  Sharpen your focus with daily challenges. Let's see how long you can maintain full concentration on your tasks!
                </p>
              </div>
            </div>

            {/* Full-width Chart Section */}
            <div className="p-4">
              {!isSmallScreen && (
                <div className="sm:mt-4 sm:shadow-lg rounded-lg bg-white p-4 w-full">
                  <h1 className="ml-10 font-bold text-2xl">Chart:- </h1>
                  <StudentInsights />
                </div>
              )}
            </div>
          </div>
        </div>

        <ChatWidget />
      </div>
    </div>
  );
}

export default Student;

{/* Learning Paths */ }
<div className="bg-gradient-to-r from-yellow-300 to-yellow-500 rounded-lg shadow-lg p-6 sm:w-96 w-full mt-10 text-center cursor-pointer transform hover:scale-105 transition-all duration-300">
  <h2 className="text-lg font-bold flex items-center justify-center gap-2">
    <span>📚</span> Learning Paths
  </h2>
</div>

{/* Announcement Box */ }
<div className="bg-gradient-to-r from-pink-300 to-pink-500 rounded-lg shadow-lg p-6 sm:w-96 w-full mt-10 text-center cursor-pointer transform hover:scale-105 transition-all duration-300">
  <h2 className="text-lg font-bold flex items-center justify-center gap-2">
    <span>📢</span> Announcement Box
  </h2>
</div>