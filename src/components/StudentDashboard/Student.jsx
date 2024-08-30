
import React from "react";
import Sidebar from "../Sidebar";
import CourseCard from "../CourseCard";
import Chart from "../Chart";

function Student() {
    return (
        <div className="flex min-h-screen">
            {/* Sidebar */}
            <Sidebar />

            {/* Main Content */}
            <div className="flex-1 p-6">
                {/* Header */}
                <header className="ml-10">
                    <h1 className="text-3xl font-bold">Hello, Arka 👋</h1>
                    <p className="text-gray-600">
                        Nice to have you back, what an exciting day!
                    </p>
                </header>

                {/* Course Section */}
                <section className="grid grid-cols-1 gap-6 mt-6 ml-10">
                    <CourseCard
                        title="Biology Molecular"
                        progress={79}
                        lessons={21}
                        assignments={5}
                        students={312}
                    />
                    <CourseCard
                        title="Color Theory"
                        progress={64}
                        lessons={10}
                        assignments={2}
                        students={256}
                    />
                </section>

                {/* Chart Section */}
                <div className="mt-6 flex justify-between">
                    <div className="w-full">
                        <Chart />
                    </div>
                </div>

                {/* Profile & Stats Section (Optional) */}
                {/* Add your profile, stats, or additional content here */}
            </div>
        </div>
    );
}

export default Student;
