// import React, { useState } from 'react';
// import { NavLink } from 'react-router-dom';

// const Header = () => {
//   const [language, setLanguage] = useState('EN');
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//   // Function to toggle sidebar
//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };

//   const handleLanguageChange = (event) => {
//     const selectedLanguage = event.target.value;
//     setLanguage(selectedLanguage);
//   };

//   return (
//     <>
//       <header className="bg-blue-500 py-6">
//         <div className='flex px-8'>
//           <div className="container  flex justify-between items-center">
//             {/* Logo Section */}
//             <NavLink to="/"
//               style={{ fontFamily: "'SUSE', sans-serif" }}
//               className="text-white font-bold text-5xl flex items-center">
//               WISETRACK
//             </NavLink>
//           </div>
//           {/* Nav Links */}
//           <nav className="space-x-12 ml-80 text-white text-lg mx-auto flex justify-between items-center">
//             <NavLink
//               to="/Home_Student"
//               className={({ isActive }) =>
//                 isActive ? 'underline text-black' : 'hover:underline'
//               }
//             >
//               STUDENT
//             </NavLink>
//             <NavLink
//               to="/Home_Teacher"
//               className={({ isActive }) =>
//                 isActive ? 'underline text-black' : 'hover:underline'
//               }
//             >
//               TEACHER
//             </NavLink>
//             <NavLink
//               to="/Home_Parents"
//               className={({ isActive }) =>
//                 isActive ? 'underline text-black' : 'hover:underline'
//               }
//             >
//               PARENTS
//             </NavLink>
//             <NavLink
//               to="/Home_University"
//               className={({ isActive }) =>
//                 isActive ? 'underline text-black' : 'hover:underline'
//               }
//             >
//               UNIVERSITY
//             </NavLink>
//           </nav>

//           {/* Language Switcher */}
//           <div className="text-white mx-6">
//             <select
//               value={language}
//               onChange={handleLanguageChange}
//               className="bg-blue-500 border border-white text-white rounded px-2 py-1"
//             >
//               <option className="bg-blue-50 text-black" value="EN">English</option>
//               <option className="bg-blue-50 text-black" value="MR">Marathi</option>
//               <option className="bg-blue-50 text-black" value="HI">Hindi</option>
//             </select>
//           </div>

//           {/* Login/Signup Section */}
//           <div className="space-x-4">
//             <NavLink to="/Login">
//               <button className="text-white border border-white ml-20 px-4 py-2 rounded hover:bg-white hover:text-blue-500">
//                 Login
//               </button>
//             </NavLink>
//             <button
//               onClick={toggleSidebar}
//               className="text-white border border-white px-4 py-2 rounded hover:bg-white hover:text-blue-500"
//             >
//               Signup
//             </button>
//           </div>
//         </div>
//       </header>

//       {/* Signup Sidebar */}
//       {isSidebarOpen && (
//         <div className="fixed top-0 right-0 w-80 bg-white h-full shadow-lg z-50 p-6 overflow-y-auto">
//           <div className="flex justify-between items-center">
//             <h2 className="text-xl font-bold">Sign up as</h2>
//             {/* Close Button */}
//             <button onClick={toggleSidebar} className="text-gray-500 hover:text-gray-800">
//               &times;
//             </button>
//           </div>
//           <p className="text-gray-600 mt-2 mb-6">
//             Select the role you would want to proceed with
//           </p>
//           <ul className="space-y-4">
//             <li className="flex items-center space-x-4">
//               <NavLink to="/signup" onClick={toggleSidebar} className="flex items-center space-x-4">
//                 <div className="bg-orange-200 p-2 rounded-full">
//                   <img src="student_icon.svg" alt="Student" />
//                 </div>
//                 <div>
//                   <h3 className="font-semibold">Student</h3>
//                   <p className="text-gray-500 text-sm">
//                     Redefining your learning experience with live classes, tests, homework, etc.
//                   </p>
//                 </div>
//               </NavLink>
//             </li>
//             <li className="flex items-center space-x-4">
//               <NavLink to="/signup" onClick={toggleSidebar} className="flex items-center space-x-4">
//                 <div className="bg-orange-200 p-2 rounded-full">
//                   <img src="home_tuition_icon.svg" alt="Home Tuition" />
//                 </div>
//                 <div>
//                   <h3 className="font-semibold">Home Tuitions</h3>
//                   <p className="text-gray-500 text-sm">
//                     Create your own classroom and teach live anytime, anywhere.
//                   </p>
//                 </div>
//               </NavLink>
//             </li>
//             <li className="flex items-center space-x-4">
//               <NavLink to="/signup" onClick={toggleSidebar} className="flex items-center space-x-4">
//                 <div className="bg-orange-200 p-2 rounded-full">
//                   <img src="school_icon.svg" alt="School" />
//                 </div>
//                 <div>
//                   <h3 className="font-semibold">School</h3>
//                   <p className="text-gray-500 text-sm">
//                     Manage students and teachers with ease.
//                   </p>
//                 </div>
//               </NavLink>
//             </li>
//             <li className="flex items-center space-x-4">
//               <NavLink to="/signup" onClick={toggleSidebar} className="flex items-center space-x-4">
//                 <div className="bg-orange-200 p-2 rounded-full">
//                   <img src="parent_icon.svg" alt="Parent" />
//                 </div>
//                 <div>
//                   <h3 className="font-semibold">Parent</h3>
//                   <p className="text-gray-500 text-sm">
//                     Track your child's progress and evaluate their performance easily.
//                   </p>
//                 </div>
//               </NavLink>
//             </li>
//           </ul>
//         </div>
//       )}
//     </>
//   );
// };

// export default Header;
// import React, { useState } from 'react';
// import { NavLink } from 'react-router-dom';

// const Header = () => {
//   const [language, setLanguage] = useState('EN');
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//   // Function to toggle sidebar
//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };

//   const handleLanguageChange = (event) => {
//     const selectedLanguage = event.target.value;
//     setLanguage(selectedLanguage);
//   };

//   return (
//     <>
//       <header className="bg-blue-500 py-7 h-24">
//         <div className="flex justify-between items-center px-4">
//           {/* Logo Section */}
//           <NavLink to="/" className="text-white font-bold text-4xl" style={{ fontFamily: "'SUSE', sans-serif" }}>
//             WISETRACK
//           </NavLink>
//           {/* Nav Links */}
//           <nav className="flex space-x-10 text-white text-2xl">
//             <NavLink
//               to="/Home_Student"
//               className={({ isActive }) =>
//                 isActive ? 'underline text-black' : 'hover:underline'
//               }
//             >
//               STUDENT
//             </NavLink>
//             <NavLink
//               to="/Home_Teacher"
//               className={({ isActive }) =>
//                 isActive ? 'underline text-black' : 'hover:underline'
//             }
//             >
//               TEACHER
//             </NavLink>
//             <NavLink
//               to="/Home_Parents"
//               className={({ isActive }) =>
//                 isActive ? 'underline text-black' : 'hover:underline'
//             }
//             >
//               PARENTS
//             </NavLink>
//             <NavLink
//               to="/Home_University"
//               className={({ isActive }) =>
//                 isActive ? 'underline text-black' : 'hover:underline'
//             }
//             >
//               UNIVERSITY
//             </NavLink>
//           </nav>

//           {/* Language Switcher */}
//           <div className="text-white">
//             <select
//               value={language}
//               onChange={handleLanguageChange}
//               className="bg-blue-500 border border-white text-white rounded px-2 py-1"
//             >
//               <option className="bg-blue-50 text-black" value="EN">English</option>
//               <option className="bg-blue-50 text-black" value="MR">Marathi</option>
//               <option className="bg-blue-50 text-black" value="HI">Hindi</option>
//             </select>
//           </div>

//           {/* Login/Signup Section */}
//           <div className="space-x-4">
//             <NavLink to="/Login">
//               <button className="text-white border border-white px-4 py-2 rounded hover:bg-white hover:text-blue-500">
//                 Login
//               </button>
//             </NavLink>
//             <button
//               onClick={toggleSidebar}
//               className="text-white border border-white px-4 py-2 rounded hover:bg-white hover:text-blue-500"
//             >
//               Signup
//             </button>
//           </div>
//         </div>
//       </header>

//       {/* Signup Sidebar */}
//       {isSidebarOpen && (
//         <div className="fixed top-0 right-0 w-80 bg-white h-full shadow-lg z-50 p-6 overflow-y-auto">
//           <div className="flex justify-between items-center">
//             <h2 className="text-xl font-bold">Sign up as</h2>
//             {/* Close Button */}
//             <button onClick={toggleSidebar} className="text-gray-500 hover:text-gray-800">
//               &times;
//             </button>
//           </div>
//           <p className="text-gray-600 mt-2 mb-6">
//             Select the role you would want to proceed with
//           </p>
//           <ul className="space-y-4">
//             <li className="flex items-center space-x-4">
//               <NavLink to="/signup/student" onClick={toggleSidebar} className="flex items-center space-x-4">
//                 <div className="bg-orange-200 p-2 rounded-full">
//                   {/* Replace with actual student icon */}
//                   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-user">
//                     <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
//                     <circle cx="12" cy="7" r="4"></circle>
//                   </svg>
//                 </div>
//                 <div>
//                   <h3 className="font-semibold">Student</h3>
//                   <p className="text-gray-500 text-sm">
//                     Redefining your learning experience with live classes, tests, homework, etc.
//                   </p>
//                 </div>
//               </NavLink>
//             </li>
//             <li className="flex items-center space-x-4">
//               <NavLink to="/signup/tutor" onClick={toggleSidebar} className="flex items-center space-x-4">
//                 <div className="bg-orange-200 p-2 rounded-full">
//                   {/* Replace with actual home tuition icon */}
//                   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-home">
//                     <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
//                     <polyline points="9 22 9 12 15 12 15 22"></polyline>
//                   </svg>
//                 </div>
//                 <div>
//                   <h3 className="font-semibold">Teacher</h3>
//                   <p className="text-gray-500 text-sm">
//                     Create your own classroom and teach live anytime, anywhere and manage students with ease.
//                   </p>
//                 </div>
//               </NavLink>
//             </li>
//             <li className="flex items-center space-x-4">
//               <NavLink to="/signup/school" onClick={toggleSidebar} className="flex items-center space-x-4">
//                 <div className="bg-orange-200 p-2 rounded-full">
//                   {/* Replace with actual school icon */}
//                   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-school">
//                     <path d="M12 21v-15m0 0l-4-4m4 4l4-4m-4 4h12a2 2 0 0 1 2 2v7"></path>
//                     <path d="M12 12l-2 2m0 0l2 2m-2-2h12a2 2 0 0 1 2 2v1"></path>
//                   </svg>
//                 </div>
//                 <div>
//                   <h3 className="font-semibold">School</h3>
//                   <p className="text-gray-500 text-sm">
//                     Manage students and teachers with ease.
//                   </p>
//                 </div>
//               </NavLink>
//             </li>
//             <li className="flex items-center space-x-4">
//               <NavLink to="/signup/parent" onClick={toggleSidebar} className="flex items-center space-x-4">
//                 <div className="bg-orange-200 p-2 rounded-full">
//                   {/* Replace with actual parent icon */}
//                   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-users">
//                     <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
//                     <circle cx="9" cy="7" r="4"></circle>
//                     <path d="M23 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
//                     <circle cx="16" cy="7" r="4"></circle>
//                   </svg>
//                 </div>
//                 <div>
//                   <h3 className="font-semibold">Parent</h3>
//                   <p className="text-gray-500 text-sm">
//                     Track your child's progress and evaluate their performance easily.
//                   </p>
//                 </div>
//               </NavLink>
//             </li>
//           </ul>
//         </div>
//       )}
//     </>
//   );
// };

// export default Header;






















// import React, { useState } from 'react';
// import { NavLink } from 'react-router-dom';

// const Header = () => {
//   const [language, setLanguage] = useState('EN');
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   // Function to toggle modal
//   const toggleModal = () => {
//     setIsModalOpen(!isModalOpen);
//   };

//   const handleLanguageChange = (event) => {
//     const selectedLanguage = event.target.value;
//     setLanguage(selectedLanguage);
//   };

//   return (
//     <>
//       <header className="bg-blue-500 py-7 h-24">
//         <div className="flex justify-between items-center px-4">
//           {/* Logo Section */}
//           <NavLink to="/" className="text-white font-bold text-4xl" style={{ fontFamily: "'SUSE', sans-serif" }}>
//             WISETRACK
//           </NavLink>

//           {/* Nav Links */}
//           <nav className="flex space-x-10 text-white text-2xl">
//             <NavLink
//               to="/Home_Student"
//               className={({ isActive }) =>
//                 isActive ? 'underline text-black' : 'hover:underline'
//               }
//             >
//               STUDENT
//             </NavLink>
//             <NavLink
//               to="/Home_Teacher"
//               className={({ isActive }) =>
//                 isActive ? 'underline text-black' : 'hover:underline'
//               }
//             >
//               TEACHER
//             </NavLink>
//             <NavLink
//               to="/Home_Parents"
//               className={({ isActive }) =>
//                 isActive ? 'underline text-black' : 'hover:underline'
//               }
//             >
//               PARENTS
//             </NavLink>
//             <NavLink
//               to="/Home_University"
//               className={({ isActive }) =>
//                 isActive ? 'underline text-black' : 'hover:underline'
//               }
//             >
//               UNIVERSITY
//             </NavLink>
//           </nav>

//           {/* Language Switcher */}
//           <div className="text-white">
//             <select
//               value={language}
//               onChange={handleLanguageChange}
//               className="bg-blue-500 border border-white text-white rounded px-2 py-1"
//             >
//               <option className="bg-blue-50 text-black" value="EN">English</option>
//               <option className="bg-blue-50 text-black" value="MR">Marathi</option>
//               <option className="bg-blue-50 text-black" value="HI">Hindi</option>
//             </select>
//           </div>

//           {/* Login/Signup Section */}
//           <div className="space-x-4">
//             <NavLink>
//               <button
//                 onClick={toggleModal}

//                 className="text-white border border-white px-4 py-2 rounded hover:bg-white hover:text-blue-500">
//                 Login
//               </button>
//             </NavLink>
//             <button
//               onClick={toggleModal}
//               className="text-white border border-white px-4 py-2 rounded hover:bg-white hover:text-blue-500"
//             >
//               Signup
//             </button>
//           </div>
//         </div>
//       </header>

//       {/* Signup Modal with Backdrop Overlay */}
//       {isModalOpen && (
//         <>
//           {/* Backdrop Overlay */}
//           <div
//             className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ease-in-out"
//             onClick={toggleModal}
//           ></div>

//           {/* Modal */}
//           <div className="fixed inset-0 flex items-center justify-center z-50">
//             <div className="bg-white w-3/5 h-3/5 max-w-4xl rounded-lg shadow-lg p-6 overflow-y-auto relative">
//               {/* Title on the top-left and Close Button on the top-right */}
//               <div className="absolute top-4 left-6">
//                 <h2 className="text-2xl font-bold">Sign up as</h2>
//               </div>
//               <button
//                 onClick={toggleModal}
//                 className="absolute top-4 right-6 text-gray-500 hover:text-gray-800 text-2xl"
//               >
//                 &times;
//               </button>

//               <p className="text-gray-600 mt-12 mb-6 text-center">
//                 Select the role you would want to proceed with
//               </p>
//               <ul className="space-y-6 w-full max-w-lg mx-auto">
//                 <li className="flex items-center space-x-4">
//                   <NavLink to="/StudentDash" onClick={toggleModal} className="flex items-center space-x-4">
//                     <div className="bg-orange-200 p-2 rounded-full">
//                       {/* Replace with actual student icon */}
//                       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-user">
//                         <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
//                         <circle cx="12" cy="7" r="4"></circle>
//                       </svg>
//                     </div>
//                     <div>
//                       <h3 className="font-semibold">Student</h3>
//                       <p className="text-gray-500 text-sm">
//                         Redefining your learning experience with live classes, tests, homework.
//                       </p>
//                     </div>
//                   </NavLink>
//                 </li>
//                 <li className="flex items-center space-x-4">
//                   <NavLink to="/TeacherDash" onClick={toggleModal} className="flex items-center space-x-4">
//                     <div className="bg-orange-200 p-2 rounded-full">
//                       {/* Replace with actual home tuition icon */}
//                       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-home">
//                         <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
//                         <polyline points="9 22 9 12 15 12 15 22"></polyline>
//                       </svg>
//                     </div>
//                     <div>
//                       <h3 className="font-semibold">Teacher</h3>
//                       <p className="text-gray-500 text-sm">
//                         Create your own classroom and teach live anytime, anywhere and manage students with ease.
//                       </p>
//                     </div>
//                   </NavLink>
//                 </li>
//                 <li className="flex items-center space-x-4">
//                   <NavLink to="/UniversityDash" onClick={toggleModal} className="flex items-center space-x-4">
//                     <div className="bg-orange-200 p-2 rounded-full">
//                       {/* Replace with actual school icon */}
//                       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-school">
//                         <path d="M12 21v-15m0 0l-4-4m4 4l4-4m-4 4h12a2 2 0 0 1 2 2v7"></path>
//                         <path d="M12 12l-2 2m0 0l2 2m-2-2h12a2 2 0 0 1 2 2v1"></path>
//                       </svg>
//                     </div>
//                     <div>
//                       <h3 className="font-semibold">School</h3>
//                       <p className="text-gray-500 text-sm">
//                         Manage students and teachers with ease.
//                       </p>
//                     </div>
//                   </NavLink>
//                 </li>
//                 <li className="flex items-center space-x-4">
//                   <NavLink to="/ParentDash" onClick={toggleModal} className="flex items-center space-x-4">
//                     <div className="bg-orange-200 p-2 rounded-full">
//                       {/* Replace with actual parent icon */}
//                       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-users">
//                         <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
//                         <circle cx="9" cy="7" r="4"></circle>
//                         <path d="M23 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
//                         <circle cx="16" cy="7" r="4"></circle>
//                       </svg>
//                     </div>
//                     <div>
//                       <h3 className="font-semibold">Parent</h3>
//                       <p className="text-gray-500 text-sm">
//                         Track your child's progress and evaluate their performance easily.
//                       </p>
//                     </div>
//                   </NavLink>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </>
//       )}
//     </>
//   );
// };

// export default Header;





















// import React, { useState } from 'react';
// import { NavLink } from 'react-router-dom';

// const Header = () => {
//   const [language, setLanguage] = useState('EN');
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const toggleModal = () => {
//     setIsModalOpen(!isModalOpen);
//   };

//   const handleLanguageChange = (event) => {
//     const selectedLanguage = event.target.value;
//     setLanguage(selectedLanguage);
//   };

//   return (
//     <>
//       <header className="bg-blue-500 py-5 sm:py-7 h-auto sm:h-24">
//         <div className="flex flex-col sm:flex-row justify-between items-center px-4">
//           {/* Logo Section */}
//           <NavLink to="/" className="text-white font-bold text-3xl sm:text-4xl" style={{ fontFamily: "'SUSE', sans-serif" }}>
//             WISETRACK
//           </NavLink>

//           {/* Nav Links */}
//           <nav className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-10 text-white text-lg sm:text-2xl mt-4 sm:mt-0">
//             <NavLink
//               to="/Home_Student"
//               className={({ isActive }) =>
//                 isActive ? 'underline text-black' : 'hover:underline'
//               }
//             >
//               STUDENT
//             </NavLink>
//             <NavLink
//               to="/Home_Teacher"
//               className={({ isActive }) =>
//                 isActive ? 'underline text-black' : 'hover:underline'
//               }
//             >
//               TEACHER
//             </NavLink>
//             <NavLink
//               to="/Home_Parents"
//               className={({ isActive }) =>
//                 isActive ? 'underline text-black' : 'hover:underline'
//               }
//             >
//               PARENTS
//             </NavLink>
//             <NavLink
//               to="/Home_University"
//               className={({ isActive }) =>
//                 isActive ? 'underline text-black' : 'hover:underline'
//               }
//             >
//               UNIVERSITY
//             </NavLink>
//           </nav>

//           {/* Language Switcher */}
//           <div className="text-white mt-4 sm:mt-0">
//             <select
//               value={language}
//               onChange={handleLanguageChange}
//               className="bg-blue-500 border border-white text-white rounded px-2 py-1 text-sm sm:text-base"
//             >
//               <option className="bg-blue-50 text-black" value="EN">English</option>
//               <option className="bg-blue-50 text-black" value="MR">Marathi</option>
//               <option className="bg-blue-50 text-black" value="HI">Hindi</option>
//             </select>
//           </div>

//           {/* Login/Signup Section */}
//           <div className="flex space-x-4 mt-4 sm:mt-0">
//             <NavLink>
//               <button
//                 onClick={toggleModal}
//                 className="text-white border border-white px-3 py-2 rounded hover:bg-white hover:text-blue-500 text-sm sm:text-base"
//               >
//                 Login
//               </button>
//             </NavLink>
//             <button
//               onClick={toggleModal}
//               className="text-white border border-white px-3 py-2 rounded hover:bg-white hover:text-blue-500 text-sm sm:text-base"
//             >
//               Signup
//             </button>
//           </div>
//         </div>
//       </header>

//       {/* Signup Modal with Backdrop Overlay */}
//       {isModalOpen && (
//         <>
//           {/* Backdrop Overlay */}
//           <div
//             className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ease-in-out"
//             onClick={toggleModal}
//           ></div>

//           {/* Modal */}
//           <div className="fixed inset-0 flex items-center justify-center z-50">
//             <div className="bg-white w-4/5 sm:w-3/5 h-4/5 sm:h-3/5 max-w-4xl rounded-lg shadow-lg p-6 overflow-y-auto relative">
//               {/* Title on the top-left and Close Button on the top-right */}
//               <div className="absolute top-4 left-6">
//                 <h2 className="text-xl sm:text-2xl font-bold">Sign up as</h2>
//               </div>
//               <button
//                 onClick={toggleModal}
//                 className="absolute top-4 right-6 text-gray-500 hover:text-gray-800 text-xl sm:text-2xl"
//               >
//                 &times;
//               </button>

//               <p className="text-gray-600 mt-12 mb-6 text-center text-base sm:text-lg">
//                 Select the role you would want to proceed with
//               </p>
//               <ul className="space-y-6 w-full max-w-lg mx-auto">
//                 <li className="flex items-center space-x-4">
//                   <NavLink to="/StudentDash" onClick={toggleModal} className="flex items-center space-x-4">
//                     <div className="bg-orange-200 p-2 rounded-full">
//                       {/* Replace with actual student icon */}
//                       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-user">
//                         <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
//                         <circle cx="12" cy="7" r="4"></circle>
//                       </svg>
//                     </div>
//                     <div>
//                       <h3 className="font-semibold text-sm sm:text-base">Student</h3>
//                       <p className="text-gray-500 text-xs sm:text-sm">
//                         Redefining your learning experience with live classes, tests, homework.
//                       </p>
//                     </div>
//                   </NavLink>
//                 </li>
//                 <li className="flex items-center space-x-4">
//                   <NavLink to="/TeacherDash" onClick={toggleModal} className="flex items-center space-x-4">
//                     <div className="bg-orange-200 p-2 rounded-full">
//                       {/* Replace with actual home tuition icon */}
//                       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-home">
//                         <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
//                         <polyline points="9 22 9 12 15 12 15 22"></polyline>
//                       </svg>
//                     </div>
//                     <div>
//                       <h3 className="font-semibold">Teacher</h3>
//                       <p className="text-gray-500 text-sm">
//                         Create your own classroom and teach live anytime, anywhere and manage students with ease.
//                       </p>
//                     </div>
//                   </NavLink>
//                 </li>
//                 <li className="flex items-center space-x-4">
//                   <NavLink to="/UniversityDash" onClick={toggleModal} className="flex items-center space-x-4">
//                     <div className="bg-orange-200 p-2 rounded-full">
//                       {/* Replace with actual school icon */}
//                       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-school">
//                         <path d="M12 21v-15m0 0l-4-4m4 4l4-4m-4 4h12a2 2 0 0 1 2 2v7"></path>
//                         <path d="M12 12l-2 2m0 0l2 2m-2-2h12a2 2 0 0 1 2 2v1"></path>
//                       </svg>
//                     </div>
//                     <div>
//                       <h3 className="font-semibold">University</h3>
//                       <p className="text-gray-500 text-sm">
//                         Manage students and teachers with ease.
//                       </p>
//                     </div>
//                   </NavLink>
//                 </li>
//                 <li className="flex items-center space-x-4">
//                   <NavLink to="/ParentDash" onClick={toggleModal} className="flex items-center space-x-4">
//                     <div className="bg-orange-200 p-2 rounded-full">
//                       {/* Replace with actual parent icon */}
//                       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-users">
//                         <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
//                         <circle cx="9" cy="7" r="4"></circle>
//                         <path d="M23 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
//                         <circle cx="16" cy="7" r="4"></circle>
//                       </svg>
//                     </div>
//                     <div>
//                       <h3 className="font-semibold">Parent</h3>
//                       <p className="text-gray-500 text-sm">
//                         Track your child's progress and evaluate their performance easily.
//                       </p>
//                     </div>
//                   </NavLink>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </>
//       )}
//     </>
//   );
// };

// export default Header;












import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaUserGraduate, FaChalkboardTeacher, FaUniversity, FaUserFriends } from 'react-icons/fa'; // Import relevant icons

const Header = () => {
  const [language, setLanguage] = useState('EN');
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to toggle modal
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  return (
    <>
      <header className="bg-blue-950 py-7 h-24">
        <div className="flex justify-between items-center px-4">
          {/* Logo Section */}
          <NavLink to="/" className="text-white font-bold text-5xl" style={{ fontFamily: "'SUSE', sans-serif" }}>
            WISETRACK
          </NavLink>

          {/* Nav Links */}
          <nav className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-10 text-white text-xl sm:text-xl mt-4 sm:mt-0">
            <NavLink
              to="/Home_Student"
              className={({ isActive }) =>
                isActive ? 'underline text-blue-500' : 'hover:underline'
              }
            >
              STUDENT
            </NavLink>
            <NavLink
              to="/Home_Teacher"
              className={({ isActive }) =>
                isActive ? 'underline text-blue-500' : 'hover:underline'
              }
            >
              TEACHER
            </NavLink>
            <NavLink
              to="/Home_Parents"
              className={({ isActive }) =>
                isActive ? 'underline text-blue-500' : 'hover:underline'
              }
            >
              PARENTS
            </NavLink>
            <NavLink
              to="/Home_University"
              className={({ isActive }) =>
                isActive ? 'underline text-blue-500' : 'hover:underline'
              }
            >
              UNIVERSITY
            </NavLink>
            <NavLink
              to="/working"
              className={({ isActive }) =>
                isActive ? 'underline text-blue-500' : 'hover:underline'
              }
            >
              WORKING
            </NavLink>
          </nav>

          {/* Language Switcher */}
          <div className="text-white mt-4 sm:mt-0">
            <select
              value={language}
              onChange={handleLanguageChange}
              className="bg-blue-500 border border-white text-white rounded px-2 py-1 text-sm sm:text-base"
            >
              <option className="bg-blue-50 text-black" value="EN">English</option>
              <option className="bg-blue-50 text-black" value="MR">Marathi</option>
              <option className="bg-blue-50 text-black" value="HI">Hindi</option>
            </select>
          </div>

          {/* Login/Signup Section */}
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 mt-4 sm:mt-0">
            <NavLink>
              <button
                onClick={toggleModal}
                className="text-white border border-white px-4 py-2 rounded hover:bg-white hover:text-blue-500 text-sm sm:text-base"
              >
                Login
              </button>
            </NavLink>
            <button
              onClick={toggleModal}
              className="text-white border border-white lg:ml-4 px-4 py-2 rounded hover:bg-white hover:text-blue-500 text-sm sm:text-base"
            >
              Signup
            </button>
          </div>
        </div>
      </header>

      {/* Signup Modal with Backdrop Overlay */}
      {isModalOpen && (
        <>
          {/* Backdrop Overlay */}
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ease-in-out"
            onClick={toggleModal}
          ></div>

          {/* Modal */}
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="bg-white w-4/5 sm:w-3/5 h-4/5 sm:h-3/5 max-w-4xl rounded-lg shadow-lg p-6 overflow-y-auto relative">
              {/* Title on the top-left and Close Button on the top-right */}
              <div className="absolute top-4 left-6">
                <h2 className="text-2xl font-bold">Sign up as</h2>
              </div>
              <button
                onClick={toggleModal}
                className="absolute top-4 right-6 text-gray-500 hover:text-gray-800 text-2xl"
              >
                &times;
              </button>

              <p className="text-gray-600 mt-12 mb-6 text-center">
                Choose your role to get started
              </p>
              <ul className="space-y-6 w-full max-w-lg mx-auto">
                {/* Student Section */}
                <li className="flex items-center space-x-4 bg-blue-100 p-4 rounded-lg">
                  <NavLink to="/StudentDash" onClick={toggleModal} className="flex items-center space-x-4">
                    <div className="bg-blue-500 p-3 rounded-full">
                      <FaUserGraduate className="text-white text-2xl" /> {/* Student Icon */}
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Student</h3>
                      <p className="text-gray-500 text-sm">
                        Enhance your learning with personalized feedback and interactive classes.
                      </p>
                    </div>
                  </NavLink>
                </li>

                {/* Teacher Section */}
                <li className="flex items-center space-x-4 bg-green-100 p-4 rounded-lg">
                  <NavLink to="/TeacherDash" onClick={toggleModal} className="flex items-center space-x-4">
                    <div className="bg-green-500 p-3 rounded-full">
                      <FaChalkboardTeacher className="text-white text-2xl" /> {/* Teacher Icon */}
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Teacher</h3>
                      <p className="text-gray-500 text-sm">
                        Create engaging lessons, manage students, and monitor progress seamlessly.
                      </p>
                    </div>
                  </NavLink>
                </li>

                {/* University Section */}
                <li className="flex items-center space-x-4 bg-yellow-100 p-4 rounded-lg">
                  <NavLink to="/UniversityDash" onClick={toggleModal} className="flex items-center space-x-4">
                    <div className="bg-yellow-500 p-3 rounded-full">
                      <FaUniversity className="text-white text-2xl" /> {/* University Icon */}
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">University</h3>
                      <p className="text-gray-500 text-sm">
                        Streamline your university’s workflow, track faculty, and improve student outcomes.
                      </p>
                    </div>
                  </NavLink>
                </li>

                {/* Parent Section */}
                <li className="flex items-center space-x-4 bg-pink-100 p-4 rounded-lg">
                  <NavLink to="/ParentDash" onClick={toggleModal} className="flex items-center space-x-4">
                    <div className="bg-pink-500 p-3 rounded-full">
                      <FaUserFriends className="text-white text-2xl" /> {/* Parent Icon */}
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Parent</h3>
                      <p className="text-gray-500 text-sm">
                        Stay updated with your child's progress, access feedback, and communicate with teachers.
                      </p>
                    </div>
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Header;