// import React from 'react';

// const AcademicCalendarCard = () => {
//   return (
//     <div className="bg-lime-200 p-4 rounded shadow-lg h-64">
//       <h2 className="text-xl font-bold">Academic Calendar</h2>
//     </div>
//   );
// };

// export default AcademicCalendarCard;

// import React from 'react';
// import FullCalendar from '@fullcalendar/react';
// import dayGridPlugin from '@fullcalendar/daygrid';
// import timeGridPlugin from '@fullcalendar/timegrid';
// import interactionPlugin from '@fullcalendar/interaction'; // for selectable

// const AcademicCalendarCard = () => {
//   const handleDateClick = (arg) => {
//     alert('Date clicked: ' + arg.dateStr);
//   };

//   return (

//     <div className="p-5 bg-white rounded-lg shadow-lg mx-auto">
//       <FullCalendar
//         plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
//         initialView="dayGridMonth"
//         headerToolbar={{
//           left: 'prev,next today',
//           center: 'title',
//           right: 'dayGridMonth,timeGridWeek,timeGridDay'
//         }}
//         editable={true}
//         selectable={true}
//         selectMirror={true}
//         dayMaxEvents={true}
//         weekends={true}

//         dateClick={handleDateClick}
//         customButtons={{
//           myCustomButton: {
//             text: 'Custom Button',
//             click: function() {
//               alert('Clicked the custom button!');
//             }
//           }
//         }}
//         // Customizing the buttons with Tailwind CSS
//         buttonClassNames="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//         contentHeight="auto"
//         aspectRatio={1}
//         height={650}
//       />
//     </div>
//   );
// };

// export default AcademicCalendarCard;

// import React, { useState } from 'react';
// import Calendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css'; // Import the calendar's default CSS for basic styles

// const AcademicCalendarCard = () => {
//   const [date, setDate] = useState(new Date());

//   return (
//     <div className="bg-lime-200 pt-4 pl-2 pb-4 rounded shadow-lg flex flex-col justify-center items-center">
//       <h2 className="text-xl font-bold mb-4">Academic Calendar</h2>
//       <div className="w-11/12">
//         <Calendar
//           onChange={setDate}
//           value={date}
//           className=" rounded-xl"
//           tileClassName="text-center text-sm "
//         />
//       </div>
//     </div>
//   );
// };

// export default AcademicCalendarCard;

import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Import the calendar's default CSS for basic styles

const AcademicCalendarCard = () => {
  const [date, setDate] = useState(new Date());
  const [eventTitle, setEventTitle] = useState('');
  const [eventDescription, setEventDescription] = useState('');

  const handleEventSubmit = (e) => {
    e.preventDefault();
    // Logic to add the event to your calendar or store it in your state/database
    console.log('Event Title:', eventTitle);
    console.log('Event Description:', eventDescription);
    console.log('Event Date:', date);
    // Reset the form after submission
    setEventTitle('');
    setEventDescription('');
  };

  return (
    <div className="bg-lime-200 p-4 rounded shadow-lg grid grid-cols-1 md:grid-cols-2 gap-4">
      {/* Calendar Section */}
      <div className="flex flex-col items-center">
        <h2 className="text-xl font-bold mb-4">Academic Calendar</h2>
        <div className="w-full">
          <Calendar
            onChange={setDate}
            value={date}
            className="rounded-xl"
            tileClassName="text-center text-sm"
          />
        </div>
      </div>
      
      {/* Event Creation Section */}
      <div className="flex flex-col justify-center">
        <h2 className="text-xl font-bold mb-4">Add Event</h2>
        <form onSubmit={handleEventSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Event Title</label>
            <input
              type="text"
              value={eventTitle}
              onChange={(e) => setEventTitle(e.target.value)}
              className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              placeholder="Enter event title"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Description</label>
            <textarea
              value={eventDescription}
              onChange={(e) => setEventDescription(e.target.value)}
              className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              placeholder="Enter event description"
              rows="3"
              required
            ></textarea>
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              Add Event
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AcademicCalendarCard;