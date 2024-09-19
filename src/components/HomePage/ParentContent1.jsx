// import React, { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import { FaBell, FaClipboardList, FaUserCheck, FaChartLine } from "react-icons/fa";

// function ParentContent1() {
//   useEffect(() => {
//     AOS.init({ duration: 1000 });
//   }, []);

//   return (
//     <div className="bg-blue-50">
//       {/* Test Creation Section */}
//       <section className="py-16 bg-blue-100" data-aos="fade-up">
//         <div className="container mx-auto text-center px-6">
//           <h2 className="text-4xl font-bold text-blue-600">Test Creation & Evaluation Platform</h2>
//           <p className="mt-4 text-lg text-blue-800">
//             Enable parents to create customized tests and become active facilitators of their child's self-study routine.
//           </p>
//           <div className="mt-8 flex justify-center space-x-6">
//             {/* Icon Cards */}
//             <div className="bg-white p-6 rounded-lg shadow-lg flex items-center">
//               <FaClipboardList className="text-4xl text-blue-500" />
//               <div className="ml-4 text-left">
//                 <h3 className="text-xl font-semibold text-blue-600">Subject/Chapter Tests</h3>
//                 <p className="text-blue-800">Create tests for subjects or chapters.</p>
//               </div>
//             </div>
//             <div className="bg-white p-6 rounded-lg shadow-lg flex items-center">
//               <FaClipboardList className="text-4xl text-blue-500" />
//               <div className="ml-4 text-left">
//                 <h3 className="text-xl font-semibold text-blue-600">Practice Tests</h3>
//                 <p className="text-blue-800">For JEE/NEET, K12.</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Attendance Section */}
//       <section className="py-16 bg-blue-200" data-aos="fade-right">
//         <div className="container mx-auto text-center px-6">
//           <h2 className="text-4xl font-bold text-blue-600">Attendance and Progress Reports</h2>
//           <p className="mt-4 text-lg text-blue-800">Notify parents about their child's attendance and learning progress.</p>
//           <div className="mt-8 flex justify-center space-x-6">
//             <div className="bg-white p-6 rounded-lg shadow-lg flex items-center">
//               <FaBell className="text-4xl text-blue-500" />
//               <div className="ml-4 text-left">
//                 <h3 className="text-xl font-semibold text-blue-600">Attendance Notifications</h3>
//                 <p className="text-blue-800">Real-time alerts on attendance.</p>
//               </div>
//             </div>
//             <div className="bg-white p-6 rounded-lg shadow-lg flex items-center">
//               <FaUserCheck className="text-4xl text-blue-500" />
//               <div className="ml-4 text-left">
//                 <h3 className="text-xl font-semibold text-blue-600">Performance Reports</h3>
//                 <p className="text-blue-800">Track detailed performance.</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* School Updates Section */}
//       <section className="py-16 bg-blue-300" data-aos="fade-left">
//         <div className="container mx-auto text-center px-6">
//           <h2 className="text-4xl font-bold text-blue-600">School Updates and Reminders</h2>
//           <p className="mt-4 text-lg text-blue-800">Stay updated with school notices and reminders.</p>
//           <div className="mt-8 flex justify-center space-x-6">
//             <div className="bg-white p-6 rounded-lg shadow-lg flex items-center">
//               <FaClipboardList className="text-4xl text-blue-500" />
//               <div className="ml-4 text-left">
//                 <h3 className="text-xl font-semibold text-blue-600">Timetable Tracking</h3>
//                 <p className="text-blue-800">Stay informed of school events.</p>
//               </div>
//             </div>
//             <div className="bg-white p-6 rounded-lg shadow-lg flex items-center">
//               <FaBell className="text-4xl text-blue-500" />
//               <div className="ml-4 text-left">
//                 <h3 className="text-xl font-semibold text-blue-600">Reminders</h3>
//                 <p className="text-blue-800">Reminders for assignments and live classes.</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Performance Analytics Section */}
//       <section className="py-16 bg-blue-400" data-aos="fade-up">
//         <div className="container mx-auto text-center px-6">
//           <h2 className="text-4xl font-bold text-blue-600">Performance Reports and Analytics</h2>
//           <p className="mt-4 text-lg text-blue-800">
//             Encourage parents to understand their child's strengths, weaknesses and level of understanding.
//           </p>
//           <div className="mt-8 flex justify-center space-x-6">
//             <div className="bg-white p-6 rounded-lg shadow-lg flex items-center">
//               <FaChartLine className="text-4xl text-blue-500" />
//               <div className="ml-4 text-left">
//                 <h3 className="text-xl font-semibold text-blue-600">AI-powered Reports</h3>
//                 <p className="text-blue-800">Detailed reports based on performance.</p>
//               </div>
//             </div>
//             <div className="bg-white p-6 rounded-lg shadow-lg flex items-center">
//               <FaClipboardList className="text-4xl text-blue-500" />
//               <div className="ml-4 text-left">
//                 <h3 className="text-xl font-semibold text-blue-600">Progress Graphs</h3>
//                 <p className="text-blue-800">Visualize performance with charts.</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

// export default ParentContent1;


import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaClipboardList, FaChartLine, FaUserCheck, FaBell } from "react-icons/fa";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const sections = [
    {
      title: "Test Creation & Evaluation Platform",
      description: "Enable parents to create customized tests and become an active facilitator of their child's self-study routine.",
      items: [
        { icon: FaClipboardList, title: "Subject/Chapter Tests", description: "Create subject, chapter, or topic-wise tests." },
        { icon: FaClipboardList, title: "Practice Tests", description: "Practice tests for key exams (JEE/NEET/K12)." },
        { icon: FaClipboardList, title: "Custom Duration", description: "Assessments with customized duration." },
        { icon: FaClipboardList, title: "Variable Validity", description: "Tests with variable validity period." },
      ],
      img: "https://www.example.com/classroom.png", // Replace with actual image URL
      background: "bg-blue-100"
    },
    {
      title: "Attendance and Progress Reports",
      description: "Notify parents about their child's attendance and learning progress.",
      items: [
        { icon: FaBell, title: "Attendance Notifications", description: "Instant notifications for attendance." },
        { icon: FaUserCheck, title: "In-School Activity", description: "Monitor in-school activities in real-time." },
        { icon: FaClipboardList, title: "In-Depth Reports", description: "Track learning progress with detailed reports." },
        { icon: FaClipboardList, title: "Detailed Analytics", description: "Analytics to track learning progress." },
      ],
      img: "https://www.example.com/classroom.png", // Replace with actual image URL
      background: "bg-blue-200"
    },
    {
      title: "School Updates and Reminders",
      description: "Keep parents informed about school activities and track child’s progress in school.",
      items: [
        { icon: FaClipboardList, title: "School Notices", description: "Important school notices and updates." },
        { icon: FaClipboardList, title: "Timetable Tracking", description: "Stay updated with class schedules and timetables." },
        { icon: FaClipboardList, title: "Event Updates", description: "Get updates on upcoming school events." },
        { icon: FaBell, title: "Live Class Reminders", description: "Reminders for live classes and assignments." },
      ],
      img: "https://www.example.com/classroom.png", // Replace with actual image URL
      background: "bg-blue-300"
    },
    {
      title: "Performance Reports and Analytics",
      description: "Encourage parents to understand their child's strengths, weaknesses, and level of understanding.",
      items: [
        { icon: FaChartLine, title: "AI-Powered Reports", description: "Reports powered by AI for performance insights." },
        { icon: FaClipboardList, title: "Exam Readiness", description: "Assess exam readiness with detailed insights." },
        { icon: FaClipboardList, title: "Weakness Insights", description: "Identify strong and weak areas of learning." },
        { icon: FaChartLine, title: "Progress Graphs", description: "Visualize learning with progress graphs." },
      ],
      img: "https://www.example.com/classroom.png", // Replace with actual image URL
      background: "bg-blue-400"
    }
  ];

  return (
    <div className="bg-blue-50">
      {sections.map((section, index) => (
        <section className={`py-16 ${section.background}`} data-aos="fade-up" key={index}>
          <div className={`container mx-auto flex flex-col md:flex-row ${index % 2 === 1 ? 'md:flex-row-reverse' : ''} items-center`}>
            
            {/* Image Section */}
            <div className="w-full md:w-1/2 p-6">
              <img src={section.img} alt={section.title} className="w-full h-auto rounded-lg shadow-lg" />
            </div>

            {/* Content Section */}
            <div className="w-full md:w-1/2 p-6">
              <h2 className="text-4xl font-bold text-blue-600">{section.title}</h2>
              <p className="mt-4 text-lg text-blue-800">{section.description}</p>
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {section.items.map((item, idx) => (
                  <div key={idx} className="bg-white p-6 rounded-lg shadow-lg flex items-center">
                    <item.icon className="text-4xl text-blue-500" />
                    <div className="ml-4 text-left">
                      <h3 className="text-xl font-semibold text-blue-600">{item.title}</h3>
                      <p className="text-blue-800">{item.description}</p>
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
