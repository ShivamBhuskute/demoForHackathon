import React, { useState } from 'react';
import Sidebar from "../Sidebar";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Import the calendar's default CSS for basic styles

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

    return (
        <div className="min-h-screen bg-blue-100 flex overflow-hidden">
            <Sidebar />

            <div className="flex-1 p-5">
                <div className="mb-6 flex flex-col lg:flex-row justify-between items-center">
                    <h1 className="text-3xl font-bold mb-4 lg:mb-0">University Name</h1>
                    <input
                        type="search"
                        placeholder="search"
                        className="px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring w-full lg:w-auto"
                    />
                </div>

                <div className="mb-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
                    <button className="px-8 py-2 bg-pink-200 text-gray-800 rounded-full w-full">Updates</button>
                    <button className="px-8 py-2 bg-pink-200 text-gray-800 rounded-full w-full">Facilities</button>
                    <button className="px-8 py-2 bg-pink-200 text-gray-800 rounded-full w-full">Alumni</button>
                    <button className="px-8 py-2 bg-pink-200 text-gray-800 rounded-full w-full">Complaint</button>
                </div>

                <div className="mb-10 grid grid-cols-1 md:grid-cols-3 gap-5">
                    <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div className="p-6 bg-gray-200 rounded-lg text-center shadow-lg cursor-pointer flex flex-col space-y-4">
                            <h2 className="text-xl font-bold">Student</h2>
                            <button className="bg-blue-600 hover:bg-blue-400 text-white py-2 rounded-lg shadow border border-black">Total Students: 1,200</button>
                            <button className="bg-blue-600 hover:bg-blue-400 text-white py-2 rounded-lg shadow border border-black">View Students</button>
                            <button className="bg-blue-600 hover:bg-blue-400 text-white py-2 rounded-lg shadow border border-black">Manage Students</button>
                        </div>
                        <div className="p-6 bg-gray-200 rounded-lg text-center shadow-lg cursor-pointer flex flex-col space-y-4">
                            <h2 className="text-xl font-bold">Faculty</h2>
                            <button className="bg-blue-600 hover:bg-blue-400 text-white py-2 rounded-lg shadow border border-black">Total Faculty: 300</button>
                            <button className="bg-blue-600 hover:bg-blue-400 text-white py-2 rounded-lg shadow border border-black">View Faculty</button>
                            <button className="bg-blue-600 hover:bg-blue-400 text-white py-2 rounded-lg shadow border border-black">Manage Faculty</button>
                        </div>
                        <div className="p-6 bg-gray-200 rounded-lg text-center shadow-lg cursor-pointer flex flex-col space-y-4">
                            <h2 className="text-xl font-bold">Courses</h2>
                            <button className="bg-blue-600 hover:bg-blue-400 text-white py-2 rounded-lg shadow border border-black">Total Courses: 150</button>
                            <button className="bg-blue-600 hover:bg-blue-400 text-white py-2 rounded-lg shadow border border-black">View Courses</button>
                            <button className="bg-blue-600 hover:bg-blue-400 text-white py-2 rounded-lg shadow border border-black">Manage Courses</button>
                        </div>
                        <div className="p-6 bg-gray-200 rounded-lg text-center shadow-lg cursor-pointer flex flex-col space-y-4">
                            <h2 className="text-xl font-bold">Exams</h2>
                            <button className="bg-blue-600 hover:bg-blue-400 text-white py-2 rounded-lg shadow border border-black">Upcoming Exams</button>
                            <button className="bg-blue-600 hover:bg-blue-400 text-white py-2 rounded-lg shadow border border-black">Schedule Exams</button>
                            <button className="bg-blue-600 hover:bg-blue-400 text-white py-2 rounded-lg shadow border border-black">Manage Exams</button>
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

                <div className="mb-10 grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="p-6 bg-blue-200 rounded-lg text-center shadow-lg cursor-pointer">
                        <h2 className="text-xl font-bold">Faculty Tracking</h2>
                        <p>Track real-time faculty engagement and activities.</p>
                        <button className="mt-2 bg-blue-300 hover:bg-blue-400 text-white py-2 rounded shadow">View Details</button>
                    </div>
                    <div className="p-10 bg-yellow-100 rounded-xl text-center shadow-lg">
                        <h2 className="text-xl font-bold">Notices</h2>
                        <ul className="list-disc list-inside">
                            <li>New course materials available</li>
                            <li>Upcoming holiday notice</li>
                        </ul>
                        <button className="mt-2 bg-blue-300 hover:bg-blue-400 text-white py-2 rounded shadow">Post Notice</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default University;
