
import Banner from "../components/HomePage/Banner";
import Header from "../components/HomePage/Header";
import React, { useEffect, useState } from "react";
import { FaExclamationTriangle, FaUsers, FaSchool, FaMoneyBillWave, FaHeadset, FaChalkboardTeacher, FaHeart, FaLightbulb, FaLaptop, FaClipboardList } from "react-icons/fa";

const AnimatedBox = () => {
    const boxContent = [
        {
            title: "AI-Driven Early Warning System",
            description:
                "Our system uses advanced AI algorithms to analyze student performance data, attendance, and engagement metrics. By identifying at-risk students early, teachers can provide timely support and intervention through a dedicated login portal. This proactive approach helps prevent dropouts and ensures that every student has the chance to succeed.",
            icon: <FaExclamationTriangle className="text-4xl text-indigo-500" />,
        },
        {
            title: "Instant Helpline Support",
            description:
                "The instant emergency call feature allows struggling students to connect with support services anytime they need help. This ensures timely assistance during critical moments. Rapid response helplines are staffed by trained professionals who provide immediate support, counseling, and guidance to at-risk students, creating a safety net for those in need.",
            icon: <FaHeadset className="text-4xl text-indigo-500" />,
        },
        {
            title: "Blended Learning Model",
            description:
                "Our blended learning model combines online and offline methods to cater to diverse learning needs. This approach allows students to engage with interactive digital content while also participating in traditional classroom activities. This flexibility enhances learning outcomes and accommodates various learning styles, making education more accessible.",
            icon: <FaChalkboardTeacher className="text-4xl text-indigo-500" />,
        },
        {
            title: "Social-Emotional Learning (SEL)",
            description:
                "Our SEL initiatives focus on improving emotional resilience and well-being among students. By fostering a supportive learning environment, we encourage students to develop essential life skills such as empathy, self-regulation, and interpersonal communication. This holistic approach contributes to a positive school culture and enhances academic performance.",
            icon: <FaHeart className="text-4xl text-indigo-500" />,
        },
        {
            title: "Community Learning Hub",
            description:
                "The Community Learning Hub is an integrated platform that promotes collaborative learning among students, teachers, and parents. Similar to Byju's, it offers a variety of resources, including videos, quizzes, and discussion forums. This enhances student engagement and provides access to additional learning materials, creating a supportive community.",
            icon: <FaSchool className="text-4xl text-indigo-500" />,
        },
        {
            title: "Financial Support Management",
            description:
                "Our financial support management system streamlines the process of applying for scholarships and financial aid. We ensure that students have access to the necessary resources to succeed without economic barriers. This system helps students track their financial aid status and provides guidance on available scholarships tailored to their needs.",
            icon: <FaMoneyBillWave className="text-4xl text-indigo-500" />,
        },
        {
            title: "Parental Engagement Portal",
            description:
                "The Parental Engagement Portal is a dedicated platform for parents to monitor their child’s academic progress, attendance, and behavior. It fosters stronger school-home connections by allowing parents to communicate directly with teachers and access resources that support their child’s education. This involvement is crucial for student success.",
            icon: <FaUsers className="text-4xl text-indigo-500" />,
        },
        {
            title: "Virtual Tutoring & Mentoring",
            description:
                "Our virtual tutoring and mentoring service provides on-demand academic support and guidance. Students can connect with experienced tutors and mentors for personalized assistance in various subjects. This flexible service enhances learning outcomes by addressing individual student needs and ensuring they receive the help they require.",
            icon: <FaLaptop className="text-4xl text-indigo-500" />,
        },
        {
            title: "Mental Health Focus",
            description:
                "We prioritize mental health by offering programs that include yoga, meditation, and counseling. These initiatives are designed to reduce stress and boost focus among students. By promoting overall well-being, we create a healthier learning environment that supports both academic and emotional development.",
            icon: <FaHeart className="text-4xl text-indigo-500" />,
        },
        {
            title: "Data-Driven Insights",
            description:
                "Our platform provides educators with data-driven insights that enable real-time, informed decision-making. By analyzing student performance and engagement metrics, teachers can adjust their teaching strategies to better meet the needs of their students. This data-centric approach enhances educational effectiveness and supports continuous improvement.",
            icon: <FaClipboardList className="text-4xl text-indigo-500" />,
        },
    ];


    const [openBoxes, setOpenBoxes] = useState(Array(boxContent.length).fill(false));
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            setOpenBoxes((prev) => {
                const newOpenBoxes = [...prev];
                newOpenBoxes[0] = true;
                return newOpenBoxes;
            });
        }, 100);

        return () => clearTimeout(timer);
    }, []);

    const handleScroll = () => {
        const currentScrollY = window.scrollY;
        if (currentScrollY > lastScrollY) {
            setOpenBoxes((prev) => {
                return prev.map((isOpen, index) => {
                    const boxIndex = Math.floor(currentScrollY / 100);
                    if (!isOpen && index === boxIndex && index < openBoxes.length) {
                        return true;
                    }
                    return isOpen;
                });
            });
        } else {
            setOpenBoxes((prev) => {
                return prev.map((isOpen, index) => {
                    const boxIndex = Math.floor(currentScrollY / 100);
                    if (isOpen && index === boxIndex && index < openBoxes.length) {
                        return false;
                    }
                    return isOpen;
                });
            });
        }
        setLastScrollY(currentScrollY);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [lastScrollY]);

    return (
        <>
            <div className="fixed w-full z-50">
                <Header />
            </div>

            {/* Main content with padding to avoid being hidden by the fixed header */}
            <div className="pt-24">
                <Banner />

            </div>
            {openBoxes.map((isOpen, index) => (
                <div
                    key={index}
                    className={`
                    h-64 w-80 sm:w-5/6 md:w-2/5 bg-white rounded-xl shadow-xl p-4 sm:p-6
                    flex items-center justify-center relative
                    transition-all duration-500 my-8 mx-auto
                    ${isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}
                `}
                >
                    <div className="absolute top-0 left-0 h-10 w-10 bg-indigo-500 rounded-full flex items-center justify-center transform -translate-x-5 -translate-y-5">
                        <span className="text-white text-lg sm:text-xl">{index + 1}</span>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <div className="mb-2">{boxContent[index].icon}</div>
                        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2 sm:mb-3 text-center">
                            {isOpen ? boxContent[index].title : boxContent[index].title}
                        </h2>
                        <p className="text-gray-700 text-sm sm:text-base text-center">
                            {isOpen ? boxContent[index].description : "Click to open the box."}
                        </p>
                    </div>
                </div>
            ))}
        </>
    );
};

function Working() {
    return (
        <div className="overflow-auto bg-gradient-to-r from-blue-950 to-blue-400">
            <AnimatedBox />
        </div>
    );
}

export default Working;
