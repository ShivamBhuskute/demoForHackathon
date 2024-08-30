import React, { useState } from "react";
import { FiMenu, FiHome, FiUser, FiSettings } from "react-icons/fi"; // Icons from react-icons (optional)

function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="flex">
            {/* Sidebar */}
            <div
                className={`bg-gray-800 text-white h-screen p-5 pt-8 ${
                    isOpen ? "w-64" : "w-20"
                } duration-300 relative`}
            >
                {/* Toggle Button */}
                <div
                    className="absolute top-6 -right-3 bg-gray-800 p-2 rounded-full cursor-pointer"
                    onClick={toggleSidebar}
                >
                    <FiMenu size={24} />
                </div>

                {/* Sidebar Content */}
                <div className="mt-10">
                    <div
                        className={`flex items-center space-x-4 ${
                            isOpen ? "" : "justify-center"
                        }`}
                    >
                        <FiHome size={24} />
                        {isOpen && <span>Home</span>}
                    </div>

                    <div
                        className={`flex items-center space-x-4 mt-6 ${
                            isOpen ? "" : "justify-center"
                        }`}
                    >
                        <FiUser size={24} />
                        {isOpen && <span>Profile</span>}
                    </div>

                    <div
                        className={`flex items-center space-x-4 mt-6 ${
                            isOpen ? "" : "justify-center"
                        }`}
                    >
                        <FiSettings size={24} />
                        {isOpen && <span>Settings</span>}
                    </div>
                </div>
            </div>

            {/* Main Content */}
            {/* <div className="p-7 text-2xl font-semibold flex-1 h-screen">
                <h1>Main Content Area</h1>
            </div> */}
        </div>
    );
}

export default Sidebar;
