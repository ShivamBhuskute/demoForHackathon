import React from "react";
import Sidebar from "../Sidebar";
import CourseCard from "../CourseCard";
import Chart from "../Chart";
import ProfileCard from "../ProfileCard";
import Exp from "../EXP";
import { ConsultationCard, SetTargetCard } from "../Consult";
import Class from "../Class";

function Student() {
    return (
        <div className="flex min-h-screen overflow-hidden flex-auto sm:flex-row">
            {/* Sidebar */}
            <Sidebar />

            {/* Main Content */}
            <div className="grid grid-cols-1 sm:grid-cols-12 p-6 w-full space-x-5 space-y-5 sm:space-y-10 ">
                {/* Left Section (4/12) */}
                <div className="col-span-4 flex flex-col">
                    <header className=" sm:ml-10">
                        <h1 className="text-3xl font-bold">
                            Hello, Student 👋
                        </h1>
                        <p className="text-gray-600">
                            Nice to have you back, what an exciting day!
                        </p>
                    </header>

                    {/* Course Section */}
                    <section className="grid grid-cols-1 gap-6 mt-6  sm:ml-10">
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

                    <div className="sm:ml-10 mt-10">
                        <Class
                            className="Introduction to Biology"
                            studentsCount={45}
                            time="10:00 AM - 12:00 PM"
                        />
                    </div>
                </div>

                {/* Right Section (8/12) */}

                <div className="col-span-8 mt-6 flex flex-col bg-slate-200 rounded-lg">
                    {/* Top Section with Profile and Cards */}
                    <div className="flex flex-col sm:flex-row justify-between space-y-6 sm:space-y-0 sm:space-x-20 p-4">
                        {/* Profile Card */}
                        <div className="w-full sm:w-auto">
                            <ProfileCard
                                name={"arka"}
                                courses={10}
                                certifications={5}
                            />
                        </div>

                        {/* Experience and Set Target Cards */}
                        <div className="w-full sm:w-auto">
                            <div className="mt-4 sm:mt-0">
                                <Exp exp={"2400XP"} />
                            </div>
                            <div className="flex flex-col space-y-5 mt-5">
                                <SetTargetCard />
                            </div>
                        </div>
                    </div>

                    {/* Full-width Chart Section */}
                    <div className="mt-6 shadow-lg rounded-lg bg-white p-4 w-full invisible sm:visible">
                        <Chart />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Student;
