import React, { useState } from "react";
import StudentProficiency from "./StudentProfieciency.jsx";
import MyCalendar from "./MyCalendar";
import axios from "axios"; // Import axios
import Sidebar from "./Sidebar"; // Fixed spelling
import { FaUserMd, FaBell, FaBook, FaQuestionCircle, FaUserGraduate, FaClipboardList, FaBookOpen, FaChartBar } from "react-icons/fa";
import { GiBookshelf } from "react-icons/gi";
import { VscFeedback } from "react-icons/vsc";
import { SiGoogleclassroom } from "react-icons/si";

const TeacherDashboard = () => {
  const [todos, setTodos] = useState([
    "Review Assignments",
    "Prepare for Q&A",
    "Upload Grades",
  ]);

  const events = [
    {
      title: 'University Meeting',
      start: new Date(2024, 9, 23, 14, 0),
      end: new Date(2024, 9, 23, 16, 0),
    },
    {
      title: 'Assignment Deadline',
      start: new Date(2024, 9, 25),
      end: new Date(2024, 9, 25),
    },
  ];

  const [notices, setNotices] = useState(["Meeting at 3 PM"]);
  const [newTodo, setNewTodo] = useState("");
  const [newNotice, setNewNotice] = useState("");
  const [uniqueId, setUniqueId] = useState(""); // State to hold the unique ID
  const [predictionResult, setPredictionResult] = useState(null); // State to hold prediction results

  const addTodo = () => {
    if (newTodo) {
      setTodos([...todos, newTodo]);
      setNewTodo("");
    }
  };

  const removeTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  const addNotice = () => {
    if (newNotice) {
      setNotices([...notices, newNotice]);
      setNewNotice("");
    }
  };

  const removeNotice = (index) => {
    setNotices(notices.filter((_, i) => i !== index));
  };

  const handleSubmitUniqueId = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        `backend-for-hackathon.vercel.app/api/aI/predict-student`,
        { uniqueId } // Send 'id' field instead of 'uniqueId'
      );
      console.log("Prediction Result:", response.data);
      setPredictionResult(response.data);
    } catch (error) {
      console.error("Error fetching prediction:", error);
    }
  };

  return (
    <div className="flex">
      {/* Main Content */}
      <div className="flex-1 ml-0 sm:ml-1/4 lg:mr-[20%] sm:mr-1/5 p-4 overflow-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-4">
          <div className="flex flex-col w-full sm:w-2/3">
            <h1 className="text-3xl sm:text-5xl font-bold mb-2">Teacher's Dashboard</h1>
            <div className="bg-white mt-2 shadow-lg p-1 flex items-center rounded-lg border border-gray-300 hover:shadow-xl transition-all duration-300">
              <input
                type="text"
                className="flex-grow p-1 text-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md"
                placeholder="Search for something..."
              />
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition-all duration-300">
                Search
              </button>
            </div>
          </div>

          <div className="flex items-center space-x-6 mt-10 sm:mt-0">
            <select className="bg-gray-200 p-2 sm:p-4 rounded-md shadow-md">
              <option>Foundational Stage</option>
              <option>Preparatory Stage</option>
              <option>Middle Stage</option>
              <option>Secondary Stage</option>
            </select>
            <div className="bg-yellow-400 p-2 sm:p-4 rounded-full shadow-md flex items-center justify-center">
              <FaBell size={24} className="text-white" />
            </div>
          </div>
        </div>


        <form onSubmit={handleSubmitUniqueId} className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Enter Student Unique ID:
            <input
              type="text"
              value={uniqueId}
              onChange={(e) => setUniqueId(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              required
            />
          </label>
          <button
            type="submit"
            className="mt-2 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-2 rounded"
          >
            Submit
          </button>
        </form>

        {predictionResult && (
          <div className="mt-4 p-4 bg-green-100 border border-green-400 rounded mb-4">
            <h3>Prediction Result:</h3>
            <p>Risk Status: {predictionResult.Risk_Status}</p>
            <p>Risk Type: {predictionResult.Risk_Type}</p>
          </div>
        )}


        {/* Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm sm:text-lg font-semibold mb-4">
          {/* Students Tab */}
          <div className="text-white bg-blue-500 p-4 sm:p-6 rounded-full uppercase cursor-pointer text-center flex flex-col justify-center items-center hover:bg-blue-600 transition-all duration-300">
            <FaUserGraduate size={30} className="mb-2" />
            <span>STUDENTS</span>
          </div>

          {/* Attendance Tab */}
          <div className="text-white bg-blue-500 p-4 sm:p-6 rounded-full uppercase cursor-pointer text-center flex flex-col justify-center items-center hover:bg-blue-600 transition-all duration-300">
            <FaClipboardList size={30} className="mb-2" />
            <span>ATTENDANCE</span>
          </div>

          {/* Exams Tab */}
          <div className="text-white bg-blue-500 p-4 sm:p-6 rounded-full uppercase cursor-pointer text-center flex flex-col justify-center items-center hover:bg-blue-600 transition-all duration-300">
            <FaBookOpen size={30} className="mb-2" />
            <span>EXAMS</span>
          </div>

          {/* Results Tab */}
          <div className="text-white bg-blue-500 p-4 sm:p-6 rounded-full uppercase cursor-pointer text-center flex flex-col justify-center items-center hover:bg-blue-600 transition-all duration-300">
            <FaChartBar size={30} className="mb-2" />
            <span>RESULTS</span>
          </div>
        </div>

        {/* Cards with Increased Height and Icons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          {/* Digital Classroom */}
          <div className="bg-green-200 shadow-md rounded-md p-6 text-center hover:shadow-xl transform hover:scale-105 transition-all duration-300 h-40 flex flex-col justify-center items-center">
            <SiGoogleclassroom size={50} className="text-green-600 mb-2" />
            <h2 className="text-lg sm:text-xl font-bold">DIGITAL CLASSROOM</h2>
            <p className="text-gray-600 text-sm">Videos | Simulations | Quiz | Key Terms | Pre-Requisite</p>
          </div>

          {/* Assignments */}
          <div className="bg-red-200 shadow-md rounded-md p-6 text-center hover:shadow-xl transform hover:scale-105 transition-all duration-300 h-40 flex flex-col justify-center items-center">
            <FaBook size={50} className="text-red-600 mb-2" />
            <h2 className="text-lg sm:text-xl font-bold">Assignments</h2>
            <p className="text-gray-600 text-sm">Manage and review assignments</p>
          </div>

          {/* Consultancy Services */}
          <div className="bg-amber-200 shadow-md rounded-md p-6 text-center hover:shadow-xl transform hover:scale-105 transition-all duration-300 h-40 flex flex-col justify-center items-center">
            <FaUserMd size={50} className="text-amber-600 mb-2" />
            <h2 className="text-lg sm:text-xl font-bold">Consultancy Services</h2>
            <p className="text-gray-600 text-sm">Personalized Approach | Professionals</p>
          </div>

          {/* Q&A Handling */}
          <div className="bg-indigo-200 shadow-md rounded-md p-6 text-center hover:shadow-xl transform hover:scale-105 transition-all duration-300 h-40 flex flex-col justify-center items-center">
            <FaQuestionCircle size={50} className="text-indigo-600 mb-2" />
            <h2 className="text-lg sm:text-xl font-bold">Handling the Q&A Session</h2>
            <p className="text-gray-600 text-sm">Effective Q&A Handling</p>
          </div>
        </div>

        <div className="p-4">
          <StudentProficiency />
        </div>

        {/* Additional Sections */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <div className="bg-orange-300 shadow-md rounded-md p-6 text-center hover:shadow-xl transform hover:scale-105 transition-all duration-300 h-40 flex flex-col justify-center items-center">
            <VscFeedback size={50} className="text-orange-600 mb-2" />
            <h2 className="text-lg sm:text-xl font-bold">Feedback to Parents</h2>
            <p className="text-gray-600 text-sm">Report parents about their child's current status</p>
          </div>
          <div className="bg-lime-200 shadow-md rounded-md p-6 text-center hover:shadow-xl transform hover:scale-105 transition-all duration-300 h-40 flex flex-col justify-center items-center">
            <GiBookshelf size={50} className="text-lime-600 mb-2" />
            <h2 className="text-lg sm:text-xl font-bold">Study Material</h2>
            <p className="text-gray-600 text-sm">Add and manage study materials for students</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-4">
          {/* Notices */}
          <div className="bg-yellow-50 border border-yellow-300 p-6 rounded-lg shadow-lg text-center transition-all duration-300 hover:shadow-xl">
            <h4 className="font-bold text-xl mb-4 text-yellow-600">📝 NOTICE</h4>
            <div className="space-y-3">
              {notices.map((notice, index) => (
                <div key={index} className="flex justify-between items-center p-3 bg-yellow-100 rounded-md shadow-sm">
                  <p className="text-gray-800">{notice}</p>
                  <button
                    onClick={() => removeNotice(index)}
                    className="text-red-600 underline text-sm transition-colors duration-200 hover:text-red-800"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
            <input
              type="text"
              value={newNotice}
              onChange={(e) => setNewNotice(e.target.value)}
              className="mt-4 p-3 border-2 border-yellow-400 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder="Add a new notice..."
            />
            <button
              onClick={addNotice}
              className="bg-yellow-600 text-white p-3 rounded-md mt-4 w-full transition-transform transform hover:scale-105"
            >
              Add Notice
            </button>
          </div>

          {/* To-Do */}
          <div className="bg-pink-50 border border-pink-300 p-6 rounded-lg shadow-lg text-center transition-all duration-300 hover:shadow-xl">
            <h4 className="font-bold text-xl mb-4 text-pink-600">📋 TO-DO</h4>
            <div className="space-y-3">
              {todos.map((todo, index) => (
                <div key={index} className="flex justify-between items-center p-3 bg-pink-100 rounded-md shadow-sm">
                  <p className="text-gray-800">{todo}</p>
                  <button
                    onClick={() => removeTodo(index)}
                    className="text-red-600 underline text-sm transition-colors duration-200 hover:text-red-800"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
            <input
              type="text"
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
              className="mt-4 p-3 border-2 border-pink-400 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-pink-500"
              placeholder="Add a new to-do..."
            />
            <button
              onClick={addTodo}
              className="bg-pink-600 text-white p-3 rounded-md mt-4 w-full transition-transform transform hover:scale-105"
            >
              Add To-Do
            </button>
          </div>
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="hidden sm:block sm:w-1/5 sm:fixed right-0 top-0 bottom-0 bg-slate-200 p-4">
        {/* Teacher Icon & Profile */}
        <div className="bg-slate-300 p-6 rounded-md shadow-md text-center mb-4">
          <div className="flex flex-col items-center">
            <i className="fas fa-user-tie text-6xl text-blue-700 mb-4"></i> {/* Alternate Teacher Icon */}
            <div className="text-white bg-blue-700 p-4 text-center py-2 rounded-md hover:bg-blue-500 cursor-pointer">
              My Profile
            </div>
          </div>
        </div>

        {/* Event Calendar */}
        <div className="bg-white p-4 rounded-md shadow-md mt-6">
          <MyCalendar />
        </div>
      </div>
    </div>
  );
};

export default TeacherDashboard;
