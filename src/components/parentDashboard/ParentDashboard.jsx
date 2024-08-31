import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'; // Make sure to import the CSS for the date picker

const ParentDashboard = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white p-4">
        <div className="text-blue-700 font-bold text-xl mb-6">Studdy</div>
        <ul className="space-y-4 cursor-pointer">
          <li className="text-blue-700 font-semibold">Home</li>
          <li>Lessons</li>
          <li>Timetable</li>
          <li>Homework</li>
          <li>Messages</li>
          <li>Assessments</li>
          <li className="mt-8">Support</li>
          <li>Settings</li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div className='bg-blue-700 rounded-lg mr-3'>
            <h1 className="text-3xl text-white font-semibold mt-2">Welcome back, James 👋</h1>
            <p className="text-white mt-4 mb-2">You've learned 70% of your goal this week! Keep it up and improve your progress.</p>
          </div>
          <div className="flex items-center space-x-4 -mt-1 ">
            <div className="bg-white p-1 rounded-lg shadow-lg">
              <img
                src="https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?size=338&ext=jpg&ga=GA1.1.2113030492.1720310400&semt=sph"
                alt="profile pic"
                className="rounded-full size-20"
              />
            <p className='mt-1'>
              James
            </p>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="bg-white p-3 rounded-lg shadow-lg">
            <h3 className="font-semibold cursor-pointer">Attendance</h3>
            <p className="text-xl font-bold mt-2">19/20</p>
            <span className="text-gray-600 text-sm ">Well done! You're attending all lessons. Keep going!</span>
          </div>
          <div className="bg-white p-3 rounded-lg shadow-lg">
            <h3 className="font-semibold cursor-pointer">Homework</h3>
            <p className="text-xl font-bold mt-2">53/56</p>
            <span className="text-gray-600 text-sm ">Don't forget your last homework.</span>
          </div>
          <div className="bg-white p-3 rounded-lg shadow-lg">
            <h3 className="font-semibold cursor-pointer">Rating</h3>
            <p className="text-xl font-bold mt-2">89/100</p>
            <button className="text-blue-700 text-lg font-bold pt-3 ">Go to report</button>
          </div>
        </div>

        {/* Timetable and Events */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="font-semibold mb-4 text-lg">Timetable 🗓️</h3>
            {/* Date Picker for selecting the date */}
            <div className="mb-4">
              <DatePicker
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                className="p-2 border border-gray-300 rounded"
              />
            </div>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span>Mon 27 Mar</span>
                <span>10:00 - 11:00</span>
              </div>
              <div className="flex justify-between">
                <span>Tue 28 Mar</span>
                <span>11:00 - 12:00</span>
              </div>
              {/* Add more timetable entries as needed */}
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="font-semibold mb-4">Upcoming events</h3>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span>English lessons</span>
                <span className='cursor-pointer text-blue-700'>More details</span>
              </div>
              <div className="flex justify-between">
                <span >BootCamp</span>
                <span className='cursor-pointer text-blue-700'>More details</span>
              </div>
              <div className="flex justify-between">
                <span >science test</span>
                <span className='cursor-pointer text-blue-700'>More details</span>
              </div>
              {/* Add more events as needed */}
            </div>
          </div>
        </div>

        {/* Homework Progress */}
        <div className="bg-white p-6 rounded-lg shadow-lg mt-6">
          <h3 className="font-semibold mb-4">Homework progress</h3>
          <ul className="space-y-4">
            <li className="flex justify-between">
              <span>Rational Inequalities, AI Assessment #5</span>
              <span>Due: 28 Mar 2024</span>
            </li>
            <li className="flex justify-between">
              <span>All about Homestats Quiz</span>
              <span>Due: 31 Mar 2024</span>
            </li>
            {/* Add more homework items as needed */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ParentDashboard;
