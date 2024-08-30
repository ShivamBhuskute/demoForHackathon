import React from "react";

function ProfileCard({ name, courses, certifications }) {
    return (
        <div className="bg-yellow-200 p-6 rounded-lg shadow-md w-full max-w-md h-[45vh]">
            <div className="flex flex-col items-center space-y-8">
                {/* Profile Image */}
                <div className="w-24 h-24 bg-gray-200 rounded-full">
                    {/* Replace with an actual image by adding <img> tag */}
                </div>
                {/* Profile Info */}
                <div className="text-center">
                    <h3 className="text-xl font-semibold">{name}</h3>
                    <p className="text-gray-600">
                        {courses} Courses · {certifications} Certifications
                    </p>
                </div>
            </div>
        </div>
    );
}

export default ProfileCard;