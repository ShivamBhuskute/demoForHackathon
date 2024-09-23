import React, { useState } from 'react';
import Sidebar from "../Sidebar";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Import the calendar's default CSS for basic styles
import { FaUsersCog, FaUserGraduate } from 'react-icons/fa';
import { FaBell, FaPencilAlt, FaUsers, FaExclamationCircle } from 'react-icons/fa';
import { MdInsights } from "react-icons/md";


function University() {
    const [eventTitle, setEventTitle] = useState('');
    const [eventDescription, setEventDescription] = useState('');
    const [date, setDate] = useState(new Date());

    // Handle form submission
    const handleEventSubmit = (e) => {
        e.preventDefault();
        console.log('Event Title:', eventTitle);
        console.log('Event Description:', eventDescription);
        console.log('Event Date:', date);
        setEventTitle('');
        setEventDescription('');
    };

    // Styles for the calendar to fit well within its container
    const calendarStyle = {
        maxWidth: '100%',
        height: '250px',
        overflow: 'hidden'
    };
    const [notices, setNotices] = useState(["Meeting at 3 PM"]);

    const [newNotice, setNewNotice] = useState("");

    const addNotice = () => {
        if (newNotice) {
            setNotices([...notices, newNotice]);
            setNewNotice("");
        }
    };

    const removeNotice = (index) => {
        setNotices(notices.filter((_, i) => i !== index));
    };


    return (
        <div className="min-h-screen bg-blue-100 flex overflow-hidden">
            <Sidebar />

            <div className="flex-1 p-5">
                <div className="flex flex-col w-full sm:w-2/3">
                    <h1 className="text-2xl sm:text-5xl font-bold mb-2">University's Dashboard</h1>
                    <div className="flex items-center justify-between w-full mt-2">

                        {/* Search Bar Section */}
                        <div className="flex items-center w-full bg-white shadow-lg p-1 rounded-lg border border-gray-300 hover:shadow-xl transition-all duration-300">
                            <input
                                type="text"
                                className="flex-grow p-1 text-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md"
                                placeholder="Search for something..."
                            />
                            <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition-all duration-300 ml-2">
                                Search
                            </button>
                        </div>
                        {/* Notification Bell at the Right End */}
                        <div className="ml-4 ">
                            <div className="bg-yellow-400 p-2 sm:p-4 rounded-full shadow-md flex items-center justify-center">
                                < FaBell size={24} className="text-white" />
                            </div>
                        </div>
                    </div>



                </div>

                <div className="mb-6 mt-5 grid grid-cols-2 sm:grid-cols-4 gap-3">

                    {/* Updates Button */}
                    <button className="flex flex-col items-center justify-center px-8 py-6 bg-pink-200 text-gray-800 rounded-full w-full transition-transform transform hover:scale-105 hover:shadow-lg duration-300">
                        <i className="fas fa-bell mb-2 text-3xl text-gray-600"></i> {/* Icon for Updates */}
                        <span className="text-lg">Updates</span>
                    </button>

                    {/* Exams Button */}
                    <button className="flex flex-col items-center justify-center px-8 py-6 bg-pink-200 text-gray-800 rounded-full w-full transition-transform transform hover:scale-105 hover:shadow-lg duration-300">
                        <i className="fas fa-pencil-alt mb-2 text-3xl text-gray-600"></i> {/* Icon for Exams */}
                        <span className="text-xl">Exams</span>
                    </button>

                    {/* Alumni Button */}
                    <button className="flex flex-col items-center justify-center px-8 py-6 bg-pink-200 text-gray-800 rounded-full w-full transition-transform transform hover:scale-105 hover:shadow-lg duration-300">
                        <i className="fas fa-users mb-2 text-3xl text-gray-600"></i> {/* Icon for Alumni */}
                        <span className="text-lg">Alumni</span>
                    </button>

                    {/* Complaint Button */}
                    <button className="flex flex-col items-center justify-center px-8 py-6 bg-pink-200 text-gray-800 rounded-full w-full transition-transform transform hover:scale-105 hover:shadow-lg duration-300">
                        <i className="fas fa-exclamation-circle mb-2 text-3xl text-gray-600"></i> {/* Icon for Complaint */}
                        <span className="text-lg">Complaint</span>
                    </button>

                </div>



                <div className="mb-10 grid grid-cols-1 md:grid-cols-3 gap-5">
                    <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8">

                        {/* Student Section */}
                        <div className="p-8 bg-gray-200 rounded-lg text-center shadow-lg cursor-pointer flex flex-col space-y-6 transform hover:scale-105 transition-transform duration-300">
                            <h2 className="text-3xl font-bold flex items-center justify-center">
                                <i className="fas fa-user-graduate text-5xl mr-4 text-blue-600"></i> {/* Increased Icon and Title Size */}
                                Student
                            </h2>
                            <div className="flex items-center justify-between">
                                <i className="fas fa-users text-3xl text-blue-600"></i> {/* Icon kept */}
                                <button className="bg-blue-600 hover:bg-blue-400 text-white py-2 px-4 rounded-lg shadow border border-black text-sm w-full ml-4"> {/* Full-width Button */}
                                    Total Students: 1,200
                                </button>
                            </div>
                            <div className="flex items-center justify-between">
                                <i className="fas fa-eye text-3xl text-blue-600"></i>
                                <button className="bg-blue-600 hover:bg-blue-400 text-white py-2 px-4 rounded-lg shadow border border-black text-sm w-full ml-4">View Students</button>
                            </div>
                            <div className="flex items-center justify-between">
                                <i className="fas fa-tasks text-3xl text-blue-600"></i>
                                <button className="bg-blue-600 hover:bg-blue-400 text-white py-2 px-4 rounded-lg shadow border border-black text-sm w-full ml-4">Manage Students</button>
                            </div>
                        </div>

                        {/* Faculty Section */}
                        <div className="p-8 bg-gray-200 rounded-lg text-center shadow-lg cursor-pointer flex flex-col space-y-6 transform hover:scale-105 transition-transform duration-300">
                            <h2 className="text-3xl font-bold flex items-center justify-center">
                                <i className="fas fa-chalkboard-teacher text-5xl mr-4 text-blue-600"></i> Faculty
                            </h2>
                            <div className="flex items-center justify-between">
                                <i className="fas fa-users-cog text-3xl text-blue-600"></i>
                                <button className="bg-blue-600 hover:bg-blue-400 text-white py-2 px-4 rounded-lg shadow border border-black text-sm w-full ml-4">Total Faculty: 300</button>
                            </div>
                            <div className="flex items-center justify-between">
                                <i className="fas fa-eye text-3xl text-blue-600"></i>
                                <button className="bg-blue-600 hover:bg-blue-400 text-white py-2 px-4 rounded-lg shadow border border-black text-sm w-full ml-4">View Faculty</button>
                            </div>
                            <div className="flex items-center justify-between">
                                <i className="fas fa-tasks text-3xl text-blue-600"></i>
                                <button className="bg-blue-600 hover:bg-blue-400 text-white py-2 px-4 rounded-lg shadow border border-black text-sm w-full ml-4">Manage Faculty</button>
                            </div>
                        </div>

                        {/* Courses Section */}
                        <div className="p-8 bg-gray-200 rounded-lg text-center shadow-lg cursor-pointer flex flex-col space-y-6 transform hover:scale-105 transition-transform duration-300">
                            <h2 className="text-3xl font-bold flex items-center justify-center">
                                <i className="fas fa-book text-5xl mr-4 text-blue-600"></i> Courses
                            </h2>
                            <div className="flex items-center justify-between">
                                <i className="fas fa-list-ul text-3xl text-blue-600"></i>
                                <button className="bg-blue-600 hover:bg-blue-400 text-white py-2 px-4 rounded-lg shadow border border-black text-sm w-full ml-4">Total Courses: 150</button>
                            </div>
                            <div className="flex items-center justify-between">
                                <i className="fas fa-eye text-3xl text-blue-600"></i>
                                <button className="bg-blue-600 hover:bg-blue-400 text-white py-2 px-4 rounded-lg shadow border border-black text-sm w-full ml-4">View Courses</button>
                            </div>
                            <div className="flex items-center justify-between">
                                <i className="fas fa-tasks text-3xl text-blue-600"></i>
                                <button className="bg-blue-600 hover:bg-blue-400 text-white py-2 px-4 rounded-lg shadow border border-black text-sm w-full ml-4">Manage Courses</button>
                            </div>
                        </div>

                        {/* Parents Section */}
                        <div className="p-8 bg-gray-200 rounded-lg text-center shadow-lg cursor-pointer flex flex-col space-y-6 transform hover:scale-105 transition-transform duration-300">
                            <h2 className="text-3xl font-bold flex items-center justify-center">
                                <i className="fas fa-user-friends text-5xl mr-4 text-blue-600"></i> Parents
                            </h2>
                            <div className="flex items-center justify-between">
                                <i className="fas fa-users text-3xl text-blue-600"></i>
                                <button className="bg-blue-600 hover:bg-blue-400 text-white py-2 px-4 rounded-lg shadow border border-black text-sm w-full ml-4">Total Parents: 1,200</button>
                            </div>
                            <div className="flex items-center justify-between">
                                <i className="fas fa-eye text-3xl text-blue-600"></i>
                                <button className="bg-blue-600 hover:bg-blue-400 text-white py-2 px-4 rounded-lg shadow border border-black text-sm w-full ml-4">View Parents</button>
                            </div>
                            <div className="flex items-center justify-between">
                                <i className="fas fa-tasks text-3xl text-blue-600"></i>
                                <button className="bg-blue-600 hover:bg-blue-400 text-white py-2 px-4 rounded-lg shadow border border-black text-sm w-full ml-4">Manage Parents</button>
                            </div>
                        </div>

                    </div>





                    <div className="col-span-1 p-5 bg-yellow-100 rounded-xl text-center shadow-lg">
                        <Calendar
                            onChange={setDate}
                            value={date}
                            style={calendarStyle}
                            className="border-0 shadow-lg rounded-lg overflow-hidden"
                        />
                        <form onSubmit={handleEventSubmit} className="mt-4">
                            <input
                                type="text"
                                placeholder="Add Title"
                                value={eventTitle}
                                onChange={(e) => setEventTitle(e.target.value)}
                                className="mt-2 p-2 w-full rounded border border-gray-300"
                                required
                            />
                            <textarea
                                placeholder="Add Description"
                                value={eventDescription}
                                onChange={(e) => setEventDescription(e.target.value)}
                                className="mt-2 p-2 w-full rounded border border-gray-300"
                                rows="3"
                                required
                            />
                            <button type="submit" className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Submit Event</button>
                        </form>
                    </div>
                </div>

                {/* Cards with Increased Height and Icons */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    {/* Digital Classroom */}
                    <div className="bg-green-200 shadow-md rounded-md p-8 text-center hover:shadow-xl transform hover:scale-105 transition-all duration-300 h-40 flex flex-col justify-center items-center">
                        <i className="fas fa-chalkboard-teacher text-3xl text-blue-600 mb-2"></i>
                        <h2 className="text-2xl sm:text-xl font-bold">FACULTY TRACKING</h2>
                        <p className="text-gray-600 text-lg sm:text-sm">Performance Reviews | Recorded Videos | Professional Development | Research Activity | Profile Management</p>
                        <button className="mt-2 bg-blue-300 hover:bg-blue-400 text-black py-2 px-2 rounded shadow">View Details</button>
                    </div>

                    {/* Assignments */}
                    <div className="bg-red-200 shadow-md rounded-md p-8 text-center hover:shadow-xl transform hover:scale-105 transition-all duration-300 h-40 flex flex-col justify-center items-center">
                        <i className="fas fa-chalkboard-teacher text-3xl text-blue-600 mb-2"></i>
                        <h2 className="text-2xl sm:text-xl font-bold">STUDENT TRACKING</h2>
                        <p className="text-gray-600 text-lg sm:text-sm">Engagement Metrics | Feedback Collection | Grades and Assessments | Alerts and Notifications | Profile Management</p>
                        <button className="mt-2 bg-blue-300 hover:bg-blue-400 text-black py-2 px-2 rounded shadow">View Details</button>
                    </div>
                </div>

                <div className="mb-10 grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="p-6 bg-gradient-to-r from-purple-400 to-blue-400 rounded-lg text-center shadow-lg cursor-pointer transition-transform transform hover:scale-105">
                        <h2 className="text-2xl font-bold flex items-center justify-center">
                            <i className="fas fa-chart-line text-3xl mr-2"></i> Reports
                        </h2>

                        <div className="flex justify-around mt-4">
                            {/* Student Report Section */}
                            <div className="bg-white p-4 rounded-lg shadow-lg flex flex-col items-center">
                                <i className="fas fa-user-graduate text-3xl text-blue-600 mb-2"></i>
                                <h3 className="text-lg font-semibold">Student Reports</h3>
                                <p className="text-sm text-gray-600">Track student engagement and performance.</p>
                                <button className="mt-2 bg-blue-300 hover:bg-blue-400 text-white py-1 px-4 rounded shadow">View Details</button>
                            </div>

                            {/* Faculty Report Section */}
                            <div className="bg-white p-4 rounded-lg shadow-lg flex flex-col items-center">
                                <i className="fas fa-chalkboard-teacher text-3xl text-blue-600 mb-2"></i>
                                <h3 className="text-lg font-semibold">Faculty Reports</h3>
                                <p className="text-sm text-gray-600">Track faculty engagement and activities.</p>
                                <button className="mt-2 bg-blue-300 hover:bg-blue-400 text-white py-1 px-4 rounded shadow">View Details</button>
                            </div>
                        </div>
                    </div>


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
                            className="bg-yellow-500 text-white p-3 rounded-md mt-4 w-full transition-transform transform hover:scale-105"
                        >
                            Add Notice
                        </button>
                    </div>

                </div>

            </div>
        </div>
    );
}

export default University;
