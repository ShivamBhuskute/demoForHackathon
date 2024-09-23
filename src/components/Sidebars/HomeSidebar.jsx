import React, { useState } from "react";
import {
    FiMenu,
    FiHome,
    FiBookOpen,
    FiMessageCircle,
    FiSettings,
} from "react-icons/fi";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="flex overflow-y-visible">
            <div
                className={`bg-gray-800 text-white h-auto p-5 pt-8 ${
                    isOpen ? "w-60" : "w-20"
                } duration-300 sm:duration-300 relative`}
            >
                {/* Toggle Button */}
                <div
                    className="absolute top-10 text-white hover:bg-white hover:text-black p-2 rounded-full cursor-pointer"
                    onClick={toggleSidebar}
                >
                    <FiMenu size={24} />
                </div>

                {/* Sidebar Content */}
                <div className="mt-24">
                    <Link
                        to="/"
                        className={`flex items-center space-x-4 mt-10 hover:bg-white hover:text-black cursor-pointer hover:rounded-md ${
                            isOpen ? "" : "justify-center"
                        }`}
                    >
                        <FiHome size={24} />
                        {isOpen && <span>Home</span>}
                    </Link>

                    <Link
                        to="/working"
                        className={`flex items-center space-x-4 mt-6 hover:bg-white hover:text-black cursor-pointer hover:rounded-md ${
                            isOpen ? "" : "justify-center"
                        }`}
                    >
                        <FiBookOpen size={24} />
                        {isOpen && <span>Working</span>}
                    </Link>

                    <Link
                        to="/about"
                        className={`flex items-center space-x-4 mt-6 hover:bg-white hover:text-black cursor-pointer hover:rounded-md ${
                            isOpen ? "" : "justify-center"
                        }`}
                    >
                        <FiMessageCircle size={24} />
                        {isOpen && <span>About</span>}
                    </Link>

                    <Link
                        to="/settings"
                        className={`flex items-end space-x-4 mt-96 hover:bg-white hover:text-black cursor-pointer hover:rounded-md ${
                            isOpen ? "" : "justify-center"
                        }`}
                    >
                        <FiSettings size={24} />
                        {isOpen && <span>Settings</span>}
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
