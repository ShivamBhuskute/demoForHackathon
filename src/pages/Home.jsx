import React from "react";
import { useNavigate } from "react-router-dom";
import HomeSidebar from "../components/Sidebars/HomeSidebar"


function Home() {
    const navigate = useNavigate();

    const handleClickButton = () => {
        navigate("/student");
    };
    const handleClickButtonParent = () => {
        navigate("/parents");
    };
    const handleClickButtonUni = () => {
        navigate("/university");
    };
    const handleClickButtonTeacher = () => {
        navigate("/teacher");
    };

    return (
        <div className="sm:overflow-hidden bg-gradient-to-br from-blue-300 via-blue-600 to-blue-950">
            <div className="min-h-screen flex">
                <HomeSidebar />
                <div className="flex-1 flex-col p-5">
                    <div className="mb-6 flex flex-row sm:flex-row items-end justify-end">
                        <button className="text-base sm:text-xl font-bold mb-4 lg:mb-0 px-2 sm:px-6 py-2 bg-black text-white rounded-full mr-3 sm:mr-5">
                            SIGN UP
                        </button>
                        <button className="text-base sm:text-xl font-bold mb-4 lg:mb-0 px-2 sm:px-6 py-2 bg-black text-white rounded-full">
                            LOGIN
                        </button>
                    </div>

                    <div className="flex-grow flex flex-col items-center justify-center h-[70%] sm:h-[70%]">
                        <h1 className="text-4xl sm:text-9xl font-bold font-poppins text-white">
                            TechnoCrats
                        </h1>
                        <h3 className="text-xs sm:text-lg font-bold font-poppins text-left w-[65%] sm:w-[55%] text-white">
                            NO STUDENT LEFT BEHIND
                        </h3>
                    </div>
                </div>
            </div>

            {/* Render the AnimatedBox component below the original content */}
            {/* <div className="flex-grow flex flex-col items-center justify-center">
                <AnimatedBox />
            </div> */}
        </div>
    );
}

export default Home;
