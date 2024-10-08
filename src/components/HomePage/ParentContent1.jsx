


// import React, { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import { FaClipboardList, FaChartLine, FaUserCheck, FaBell } from "react-icons/fa";

// function App() {
//   useEffect(() => {
//     AOS.init({ duration: 1000 });
//   }, []);

//   const sections = [
//     {
//       title: "Test Creation & Evaluation Platform",
//       description: "Enable parents to create customized tests and become an active facilitator of their child's self-study routine.",
//       items: [
//         { icon: FaClipboardList, title: "Consultancy Services", description: "Create subject, chapter, or topic-wise tests." },
//         { icon: FaClipboardList, title: "Feedback to Parents", description: "Practice tests for key exams." },
//         { icon: FaClipboardList, title: "Study Material", description: "Assessments with customized duration." },
//         { icon: FaClipboardList, title: "Handling the Q&A Session", description: "Tests with variable validity period." },
//       ],
//       img: "https://www.example.com/classroom.png", // Replace with actual image URL
//       background: "bg-blue-100"
//     },
//     {
//       title: "Attendance and Progress Reports",
//       description: "Notify parents about their child's attendance and learning progress.",
//       items: [
//         { icon: FaBell, title: "Attendance Notifications", description: "Instant notifications for attendance." },
//         { icon: FaUserCheck, title: "In-School Activity", description: "Monitor in-school activities in real-time." },
//         { icon: FaClipboardList, title: "In-Depth Reports", description: "Track learning progress with detailed reports." },
//         { icon: FaClipboardList, title: "Detailed Analytics", description: "Analytics to track learning progress." },
//       ],
//       img: "https://www.example.com/classroom.png", // Replace with actual image URL
//       background: "bg-blue-200"
//     },
//     {
//       title: "School Updates and Reminders",
//       description: "Keep parents informed about school activities and track child’s progress in school.",
//       items: [
//         { icon: FaClipboardList, title: "School Notices", description: "Important school notices and updates." },
//         { icon: FaClipboardList, title: "Timetable Tracking", description: "Stay updated with class schedules and timetables." },
//         { icon: FaClipboardList, title: "Event Updates", description: "Get updates on upcoming school events." },
//         { icon: FaBell, title: "Live Class Reminders", description: "Reminders for live classes and assignments." },
//       ],
//       img: "https://www.example.com/classroom.png", // Replace with actual image URL
//       background: "bg-blue-300"
//     },
//     {
//       title: "Performance Reports and Analytics",
//       description: "Encourage parents to understand their child's strengths, weaknesses, and level of understanding.",
//       items: [
//         { icon: FaChartLine, title: "AI-Powered Reports", description: "Reports powered by AI for performance insights." },
//         { icon: FaClipboardList, title: "Exam Readiness", description: "Assess exam readiness with detailed insights." },
//         { icon: FaClipboardList, title: "Weakness Insights", description: "Identify strong and weak areas of learning." },
//         { icon: FaChartLine, title: "Progress Graphs", description: "Visualize learning with progress graphs." },
//       ],
//       img: "https://www.example.com/classroom.png", // Replace with actual image URL
//       background: "bg-blue-400"
//     }
//   ];

//   return (
//     <div className="bg-blue-50">
//       {sections.map((section, index) => (
//         <section className={`py-16 ${section.background}`} data-aos="fade-up" key={index}>
//           <div className={`container mx-auto flex flex-col md:flex-row ${index % 2 === 1 ? 'md:flex-row-reverse' : ''} items-center`}>
            
//             {/* Image Section */}
//             <div className="w-full md:w-1/2 p-6">
//               <img src={section.img} alt={section.title} className="w-full h-auto rounded-lg shadow-lg" />
//             </div>

//             {/* Content Section */}
//             <div className="w-full md:w-1/2 p-6">
//               <h2 className="text-4xl font-bold text-blue-600">{section.title}</h2>
//               <p className="mt-4 text-lg text-blue-800">{section.description}</p>
//               <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
//                 {section.items.map((item, idx) => (
//                   <div key={idx} className="bg-white p-6 rounded-lg shadow-lg flex items-center">
//                     <item.icon className="text-4xl text-blue-500" />
//                     <div className="ml-4 text-left">
//                       <h3 className="text-xl font-semibold text-blue-600">{item.title}</h3>
//                       <p className="text-blue-800">{item.description}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//           </div>
//         </section>
//       ))}
//     </div>
//   );
// }

// export default App;











import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaClipboardList, FaChartLine, FaUserCheck, FaBell, FaGraduationCap, FaBookOpen, FaComments, FaCalendarAlt } from "react-icons/fa";
import Parent1 from "../../images/Parent1.png";
import Parent2 from "../../images/Parent2.png";
import Parent3 from "../../images/Parent3.png";
import Parent4 from "../../images/Parent4.png";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const sections = [
    {
      title: "Test Creation & Evaluation Platform",
      description: "Enable parents to create customized tests and become an active facilitator of their child's self-study routine.",
      img: Parent1,
      // imgWidth: '300px',
      imgHeight: '400px',
      background: "bg-blue-100",
      items: [
        { icon: FaBookOpen, title: "Consultancy Services", description: "Create subject, chapter, or topic-wise tests." },
        { icon: FaClipboardList, title: "Feedback to Parents", description: "Practice tests for key exams." },
        { icon: FaClipboardList, title: "Study Material", description: "Assessments with customized duration." },
        { icon: FaComments, title: "Handling the Q&A Session", description: "Tests with variable validity period." },
      ],
    },
    {
      title: "Attendance and Progress Reports",
      description: "Notify parents about their child's attendance and learning progress.",
      img: Parent3,
      imgWidth: '850px',
      imgHeight: '280px',
      background: "bg-blue-200",
      items: [
        { icon: FaBell, title: "Attendance Notifications", description: "Instant notifications for attendance." },
        { icon: FaUserCheck, title: "In-School Activity", description: "Monitor in-school activities." },
        { icon: FaClipboardList, title: "In-Depth Reports", description: "Track learning progress with detailed reports." },
        { icon: FaChartLine, title: "Detailed Analytics", description: "Analytics to track learning progress." },
      ],
    },
    {
      title: "School Updates and Reminders",
      description: "Keep parents informed about school activities and track child’s progress.",
      img: Parent4,
      // imgWidth: '320px',
      imgHeight: '500px',
      background: "bg-blue-300",
      items: [
        { icon: FaClipboardList, title: "School Notices", description: "Important school notices." },
        { icon: FaCalendarAlt, title: "Timetable Tracking", description: "Stay updated with class schedules." },
        { icon: FaBell, title: "Event Updates", description: "Get updates on upcoming school events." },
        { icon: FaComments, title: "Live Class Reminders", description: "Reminders for live classes." },
      ],
    },
    {
      title: "Performance Reports and Analytics",
      description: "Encourage parents to understand their child's strengths and weaknesses.",
      img: Parent2,
      // imgWidth: '400px',
      imgHeight: '300px',
      background: "bg-blue-400",
      items: [
        { icon: FaChartLine, title: "AI-Powered Reports", description: "Reports powered by AI." },
        { icon: FaGraduationCap, title: "Exam Readiness", description: "Assess exam readiness." },
        { icon: FaClipboardList, title: "Weakness Insights", description: "Identify strong and weak areas." },
        { icon: FaChartLine, title: "Progress Graphs", description: "Visualize learning with progress graphs." },
      ],
    },
  ];

  return (
    <div className="bg-blue-50">
      {sections.map((section, index) => (
        <section className={`py-16 ${section.background}`} data-aos="fade-up" key={index}>
          <div className={`container mx-auto flex flex-col md:flex-row ${index % 2 === 1 ? 'md:flex-row-reverse' : ''} items-center`}>
            
            {/* Image Section */}
            <div className="w-full md:w-1/2 p-6">
              <img 
                src={section.img} 
                alt={section.title} 
                className="rounded-lg shadow-lg mx-auto" 
                style={{ width: section.imgWidth, height: section.imgHeight }}  // Dynamic sizing
              />
            </div>

            {/* Content Section */}
            <div className="w-full md:w-1/2 p-6">
              <h2 className="text-4xl font-bold text-blue-600">{section.title}</h2>
              <p className="mt-4 text-lg text-blue-800">{section.description}</p>
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {section.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex items-start">
                    <item.icon className="text-2xl text-blue-600" />
                    <div className="ml-4">
                      <h4 className="font-bold">{item.title}</h4>
                      <p>{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}

export default App;