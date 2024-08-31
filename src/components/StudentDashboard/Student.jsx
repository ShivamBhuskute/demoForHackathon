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
        <div className="flex min-h-screen overflow-hidden">
            {/* Sidebar */}
            <Sidebar />

            {/* Main Content */}
            <div className="grid grid-cols-12 p-6 w-full space-x-5">
                {/* Left Section (4/12) */}
                <div className="col-span-4 flex flex-col">
                    <header className="ml-10">
                        <h1 className="text-3xl font-bold">
                            Hello, Student 👋
                        </h1>
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

                    <div className="ml-10 mt-10">
                        <Class
                            className="Introduction to Biology"
                            studentsCount={45}
                            time="10:00 AM - 12:00 PM"
                        />
                    </div>
                </div>

                {/* Right Section (8/12) */}

                <div className="col-span-8 mt-6 flex justify-between flex-col bg-slate-200 rounded-lg">
                    <div className="flex flex-row space-x-20">
                        <div className="ml-4 mt-4">
                            <ProfileCard
                                name={"arka"}
                                courses={10}
                                certifications={5}
                            />
                        </div>

                        <div>
                            <div className="mt-4">
                                <Exp />
                            </div>
                            <div className="flex flex-col space-y-5 mt-5">
                                {" "}
                                {/* Stack the cards vertically */}
                                {/* <ConsultationCard /> */}
                                <SetTargetCard />
                            </div>
                        </div>
                    </div>

                    {/* Chart remains full-width below */}
                    <div className="mt-6 shadow-lg rounded-lg bg-white">
                        <Chart />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Student;
