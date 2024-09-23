
// import React from 'react';

// const NoticeCard = () => {
//   const notices = [
//     { id: 1, title: "Holiday Notice", detail: "School will remain closed on 20th Sept for Elections.", important: true },
//     { id: 2, title: "Exam Schedule Update", detail: "The dates for the upcoming exams have been revised.", important: false },
//     { id: 3, title: "New Health Guidelines", detail: "Updated health guidelines have been published on the portal.", important: false },
//   ];

//   return (
//     <div className="bg-gradient-to-r from-indigo-200 via-indigo-300 to-blue-200 p-4 rounded-lg shadow-md w-full max-h-96 overflow-y-auto  custom-scrollbar">
//       <h2 className="text-xl font-bold mb-3">Notices</h2>
//       {notices.map(notice => (
//         <div key={notice.id} className={`p-3 mb-2 rounded-lg shadow-sm ${notice.important ? 'bg-red-100' : 'bg-white'} custom-scrollbar` }>
//           <h3 className="font-semibold">{notice.title}</h3>
//           <p>{notice.detail}</p>
//           <button className="text-indigo-500 hover:text-indigo-600 text-sm mt-2">Read more</button>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default NoticeCard;



import React from 'react';
import { FaExclamationCircle, FaInfoCircle, FaBell } from 'react-icons/fa';

const NoticeCard = () => {
  const notices = [
    { id: 1, title: "Holiday Notice", detail: "School will remain closed on 20th Sept for Elections.", important: true, icon: <FaExclamationCircle /> },
    { id: 2, title: "Exam Schedule Update", detail: "The dates for the upcoming exams have been revised.", important: false, icon: <FaBell /> },
    { id: 3, title: "New Health Guidelines", detail: "Updated health guidelines have been published on the portal.", important: false, icon: <FaInfoCircle /> },
    { id: 4, title: "Parent-Teacher Meeting", detail: "The next PTA meeting is scheduled for 25th Sept.", important: true, icon: <FaExclamationCircle /> },
    { id: 5, title: "Library Timings Update", detail: "The library will now remain open until 6 PM on weekdays.", important: false, icon: <FaBell /> },
  ];

  return (
    <div className="bg-gradient-to-r from-indigo-200 via-indigo-300 to-blue-200 p-4 rounded-lg shadow-md w-full max-h-96 overflow-y-auto custom-scrollbar">
      <h2 className="text-xl font-bold mb-3">Notices</h2>
      {notices.map(notice => (
        <div key={notice.id} className={`p-3 mb-3 flex items-start rounded-lg shadow-sm ${notice.important ? 'bg-red-100' : 'bg-white'}`}>
          {/* Icon */}
          <div className="text-2xl text-indigo-600 mr-4">
            {notice.icon}
          </div>
          {/* Notice Content */}
          <div>
            <h3 className="font-semibold">{notice.title}</h3>
            <p className="text-sm text-gray-700">{notice.detail}</p>
            <button className="text-indigo-500 hover:text-indigo-600 text-sm mt-2">Read more</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NoticeCard;
