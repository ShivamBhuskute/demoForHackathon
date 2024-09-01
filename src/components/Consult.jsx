import React from "react";

function ConsultationCard() {
    return (
        <div className="bg-white p-6 rounded-lg shadow-md max-w-sm w-full mx-auto mb-6">
            <h3 className="text-xl font-semibold mb-2">Consultations</h3>
            <p className="text-gray-600">
                You have 3 consultations scheduled this week.
            </p>
            <button className="bg-blue-500 text-white mt-4 px-4 py-2 rounded-md">
                View Details
            </button>
        </div>
    );
}

function SetTargetCard() {
    return (
        <div className="bg-pink-300 p-6 rounded-lg shadow-md max-w-sm w-full mx-auto mb-6">
            <h3 className="text-xl font-semibold mb-2">Set Your Targets</h3>
            <p className="text-gray-600">
                You haven't set any targets yet. Let's create one.
            </p>
            <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-white hover:text-green-500 hover:border border-green-500">
                Set Targets
            </button>
        </div>
    );
}

export { ConsultationCard, SetTargetCard };
