import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaUserGraduate, FaHandsHelping, FaChalkboardTeacher, FaUniversity, FaUserFriends } from 'react-icons/fa'; // Import relevant icons


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
      <header className="bg-blue-950 py-5 sm:py-7 h-auto sm:h-24">
        <div className="flex flex-col sm:flex-row justify-between items-center px-4">
          {/* Logo Section */}
          <NavLink to="/" className="text-white font-bold text-4xl sm:text-5xl" style={{ fontFamily: "'SUSE', sans-serif" }}>
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
          <div className="flex space-x-2">
            <button
              onClick={toggleModal}
              className="text-white border border-white px-4 py-2 rounded hover:bg-white hover:text-blue-500 text-sm sm:text-base"
            >
              Login
            </button>
            <button
              onClick={toggleModal}
              className="text-white border border-white px-4 py-2 rounded hover:bg-white hover:text-blue-500 text-sm sm:text-base"
            >
              Signup
            </button>
          </div>
        </div>
      </header>

      {/* Responsive Signup Modal */}
      {isModalOpen && (
        <>
          {/* Backdrop Overlay */}
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ease-in-out"
            onClick={toggleModal}
          ></div>

          {/* Modal */}
          <div className="fixed inset-0 flex items-center justify-center z-50 px-4 sm:px-8">
            <div className="bg-white w-full max-w-lg sm:max-w-3xl h-auto rounded-lg shadow-lg p-6 overflow-y-auto relative">
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
              <ul className="space-y-6">
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

                {/* NGO Section */}
                <li className="flex items-center space-x-4 bg-purple-100 p-4 rounded-lg">
                  <NavLink to="/NGODash" onClick={toggleModal} className="flex items-center space-x-4">
                    <div className="bg-purple-500 p-3 rounded-full">
                      <FaHandsHelping className="text-white text-2xl" /> {/* NGO Icon */}
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">NGO</h3>
                      <p className="text-gray-500 text-sm">
                        Collaborate with schools and communities to support at-risk students and improve outcomes.
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