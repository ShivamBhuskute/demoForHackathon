import React from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/parentDashboard/Header";
import HomeworkCard from "../components/parentDashboard/HomeworkCard";
import EventCard from "../components/parentDashboard/EventCard";
import AttendanceCard from "../components/parentDashboard/AttendanceCard";
import PerformanceMetricsCard from "../components/parentDashboard/PerformanceMetricsCard";
import AcademicCalendarCard from "../components/parentDashboard/AcademicCalendarCard";
import BehaviorInsightsCard from "../components/parentDashboard/BehaviorInsightsCard";
import HealthWellnessCard from "../components/parentDashboard/HealthWellnessCard";
import NoticeCard from "../components/parentDashboard/NoticeCard";

const ParentDash = () => {
    return (
        <div className="min-h-screen flex">
            <Sidebar /> {/* Fixed Sidebar */}
            <div className="flex-grow flex flex-col">
                <Header /> {/* Header at the top */}
                <div className="flex-grow p-4 bg-gray-50">
                    <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-4">
                        <div className="col-span-1 md:col-span-2">
                            <HomeworkCard />
                        </div>

                        <div className="col-span-1 md:col-span-1">
                            <EventCard />
                        </div>

                        <div className="col-span-1 md:col-span-1">
                            <AttendanceCard />
                        </div>

                        <div className="col-span-1 md:col-span-1 lg:col-span-2">
                            <AcademicCalendarCard />
                        </div>

                        <div className="col-span-1 md:col-span-2 lg:col-span-2">
                            <PerformanceMetricsCard />
                        </div>

                        <div className="col-span-1 md:col-span-2 lg:col-span-2">
                            <BehaviorInsightsCard />
                        </div>

                        <div className="col-span-1 md:col-span-2 lg:col-span-2">
                            <HealthWellnessCard />
                        </div>

                        <div className="col-span-1 md:col-span-2 lg:col-span-2">
                            <NoticeCard />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ParentDash;
