import React, { useState } from "react";
import StudentProficiency from "./StudentProfieciency.jsx";
import Calendar from "./Calendar";
import Faculty from "../../images/Faculty.png";
import Sidebar from "./Sidebar"; // Fixed spelling
import axios from "axios";

const TeacherDashboard = () => {
    const [todos, setTodos] = useState([
        "Review Assignments",
        "Prepare for Q&A",
        "Upload Grades",
    ]);

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
          `http://localhost:3000/api/aI/predict-student`,
          { uniqueId } // Send 'id' field instead of 'uniqueId'
        );
        console.log("Prediction Result:", response.data);
        setPredictionResult(response.data);
      } catch (error) {
        console.error("Error fetching prediction:", error);
      }
    };

    return (
        <div className="flex h-screen">
            {/* Sidebar */}
            <Sidebar className="hidden sm:block sm:w-1/4 fixed top-0 bottom-0 left-0 bg-gray-800 text-white" />

            {/* Main Content */}
            <div className="flex-1 ml-0 sm:ml-1/4 lg:mr-[20%] sm:mr-1/5 p-4 overflow-auto ">
                {/* Header */}
                <div className="flex flex-col sm:flex-row justify-between items-center mb-4">
                    <div className="flex flex-col w-full sm:w-2/3">
                        <h1 className="text-3xl sm:text-5xl font-bold mb-2">
                            Teacher's Dashboard
                        </h1>
                        <div className="bg-white shadow-md p-2 flex rounded-full border border-black">
                            <input
                                type="text"
                                className="flex-grow p-2 focus:outline-none"
                                placeholder="Search..."
                            />
                            <button className="bg-blue-500 text-white p-2 rounded-md mr-4">
                                🔍
                            </button>
                        </div>
                    </div>
                    <div className="flex items-center space-x-4 mt-4 sm:mt-0">
                        <select className="bg-gray-200 p-2 sm:p-4 rounded-md shadow-md">
                            <option>Foundational Stage</option>
                            <option>Preparatory Stage</option>
                            <option>Middle Stage</option>
                            <option>Secondary Stage</option>
                        </select>
                        <div className="bg-blue-600 p-2 sm:p-4 rounded-full shadow-md">
                            🔔
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
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4 text-sm sm:text-lg font-semibold mb-4">
                    <div className="text-white bg-blue-500 p-2 sm:p-4 rounded-full uppercase cursor-pointer text-center">
                        STUDENTS
                    </div>
                    <div className="text-white bg-blue-500 p-2 sm:p-4 rounded-full uppercase cursor-pointer text-center">
                        ATTENDANCE
                    </div>
                    <div className="text-white bg-blue-500 p-2 sm:p-4 rounded-full uppercase cursor-pointer text-center">
                        EXAMS
                    </div>
                    <div className="text-white bg-blue-500 p-2 sm:p-4 rounded-full uppercase cursor-pointer text-center">
                        RESULTS
                    </div>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4 mb-4">
                    <div className="bg-green-200 shadow-md rounded-md p-4 text-center hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                        <h2 className="text-lg sm:text-xl font-bold">
                            DIGITAL CLASSROOM
                        </h2>
                        <p className="text-gray-600 text-sm">
                            Videos | Simulations | Quiz | Key Terms |
                            Pre-Requisite
                        </p>
                    </div>
                    <div className="bg-red-200 shadow-md rounded-md p-4 text-center hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                        <h2 className="text-lg sm:text-xl font-bold">
                            Assignments
                        </h2>
                        <p className="text-gray-600 text-sm">
                            Manage and review assignments
                        </p>
                    </div>
                    <div className="bg-amber-200 shadow-md rounded-md p-4 text-center hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                        <h2 className="text-lg sm:text-xl font-bold">
                            Consultancy Services
                        </h2>
                        <p className="text-gray-600 text-sm">
                            Personalized Approach | Professionals
                        </p>
                    </div>
                    <div className="bg-indigo-200 shadow-md rounded-md p-4 text-center hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                        <h2 className="text-lg sm:text-xl font-bold">
                            Handling the Q&A Session
                        </h2>
                        <p className="text-gray-600 text-sm">
                            Effective Q&A Handling
                        </p>
                    </div>
                </div>

                <div className="p-4">
                    <StudentProficiency />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4 mb-4">
                    <div className="bg-orange-300 shadow-md rounded-md p-4 text-center hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                        <h2 className="text-lg sm:text-xl font-bold">
                            Feedback to Parents
                        </h2>
                        <p className="text-gray-600 text-sm">
                            Report parents about their child's current status
                        </p>
                    </div>
                    <div className="bg-lime-200 shadow-md rounded-md p-4 text-center hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                        <h2 className="text-lg sm:text-xl font-bold">
                            Students Query Management
                        </h2>
                        <p className="text-gray-600 text-sm">
                            Manage and review students' questions
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4">
                    {/* Notices */}
                    <div className="bg-yellow-200 p-4 rounded-md shadow-md text-center">
                        <h4 className="font-bold">NOTICE</h4>
                        <div>
                            {notices.map((notice, index) => (
                                <div
                                    key={index}
                                    className="flex justify-between items-center mb-2"
                                >
                                    <p className="text-gray-700">{notice}</p>
                                    <button
                                        onClick={() => removeNotice(index)}
                                        className="text-red-500"
                                    >
                                        ❌
                                    </button>
                                </div>
                            ))}
                        </div>
                        <input
                            type="text"
                            value={newNotice}
                            onChange={(e) => setNewNotice(e.target.value)}
                            className="mt-2 p-2 border rounded-md w-full"
                            placeholder="Add a new notice..."
                        />
                        <button
                            onClick={addNotice}
                            className="bg-blue-500 text-white p-2 rounded-md mt-2 w-full"
                        >
                            Add Notice
                        </button>
                    </div>

                    {/* To-Do */}
                    <div className="bg-pink-200 p-4 rounded-md shadow-md text-center">
                        <h4 className="font-bold">TO DO</h4>
                        <div>
                            {todos.map((todo, index) => (
                                <div
                                    key={index}
                                    className="flex justify-between items-center mb-2"
                                >
                                    <p className="text-gray-700">{todo}</p>
                                    <button
                                        onClick={() => removeTodo(index)}
                                        className="text-red-500"
                                    >
                                        ❌
                                    </button>
                                </div>
                            ))}
                        </div>
                        <input
                            type="text"
                            value={newTodo}
                            onChange={(e) => setNewTodo(e.target.value)}
                            className="mt-2 p-2 border rounded-md w-full"
                            placeholder="Add a new to-do..."
                        />
                        <button
                            onClick={addTodo}
                            className="bg-blue-500 text-white p-2 rounded-md mt-2 w-full"
                        >
                            Add To-Do
                        </button>
                    </div>
                </div>
            </div>

            {/* Right Sidebar */}
            <div className="hidden sm:block sm:w-1/5 sm:fixed right-0 top-0 bottom-0 bg-slate-200 p-4">
                {/* Avatar & Profile */}
                <div className="bg-slate-300 p-4 rounded-md shadow-md text-center mb-4">
                    <img
                        src={Faculty}
                        alt="Avatar"
                        className="mx-auto rounded-t-lg"
                    />
                    <div className="text-white bg-blue-700 p-2 mb-3 rounded-b-md hover:bg-blue-500 cursor-pointer">
                        My Profile
                    </div>
                    {/* Calendar */}
                    <Calendar />
                </div>
            </div>
        </div>
    );
};

export default TeacherDashboard;
