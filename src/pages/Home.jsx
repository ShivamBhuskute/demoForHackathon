import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import HomeSidebar from "../components/Sidebars/HomeSidebar";
import ChatWidget from "../components/ChatWidget"
const ModalLogin = ({ isOpen, onClose, navigate }) => {
    if (!isOpen) return null;

    const handleNavigate = (path) => {
        navigate(path);
        onClose();
    };

    return (
        <div className="absolute top-full mt-2 left-0 right-0 bg-white rounded-lg p-6 w-72 sm:w-80 -mx-4 sm:mx-[80%] shadow-lg">
            <h2 className="text-base sm:text-xl font-bold mb-4">
                Choose an Option for SignIn
            </h2>
            <ul>
                <li>
                    <button
                        onClick={() => handleNavigate("/parents")}
                        className="block w-full text-left p-2 hover:bg-gray-200 rounded"
                    >
                        Parents
                    </button>
                </li>
                <li>
                    <button
                        onClick={() => handleNavigate("/teacher")}
                        className="block w-full text-left p-2 hover:bg-gray-200 rounded"
                    >
                        Teachers
                    </button>
                </li>
                <li>
                    <button
                        onClick={() => handleNavigate("/university")}
                        className="block w-full text-left p-2 hover:bg-gray-200 rounded"
                    >
                        University Staff
                    </button>
                </li>
                <li>
                    <button
                        onClick={() => handleNavigate("/student")}
                        className="block w-full text-left p-2 hover:bg-gray-200 rounded"
                    >
                        Students
                    </button>
                </li>
            </ul>
            <button
                onClick={onClose}
                className="mt-4 text-base sm:text-xl font-bold mb-4 lg:mb-0 px-2 sm:px-6 py-2 bg-black text-white rounded-full"
            >
                Close
            </button>
        </div>
    );
};

const ModalSignup = ({ isOpen, onClose, navigate }) => {
    if (!isOpen) return null;

    const handleNavigate = (path) => {
        navigate(path);
        onClose();
    };

    return (
        <div className="absolute top-full mt-2 left-0 right-0 bg-white rounded-lg p-6 w-72 sm:w-80 -mx-4 sm:mx-[70%] shadow-lg">
            <h2 className="text-base sm:text-xl font-bold mb-4">
                Choose an Option for Signup
            </h2>
            <ul>
                <li>
                    <button
                        onClick={() => handleNavigate("/parents")}
                        className="block w-full text-left p-2 hover:bg-gray-200 rounded"
                    >
                        Parents
                    </button>
                </li>
                <li>
                    <button
                        onClick={() => handleNavigate("/teacher")}
                        className="block w-full text-left p-2 hover:bg-gray-200 rounded"
                    >
                        Teachers
                    </button>
                </li>
                <li>
                    <button
                        onClick={() => handleNavigate("/university")}
                        className="block w-full text-left p-2 hover:bg-gray-200 rounded"
                    >
                        University Staff
                    </button>
                </li>
                <li>
                    <button
                        onClick={() => handleNavigate("/student")}
                        className="block w-full text-left p-2 hover:bg-gray-200 rounded"
                    >
                        Students
                    </button>
                </li>
            </ul>
            <button
                onClick={onClose}
                className="mt-4 text-base sm:text-xl font-bold mb-4 lg:mb-0 px-2 sm:px-6 py-2 bg-black text-white rounded-full"
            >
                Close
            </button>
        </div>
    );
};

function Home() {
    const navigate = useNavigate();
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
    const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);

    const handleOpenLoginModal = () => {
        setIsLoginModalOpen(true);
        setIsSignupModalOpen(false);
    };

    const handleOpenSignupModal = () => {
        setIsSignupModalOpen(true);
        setIsLoginModalOpen(false);
    };

    const handleCloseModal = () => {
        setIsLoginModalOpen(false);
        setIsSignupModalOpen(false);
    };

    return (
        <div className="sm:overflow-hidden bg-gradient-to-br from-blue-800 via-blue-900 to-black">
            <div className="min-h-screen flex">
                <HomeSidebar />
                <div className="flex-1 flex-col p-5">
                    <div className="relative mb-6 flex flex-row sm:flex-row items-end justify-end">
                        <button
                            onClick={handleOpenSignupModal}
                            className="text-base sm:text-xl font-bold mb-4 lg:mb-0 px-2 sm:px-6 py-2 bg-black text-white rounded-full mr-3 sm:mr-5"
                        >
                            SIGN UP
                        </button>
                        <button
                            onClick={handleOpenLoginModal}
                            className="text-base sm:text-xl font-bold mb-4 lg:mb-0 px-2 sm:px-6 py-2 bg-black text-white rounded-full"
                        >
                            LOGIN
                        </button>
                        <ModalLogin
                            isOpen={isLoginModalOpen}
                            onClose={handleCloseModal}
                            navigate={navigate}
                        />
                        <ModalSignup
                            isOpen={isSignupModalOpen}
                            onClose={handleCloseModal}
                            navigate={navigate}
                        />
                    </div>

                    <div className="flex-grow flex flex-col items-center justify-center h-[70%] sm:h-[70%]">
                        <h1 className="text-4xl sm:text-9xl font-bold font-poppins text-white">
                            WiseTrack
                        </h1>
                        <h3 className="text-xs sm:text-lg font-bold font-poppins text-left w-[65%] sm:w-[48%] text-white">
                            NO STUDENT LEFT BEHIND
                        </h3>
                    </div>
                </div>
            </div>
            <ChatWidget />
        </div>
    );
}

export default Home;
