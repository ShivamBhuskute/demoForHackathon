import React from "react";
import Sidebar from "../Sidebar";

function University() {
    return (
        <div className="min-h-screen bg-blue-100 flex overflow-hidden">
            {/* Sidebar */}
            <Sidebar />

            {/* Main Content */}
            <div className="flex-1 p-5">
                {/* Header */}
                <div className="mb-6 text-left">
                    <h1 className="text-2xl font-bold mb-8">
                        University's Dashboard
                    </h1>
                    <div className="flex justify-center space-x-4">
                        <button className="px-9 py-2 bg-pink-200 text-gray-800 rounded-full text sm:w-1/2 cursor-pointer">
                            Updates
                        </button>
                        <button className="px-9 py-2 bg-pink-200 text-gray-800 rounded-full sm:w-1/2">
                            Facilities
                        </button>
                    </div>
                </div>

                {/* Grid Content */}
                <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col justify-start p-6 bg-yellow-100 rounded-lg text-center shadow-lg pb-10 cursor-pointer">
                        <span className="mb-10">Student</span>
                    </div>
                    <div className="p-6 bg-yellow-100 rounded-lg text-center shadow-lg cursor-pointer">
                        Faculty
                    </div>
                    <div className="flex flex-col justify-start p-6 bg-blue-200 rounded-lg text-center shadow-lg pb-10 cursor-pointer">
                        <span className="mb-14">Courses</span>
                    </div>
                    <div className="p-6 bg-blue-300 rounded-lg text-center shadow-lg cursor-pointer">
                        Exam
                    </div>
                    <div className="col-span-2 p-10 bg-yellow-100 rounded-xl text-center shadow-lg flex flex-col justify-start cursor-pointer">
                        <span className="">Faculty Training</span>
                    </div>
                    <div className="col-span-2 p-20 bg-blue-400 rounded-xl text-center shadow-lg flex flex-col justify-star cursor-pointert">
                        <span className="mb-10">Notice</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default University;
