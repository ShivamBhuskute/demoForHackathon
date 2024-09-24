// import React from 'react';

// function TeacherContent1() {
//     return (
//         <section className="bg-blue-50 py-12 px-4 space-y-16">
//             <h1 className="text-4xl font-bold text-blue-900 mb-6 justify-center flex items-center animate-fadeInLeft">
//                 A unified solution for enriched teaching & enhanced learning
//             </h1>
//             <div className="container mx-auto flex flex-col md:flex-row items-center">
//                 {/* Left Image */}
//                 <div className="md:w-1/2 flex justify-center mt-8 md:mt-0 animate-slideInRight">
//                     <img src="https://www.example.com/classroom.png" alt="Classroom Preview" className="w-full max-w-sm" />
//                 </div>
//                 {/* Left content */}
//                 <div className="md:w-1/2 animate-slideInLeft">
//                     <h2 className="text-2xl font-semibold text-blue-700 mb-4">
//                         Interactive Digital Content
//                     </h2>
//                     <p className="text-blue-700 mb-4">
//                         <strong>All subjects, all classes, multiple boards:</strong> Our extensive range of content covers all subjects, all classes, and multiple boards, making learning fun and interactive.
//                     </p>
//                     <p className="text-blue-700 mb-4">
//                         <strong>Adaptive Learning Technology:</strong> Our platform adapts to each student’s learning style and pace, ensuring personalized educational experiences that cater to individual needs.
//                     </p>
//                     <p className="text-blue-700 mb-6">
//                         <strong>NEP-ready:</strong> Assess your students’ knowledge with a diverse range of question types, including objective, subjective, integer, match-the-following, and more.
//                     </p>
//                     <button className="bg-blue-600 text-white py-3 px-6 rounded shadow-lg hover:bg-blue-700 transition-transform transform hover:scale-105 duration-300">
//                         Get Started
//                     </button>
//                 </div>
//             </div>

//             <div className="container mx-auto">
//                 {/* First subsection: Hassle-free Assessments */}
//                 <div className="flex flex-col md:flex-row items-center mb-12">
//                     {/* Left Image */}
//                     <div className="md:w-1/2 flex justify-center md:order-1 animate-slideInLeft">
//                         <img src="https://www.example.com/assessment.png" alt="Assessment Preview" className="w-full max-w-sm" />
//                     </div>
//                     {/* Right Content */}
//                     <div className="md:w-1/2 md:pl-10 mt-8 md:mt-0 animate-slideInRight">
//                         <h2 className="text-3xl font-bold text-blue-900 mb-4">Hassle-free Assessments</h2>
//                         <p className="text-blue-700 mb-2">
//                             <strong>Unified Dashboard:</strong> Access all your teaching resources and student data through an intuitive and centralized dashboard. WiseTrack integrates seamlessly with existing educational tools and systems.
//                         </p>
//                         <p className="text-blue-700 mb-2">
//                             <strong>Real-Time Collaboration:</strong> Foster collaboration with built-in tools for real-time discussions, group projects, and peer reviews.
//                         </p>
//                         <p className="text-blue-700 mb-4">
//                             <strong>Customizable Features:</strong> Tailor the platform’s features to fit specific educational needs, from curriculum design to assessment management.
//                         </p>
//                         <button className="bg-blue-600 text-white py-3 px-6 rounded shadow-lg hover:bg-blue-700 transition-transform transform hover:scale-105 duration-300">
//                             Get Started
//                         </button>
//                     </div>
//                 </div>

//                 {/* Second subsection: Seamless Classroom Management */}
//                 <div className="flex flex-col md:flex-row items-center mt-6">
//                     {/* Left Image */}
//                     <div className="md:w-1/2 flex justify-center mt-8 md:mt-0 animate-slideInRight">
//                         <img src="https://www.example.com/classroom.png" alt="Classroom Preview" className="w-full max-w-sm" />
//                     </div>
//                     {/* Right Content */}
//                     <div className="md:w-1/2 md:pr-10 animate-slideInLeft">
//                         <h2 className="text-3xl font-bold text-blue-900 mb-4">Seamless Classroom Management</h2>
//                         <p className="text-blue-700 mb-2">
//                             <strong>Interactive Learning Modules:</strong> Engage students with dynamic, multimedia-rich modules that cater to various learning styles and preferences.
//                         </p>
//                         <p className="text-blue-700 mb-2">
//                             <strong>Gamification:</strong> Incorporate game-based elements to motivate and challenge students, making learning both fun and effective.
//                         </p>
//                         <p className="text-blue-700 mb-4">
//                             <strong>Real-World Applications:</strong> Connect lessons to real-world scenarios, helping students see the relevance and application of their learning.
//                         </p>
//                         <button className="bg-blue-600 text-white py-3 px-6 rounded shadow-lg hover:bg-blue-700 transition-transform transform hover:scale-105 duration-300">
//                             Get Started
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// }

// export default TeacherContent1;








import React from 'react';
import { useInView } from 'react-intersection-observer';
import ClassroomPreview from '../../images/ClassroomPreview.png';
import AssessmentPreview from "../../images/AssessmentPreview.png";
import gamified from "../../images/gamified.png";

function TeacherContent1() {
    const { ref: sectionRef, inView: sectionInView } = useInView({ triggerOnce: true, threshold: 0.1 });
    const { ref: imageRef1, inView: imageInView1 } = useInView({ triggerOnce: true, threshold: 0.1 });
    const { ref: contentRef1, inView: contentInView1 } = useInView({ triggerOnce: true, threshold: 0.1 });
    const { ref: imageRef2, inView: imageInView2 } = useInView({ triggerOnce: true, threshold: 0.1 });
    const { ref: contentRef2, inView: contentInView2 } = useInView({ triggerOnce: true, threshold: 0.1 });
    const { ref: imageRef3, inView: imageInView3 } = useInView({ triggerOnce: true, threshold: 0.1 });
    const { ref: contentRef3, inView: contentInView3 } = useInView({ triggerOnce: true, threshold: 0.1 });

    return (
        <section ref={sectionRef} className="bg-blue-50 py-12 px-4 space-y-16">
            <h1 className={`text-4xl font-bold text-blue-900 mb-6 justify-center flex items-center ${sectionInView ? 'animate-fadeInLeft' : 'opacity-0'}`}>
                A unified solution for enriched teaching & enhanced learning
            </h1>
            <div className="container mx-auto flex flex-col md:flex-row items-center">
                {/* Left Image */}
                <div ref={imageRef1} className={`md:w-1/2 flex justify-center mt-8 md:mt-0 ${imageInView1 ? 'animate-slideInRight' : 'opacity-0'}`}>
                    <img src={ClassroomPreview} alt="Classroom Preview" className="w-full max-w-2xl" />
                </div>
                {/* Left content */}
                <div ref={contentRef1} className={`md:w-1/2 ${contentInView1 ? 'animate-slideInLeft' : 'opacity-0'}`}>
                    <h2 className="text-2xl font-semibold text-blue-700 mb-4">
                        Dynamic Learning Resources
                    </h2>
                    <p className="text-blue-700 mb-4">
                        <strong>All subjects, all classes, multiple boards:</strong> Our extensive range of content covers all subjects, all classes, and multiple boards, making learning fun and interactive.
                    </p>
                    <p className="text-blue-700 mb-4">
                        <strong>Adaptive Learning Technology:</strong> Our platform adapts to each student’s learning style and pace, ensuring personalized educational experiences that cater to individual needs.
                    </p>
                    <p className="text-blue-700 mb-6">
                        <strong>NEP-ready:</strong> Assess your students’ knowledge with a diverse range of question types, including objective, subjective, integer, match-the-following, and more.
                    </p>
                    <button className="bg-blue-600 text-white py-3 px-6 rounded shadow-lg hover:bg-blue-700 transition-transform transform hover:scale-105 duration-300">
                        Get Started
                    </button>
                </div>
            </div>

            <div className="container mx-auto">
                {/* First subsection: Hassle-free Assessments */}
                <div className="flex flex-col md:flex-row items-center mb-12">
                    {/* Left Image */}
                    <div ref={imageRef2} className={`md:w-1/2 flex justify-center md:order-1 ${imageInView2 ? 'animate-slideInLeft' : 'opacity-0'}`}>
                        <img src={AssessmentPreview} alt="Assessment Preview" className="w-full max-w-3xl" />
                    </div>
                    {/* Right Content */}
                    <div ref={contentRef2} className={`md:w-1/2 md:pl-10 mt-8 md:mt-0 ${contentInView2 ? 'animate-slideInRight' : 'opacity-0'}`}>
                        <h2 className="text-3xl font-bold text-blue-900 mb-4">
                            Real-Time Assessment Tools
                        </h2>
                        <p className="text-blue-700 mb-2">
                            <strong>Unified Dashboard:</strong> Access all your teaching resources and student data through an intuitive and centralized dashboard. WiseTrack integrates seamlessly with existing educational tools and systems.
                        </p>
                        <p className="text-blue-700 mb-2">
                            <strong>Real-Time Collaboration:</strong> Foster collaboration with built-in tools for real-time discussions, group projects, and peer reviews.
                        </p>
                        <p className="text-blue-700 mb-4">
                            <strong>Customizable Features:</strong> Tailor the platform’s features to fit specific educational needs, from curriculum design to assessment management.
                        </p>
                        <button className="bg-blue-600 text-white py-3 px-6 rounded shadow-lg hover:bg-blue-700 transition-transform transform hover:scale-105 duration-300">
                            Get Started
                        </button>
                    </div>
                </div>

                {/* Second subsection: Seamless Classroom Management */}
                <div className="flex flex-col md:flex-row items-center mt-6">
                    {/* Left Image */}
                    <div ref={imageRef3} className={`md:w-1/2 flex justify-center mt-8 md:mt-0 ${imageInView3 ? 'animate-slideInRight' : 'opacity-0'}`}>
                        <img src={gamified} alt="Classroom Preview" className="w-full max-w-md" />
                    </div>
                    {/* Right Content */}
                    <div ref={contentRef3} className={`md:w-1/2 md:pr-10 ${contentInView3 ? 'animate-slideInLeft' : 'opacity-0'}`}>
                        <h2 className="text-3xl font-bold text-blue-900 mb-4">
                            Interactive and Gamified Modules
                        </h2>
                        <p className="text-blue-700 mb-2">
                            <strong>Interactive Learning Modules:</strong> Engage students with dynamic, multimedia-rich modules that cater to various learning styles and preferences.
                        </p>
                        <p className="text-blue-700 mb-2">
                            <strong>Gamification:</strong> Incorporate game-based elements to motivate and challenge students, making learning both fun and effective.
                        </p>
                        <p className="text-blue-700 mb-4">
                            <strong>Real-World Applications:</strong> Connect lessons to real-world scenarios, helping students see the relevance and application of their learning.
                        </p>
                        <button className="bg-blue-600 text-white py-3 px-6 rounded shadow-lg hover:bg-blue-700 transition-transform transform hover:scale-105 duration-300">
                            Get Started
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default TeacherContent1;
