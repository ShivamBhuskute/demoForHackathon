import React from "react";

function ProfileCard({ name, courses, certifications }) {
    return (
        <div className="bg-yellow-200 p-6 rounded-lg shadow-md w-full max-w-md h-[45vh]">
            <div className="flex flex-col items-center space-y-8">
                {/* Profile Image */}
                <div className="w-24 h-24 bg-gray-200 rounded-full">
                    <img
                        src="https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?size=338&ext=jpg&ga=GA1.1.2113030492.1720310400&semt=sph"
                        alt="profile pic"
                        className="rounded-full size-24"
                    />
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
