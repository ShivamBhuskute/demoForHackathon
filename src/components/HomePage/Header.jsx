import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const [language, setLanguage] = useState('EN');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Function to toggle sidebar
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleLanguageChange = (event) => {
    const selectedLanguage = event.target.value;
    setLanguage(selectedLanguage);
  };

  return (
    <>
      <header className="bg-blue-500 py-6">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo Section */}
          <NavLink to="/" className="text-white font-bold text-4xl flex items-center">
            WISETRACK
          </NavLink>

          {/* Nav Links */}
          <nav className="space-x-12 ml-80 text-white text-lg mx-auto flex justify-between items-center">
            <NavLink
              to="/Home_Student"
              className={({ isActive }) =>
                isActive ? 'underline text-black' : 'hover:underline'
              }
            >
              STUDENT
            </NavLink>
            <NavLink
              to="/Home_Teacher"
              className={({ isActive }) =>
                isActive ? 'underline text-black' : 'hover:underline'
              }
            >
              TEACHER
            </NavLink>
            <NavLink
              to="/Home_Parents"
              className={({ isActive }) =>
                isActive ? 'underline text-black' : 'hover:underline'
              }
            >
              PARENTS
            </NavLink>
            <NavLink
              to="/Home_University"
              className={({ isActive }) =>
                isActive ? 'underline text-black' : 'hover:underline'
              }
            >
              UNIVERSITY
            </NavLink>
          </nav>

          {/* Language Switcher */}
          <div className="text-white mx-6">
            <select
              value={language}
              onChange={handleLanguageChange}
              className="bg-blue-500 border border-white text-white rounded px-2 py-1"
            >
              <option className="bg-blue-50 text-black" value="EN">English</option>
              <option className="bg-blue-50 text-black" value="MR">Marathi</option>
              <option className="bg-blue-50 text-black" value="HI">Hindi</option>
            </select>
          </div>

          {/* Login/Signup Section */}
          <div className="space-x-4">
            <NavLink to="/Login">
              <button className="text-white border border-white ml-20 px-4 py-2 rounded hover:bg-white hover:text-blue-500">
                Login
              </button>
            </NavLink>
            <button
              onClick={toggleSidebar}
              className="text-white border border-white px-4 py-2 rounded hover:bg-white hover:text-blue-500"
            >
              Signup
            </button>
          </div>
        </div>
      </header>

      {/* Signup Sidebar */}
      {isSidebarOpen && (
        <div className="fixed top-0 right-0 w-80 bg-white h-full shadow-lg z-50 p-6 overflow-y-auto">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold">Sign up as</h2>
            {/* Close Button */}
            <button onClick={toggleSidebar} className="text-gray-500 hover:text-gray-800">
              &times;
            </button>
          </div>
          <p className="text-gray-600 mt-2 mb-6">
            Select the role you would want to proceed with
          </p>
          <ul className="space-y-4">
            <li className="flex items-center space-x-4">
              <NavLink to="/signup" onClick={toggleSidebar} className="flex items-center space-x-4">
                <div className="bg-orange-200 p-2 rounded-full">
                  <img src="student_icon.svg" alt="Student" />
                </div>
                <div>
                  <h3 className="font-semibold">Student</h3>
                  <p className="text-gray-500 text-sm">
                    Redefining your learning experience with live classes, tests, homework, etc.
                  </p>
                </div>
              </NavLink>
            </li>
            <li className="flex items-center space-x-4">
              <NavLink to="/signup" onClick={toggleSidebar} className="flex items-center space-x-4">
                <div className="bg-orange-200 p-2 rounded-full">
                  <img src="home_tuition_icon.svg" alt="Home Tuition" />
                </div>
                <div>
                  <h3 className="font-semibold">Home Tuitions</h3>
                  <p className="text-gray-500 text-sm">
                    Create your own classroom and teach live anytime, anywhere.
                  </p>
                </div>
              </NavLink>
            </li>
            <li className="flex items-center space-x-4">
              <NavLink to="/signup" onClick={toggleSidebar} className="flex items-center space-x-4">
                <div className="bg-orange-200 p-2 rounded-full">
                  <img src="school_icon.svg" alt="School" />
                </div>
                <div>
                  <h3 className="font-semibold">School</h3>
                  <p className="text-gray-500 text-sm">
                    Manage students and teachers with ease.
                  </p>
                </div>
              </NavLink>
            </li>
            <li className="flex items-center space-x-4">
              <NavLink to="/signup" onClick={toggleSidebar} className="flex items-center space-x-4">
                <div className="bg-orange-200 p-2 rounded-full">
                  <img src="parent_icon.svg" alt="Parent" />
                </div>
                <div>
                  <h3 className="font-semibold">Parent</h3>
                  <p className="text-gray-500 text-sm">
                    Track your child's progress and evaluate their performance easily.
                  </p>
                </div>
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Header;
