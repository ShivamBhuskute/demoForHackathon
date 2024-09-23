
// import React, { useState } from "react";

// const BehaviorInsightsCard = () => {
//   const [behavioralInsights, setBehavioralInsights] = useState([
//     {
//       id: 1,
//       category: "Academic Performance",
//       behavior: "Completed all homework assignments on time",
//       date: "2024-09-15",
//       status: "Positive",
//     },
//     {
//       id: 2,
//       category: "Social Interaction",
//       behavior: "Worked well in group activities",
//       date: "2024-09-16",
//       status: "Positive",
//     },
//     {
//       id: 3,
//       category: "Emotional Well-being",
//       behavior: "Appeared stressed during the last week",
//       date: "2024-09-18",
//       status: "Needs Attention",
//     },
//     {
//       id: 4,
//       category: "Attention Span",
//       behavior: "Gets distracted in long lectures",
//       date: "2024-09-20",
//       status: "Needs Attention",
//     },
//     {
//       id: 5,
//       category: "Leadership Skills",
//       behavior: "Took initiative in group projects",
//       date: "2024-09-21",
//       status: "Positive",
//     },
//     {
//       id: 6,
//       category: "Punctuality",
//       behavior: "Has been late to class twice this week",
//       date: "2024-09-22",
//       status: "Needs Improvement",
//     },
//     {
//       id: 7,
//       category: "Classroom Participation",
//       behavior: "Actively participated in discussions",
//       date: "2024-09-23",
//       status: "Positive",
//     },
//   ]);


//   const statusColors = {
//     Positive: "bg-green-200 text-green-800",
//     "Needs Attention": "bg-yellow-200 text-yellow-800",
//     "Needs Improvement": "bg-red-200 text-red-800",
//   };

//   const getProgress = (value, recommended) =>
//     Math.round((value / recommended) * 100);

//   return (
//     <div className="flex flex-wrap p-4 space-y-4 rounded-lg bg-cyan-300">
//       {/* Behavioral Insights Section */}
//       <div className="w-full lg:w-full p-4">
//         <div className="p-4 rounded-lg shadow-md w-full max-h-96 overflow-y-auto custom-scrollbar">
//           <h2 className="text-xl font-bold text-blue-600 mb-4">Behavioral Insights</h2>
//           <ul className="space-y-4">
//             {behavioralInsights.map((insight) => (
//               <li
//                 key={insight.id}
//                 className={`p-4 rounded-lg shadow-md transition duration-300 ${statusColors[insight.status]}`}
//               >
//                 <div className="flex justify-between items-center">
//                   <div>
//                     <p className="text-lg font-semibold">{insight.category}</p>
//                     <p className="text-base">{insight.behavior}</p>
//                   </div>
//                   <p className="text-sm text-gray-600">{insight.date}</p>
//                 </div>
//                 <p className="mt-2 font-medium">
//                   Status: <span className="font-bold">{insight.status}</span>
//                 </p>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BehaviorInsightsCard;




import React, { useState } from "react";
import { FaBook, FaUsers, FaSmile, FaClock, FaChalkboardTeacher, FaTrophy, FaHandsHelping } from "react-icons/fa";

const BehaviorInsightsCard = () => {
  const [behavioralInsights, setBehavioralInsights] = useState([
    {
      id: 1,
      category: "Academic Performance",
      behavior: "Completed all homework assignments on time",
      date: "2024-09-15",
      status: "Positive",
      icon: <FaBook />,
    },
    {
      id: 2,
      category: "Social Interaction",
      behavior: "Worked well in group activities",
      date: "2024-09-16",
      status: "Positive",
      icon: <FaUsers />,
    },
    {
      id: 3,
      category: "Emotional Well-being",
      behavior: "Appeared stressed during the last week",
      date: "2024-09-18",
      status: "Needs Attention",
      icon: <FaSmile />,
    },
    {
      id: 4,
      category: "Attention Span",
      behavior: "Gets distracted in long lectures",
      date: "2024-09-20",
      status: "Needs Attention",
      icon: <FaClock />,
    },
    {
      id: 5,
      category: "Leadership Skills",
      behavior: "Took initiative in group projects",
      date: "2024-09-21",
      status: "Positive",
      icon: <FaTrophy />,
    },
    {
      id: 6,
      category: "Punctuality",
      behavior: "Has been late to class twice this week",
      date: "2024-09-22",
      status: "Needs Improvement",
      icon: <FaChalkboardTeacher />,
    },
    {
      id: 7,
      category: "Classroom Participation",
      behavior: "Actively participated in discussions",
      date: "2024-09-23",
      status: "Positive",
      icon: <FaHandsHelping />,
    },
  ]);

  const statusColors = {
    Positive: "bg-green-200 text-green-800",
    "Needs Attention": "bg-yellow-200 text-yellow-800",
    "Needs Improvement": "bg-red-200 text-red-800",
  };

  return (
    <div className="flex flex-wrap p-4 space-y-4 rounded-lg bg-cyan-300">
      <div className="w-full lg:w-full p-4">
        <div className="p-4 rounded-lg shadow-md w-full max-h-96 overflow-y-auto custom-scrollbar">
          <h2 className="text-xl font-bold text-blue-600 mb-4">Behavioral Insights</h2>
          <ul className="space-y-4">
            {behavioralInsights.map((insight) => (
              <li
                key={insight.id}
                className={`p-4 rounded-lg shadow-md transition duration-300 ${statusColors[insight.status]}`}
              >
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl">{insight.icon}</span>
                    <div>
                      <p className="text-lg font-semibold">{insight.category}</p>
                      <p className="text-base">{insight.behavior}</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">{insight.date}</p>
                </div>
                <p className="mt-2 font-medium">
                  Status: <span className="font-bold">{insight.status}</span>
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BehaviorInsightsCard;
