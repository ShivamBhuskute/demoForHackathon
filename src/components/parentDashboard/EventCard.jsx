
// import React from 'react';

// const events = [
//   { date: '16 June, 2024', title: 'School Annual Day', description: 'Join us for the annual day celebration.' },
//   { date: '18 June, 2024', title: 'Sports Day', description: 'Join us for the sports day celebration.' },
//   { date: '20 June, 2024', title: 'PTA Meeting', description: 'Meet your child\'s teachers and discuss' },
//   { date: '25 June, 2024', title: 'Science Fair', description: 'Students showcase their science projects.' },
//   // Add more events here
// ];

// const EventCard = () => {
//   return (
//     <div className="bg-gray-200 p-4 rounded shadow w-full h-full md:col-span-1">
//       <h2 className="text-xl font-bold mb-4">Upcoming Events</h2>
//       <div className="overflow-y-auto h-60 custom-scrollbar">
//         {events.map((event, index) => (
//           <div key={index} className="flex items-start mb-4">
//             <div className="bg-blue-600 text-white py-1 px-2 rounded-xl text-sm font-semibold mr-3">
//               {event.date}
//             </div>
//             <div>
//               <h3 className="text-md font-semibold">{event.title}</h3>
//               <p className="text-sm text-gray-700">{event.description}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default EventCard;




import React from 'react';
import { FaCalendarAlt, FaBullhorn, FaRunning, FaFlask, FaChalkboardTeacher } from 'react-icons/fa';

const events = [
  { date: '16 June, 2024', title: 'School Annual Day', description: 'Join us for the annual day celebration.', icon: <FaBullhorn /> },
  { date: '18 June, 2024', title: 'Sports Day', description: 'Participate in exciting sports events.', icon: <FaRunning /> },
  { date: '20 June, 2024', title: 'PTA Meeting', description: 'Meet your child\'s teachers and discuss their progress.', icon: <FaChalkboardTeacher /> },
  { date: '25 June, 2024', title: 'Science Fair', description: 'Students showcase their science projects.', icon: <FaFlask /> },
  { date: '28 June, 2024', title: 'Art Exhibition', description: 'A display of the finest student artworks.', icon: <FaCalendarAlt /> },
  { date: '1 July, 2024', title: 'School Picnic', description: 'Join us for a fun and refreshing school picnic.', icon: <FaCalendarAlt /> },
];

const EventCard = () => {
  return (
    <div className="bg-gray-200 p-4 rounded shadow w-full h-full md:col-span-1">
      <h2 className="text-xl font-bold mb-4">Upcoming Events</h2>
      <div className="overflow-y-auto h-60 custom-scrollbar space-y-4">
        {events.map((event, index) => (
          <div key={index} className="flex items-start">
            <div className="flex-shrink-0 text-2xl text-blue-600 mr-3">
              {event.icon}
            </div>
            <div>
              <div className="bg-blue-600 text-white py-1 px-2 rounded-xl text-sm font-semibold mb-1">
                {event.date}
              </div>
              <h3 className="text-md font-semibold">{event.title}</h3>
              <p className="text-sm text-gray-700">{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventCard;

