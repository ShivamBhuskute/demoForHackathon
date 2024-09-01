import React from "react";

function Experience({ exp }) {
    return (
        <div className="bg-white p-6 rounded-lg shadow-md max-w-sm w-full sm:max-w-md lg:max-w-lg">
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
                {/* Profile Image */}
                <div className="w-16 h-16 bg-gray-200 rounded-full">
                    <img
                        src="https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?size=338&ext=jpg&ga=GA1.1.2113030492.1720310400&semt=sph"
                        alt="profile pic"
                        className="rounded-full size-16"
                    />{" "}
                </div>
                {/* Profile Info */}
                <div className="flex-1">
                    <h3 className="text-xl font-semibold">{exp}</h3>
                    <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3 mt-4">
                        <button className="bg-gray-100 text-gray-500 px-4 py-2 rounded-md hover:border border-green-500">
                            Redeem
                        </button>
                        <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-white hover:text-green-500 hover:border border-green-500">
                            Collect Points
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Experience;
