import React from 'react'
import { motion } from "framer-motion"; // Animation library


function UniveristyContent1() {

    const contentData = [
        {
            id: 1,
            title: "University Management",
            description: "Streamlining school management: State-of-the-art platform for efficient operations, centralized data, real-time insights, fostering a harmonious school environment.",
            icon: "🏫", // You can use a real icon instead of emojis (FontAwesome or similar)
            bgColor: "bg-orange-100",
            iconBg: "bg-orange-500",
        },
        {
            id: 2,
            title: "Teacher Assistance",
            description: "Revolutionizing teacher experience: Empowering educators with user-friendly technologies, streamlined administrative processes, seamless support, and a student-centered approach to impactful education.",
            icon: "👩‍🏫",
            bgColor: "bg-blue-100",
            iconBg: "bg-blue-500",
        },
        {
            id: 3,
            title: "Student Development",
            description: "Focusing on student development: Fostering intellectual, emotional, and social growth through innovative programs and personalized support.",
            icon: "📚",
            bgColor: "bg-green-100",
            iconBg: "bg-green-500",
        },
        {
            id: 4,
            title: "Parent Collaboration",
            description: "Promoting parent involvement: Regular communication, engaging workshops, accessible resources, nurturing a strong partnership between home and school for student growth and success.",
            icon: "👨‍👩‍👦",
            bgColor: "bg-yellow-100",
            iconBg: "bg-yellow-500",
        },
    ];
    return (
        <section className="py-16 px-4 bg-blue-50">
            <div className="text-center mb-10">
                <h2 className="text-4xl font-bold text-blue-900">Fostering a collaborative educational journey for all stakeholders</h2>
                <div className="w-16 h-1 bg-blue-900 mt-4 mx-auto"></div>
            </div>

            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {contentData.map((item) => (
                    <motion.div
                        key={item.id}
                        className={`p-6 rounded-lg shadow-lg ${item.bgColor} transition-transform transform hover:scale-105`}
                        whileHover={{ scale: 1.05 }} // Framer Motion Animation
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: item.id * 0.2 }}
                    >
                        <div className={`w-16 h-16 flex items-center justify-center rounded-full text-white text-3xl mb-4 ${item.iconBg}`}>
                            {item.icon}
                        </div>
                        <h3 className="text-xl font-bold text-blue-900 mb-2">{item.title}</h3>
                        <p className="text-blue-700">{item.description}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default UniveristyContent1
