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
// import CustomizationCard from "../components/parentDashboard";
import NoticeCard from "../components/parentDashboard/NoticeCard";

const ParentDash = () => {
    return (
        <div className="h-screen flex">
            <Sidebar /> {/* Fixed Sidebar */}
            <div className="flex-grow flex flex-col">
                <Header /> {/* Header at the top */}
                <div className="flex-grow p-4 bg-gray-50">
                    <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-4">
                        <div className="col-span-2">
                            <HomeworkCard />
                        </div>

                        <EventCard />
                        <AttendanceCard />
                        <div className="col-span-1">
                            <AcademicCalendarCard />

                            <div className=" flex ">
                                {/* <CustomizationCard /> */}
                                {/* <NoticeCard /> */}
                            </div>
                        </div>
                        <div>
                            <PerformanceMetricsCard />
                            <BehaviorInsightsCard />
                        </div>
                        <HealthWellnessCard />
                        <NoticeCard />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ParentDash;
