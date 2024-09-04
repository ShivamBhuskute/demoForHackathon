import React, { useEffect, useState } from "react";

const AnimatedBox = () => {
    // Define an array of content for each box
    const boxContent = [
        {
            title: "AI-Driven Early Warning System",
            description:
                "Our system uses advanced AI to identify at-risk students early, enabling teachers to provide timely support and intervention through a dedicated login portal.",
        },
        {
            title: "Community Learning Hub",
            description:
                "An integrated platform that promotes collaborative learning, similar to Byju's, enhancing student engagement and access to resources.",
        },
        {
            title: "Gamified Study Tracking",
            description:
                "Our memorizer app uses gamification to make learning fun and engaging, helping students to reinforce their knowledge effectively.",
        },
        {
            title: "Financial Support Management",
            description:
                "Efficient management of scholarships and financial aid, ensuring that students have the resources they need to succeed without economic barriers.",
        },
        {
            title: "Parental Engagement Portal",
            description:
                "A dedicated portal for parents to monitor their child’s academic status, fostering stronger school-home connections.",
        },
    ];

    const [openBoxes, setOpenBoxes] = useState(
        Array(boxContent.length).fill(false)
    ); // Array to track open state of each box
    const [lastScrollY, setLastScrollY] = useState(0); // Track the last scroll position

    // Effect to open the first box immediately with a delay
    useEffect(() => {
        const timer = setTimeout(() => {
            setOpenBoxes((prev) => {
                const newOpenBoxes = [...prev];
                newOpenBoxes[0] = true; // Open the first box immediately
                return newOpenBoxes;
            });
        }, 100); // Delay to allow for the initial render

        return () => clearTimeout(timer); // Cleanup the timer
    }, []);

    const handleScroll = () => {
        const currentScrollY = window.scrollY;

        // Determine scroll direction
        if (currentScrollY > lastScrollY) {
            // Scrolling down
            setOpenBoxes((prev) => {
                return prev.map((isOpen, index) => {
                    // Open boxes alternately from left and right
                    const boxIndex = Math.floor(currentScrollY / 100);
                    if (
                        !isOpen &&
                        index === boxIndex &&
                        index < openBoxes.length
                    ) {
                        return true; // Open the box at the current index
                    }
                    return isOpen; // Keep the current state
                });
            });
        } else {
            // Scrolling up
            setOpenBoxes((prev) => {
                return prev.map((isOpen, index) => {
                    // Close boxes alternately from left and right
                    const boxIndex = Math.floor(currentScrollY / 100);
                    if (
                        isOpen &&
                        index === boxIndex &&
                        index < openBoxes.length
                    ) {
                        return false; // Close the box at the current index
                    }
                    return isOpen; // Keep the current state
                });
            });
        }

        // Update last scroll position
        setLastScrollY(currentScrollY);
    };

    // Effect to handle scroll events
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [lastScrollY]);

    return (
        <>
            {openBoxes.map((isOpen, index) => (
                <div
                    key={index}
                    className={`
                    h-64 w-80 sm:w-5/6 md:w-2/5 bg-white rounded-xl shadow-xl p-4 sm:p-6
                    flex items-center justify-center relative
                    transition-all duration-500 my-8 mx-auto
                    ${
                        isOpen
                            ? "translate-x-0 opacity-100"
                            : index === 0
                            ? "-translate-x-full opacity-0"
                            : index % 2 === 0
                            ? "-translate-x-full opacity-0"
                            : "translate-x-full opacity-0"
                    }
                `}
                >
                    <div className="absolute top-0 left-0 h-10 w-10 bg-indigo-500 rounded-full flex items-center justify-center transform -translate-x-5 -translate-y-5">
                        <span className="text-white text-lg sm:text-xl">
                            {index + 1}
                        </span>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2 sm:mb-3 text-center">
                            {isOpen
                                ? `${boxContent[index].title}`
                                : boxContent[index].title}
                        </h2>
                        <p className="text-gray-700 text-sm sm:text-base text-center">
                            {isOpen
                                ? boxContent[index].description
                                : "Click to open the box."}
                        </p>
                    </div>
                </div>
            ))}
        </>
    );
};

// export default AnimatedBox;

function Working() {
    return (
        <div className="overflow-auto bg-gray-900">
            <AnimatedBox />
        </div>
    );
}

export default Working;
