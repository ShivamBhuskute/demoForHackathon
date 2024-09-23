




import React, { useState } from "react";
import { FaBed, FaRunning, FaUtensils, FaTint, FaBrain, FaHandsWash } from "react-icons/fa"; // Import icons

const HealthWellnessCard = () => {
  const [healthAndWellness, setHealthAndWellness] = useState({
    sleep: {
      hours: 7,
      recommended: 8,
    },
    physicalActivity: {
      duration: 30, // in minutes
      recommended: 60,
    },
    nutrition: "Balanced diet",
    hydration: {
      intake: 6, // glasses of water
      recommended: 8,
    },
    mentalHealth: {
      status: "Moderate stress",
      recommendation: "Consider mindfulness activities or counseling",
    },
    hygiene: {
      habits: "Good",
      recommendation: "Encourage regular handwashing",
    },
  });

  const getProgress = (value, recommended) => Math.round((value / recommended) * 100);

  return (
    <div className="bg-blue-400 flex flex-wrap rounded-lg shadow-md w-full max-h-96 overflow-y-auto custom-scrollbar">
      {/* Health and Wellness Section */}
      <div className="w-full lg:w-full p-4">
        <div className="bg-blue-200 rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-bold text-blue-600 mb-4">Health and Wellness</h2>

          {/* Sleep */}
          <div className="mb-6 border p-4 rounded-lg bg-white shadow-md flex items-center">
            <FaBed className="text-2xl text-blue-600 mr-4" /> {/* Sleep icon */}
            <div>
              <p className="text-lg font-semibold">Sleep</p>
              <p className="text-sm text-gray-600 mb-2">
                {healthAndWellness.sleep.hours} hours/night (Recommended: {healthAndWellness.sleep.recommended} hours)
              </p>
              <div className="w-full bg-gray-200 rounded-full h-4 mb-2">
                <div
                  className="bg-green-500 h-4 rounded-full"
                  style={{ width: `${getProgress(healthAndWellness.sleep.hours, healthAndWellness.sleep.recommended)}%` }}
                ></div>
              </div>
              <p className="text-sm text-gray-600">
                {getProgress(healthAndWellness.sleep.hours, healthAndWellness.sleep.recommended)}% of recommended sleep
              </p>
            </div>
          </div>

          {/* Physical Activity */}
          <div className="mb-6 border p-4 rounded-lg bg-white shadow-md flex items-center">
            <FaRunning className="text-2xl text-yellow-600 mr-4" /> {/* Physical Activity icon */}
            <div>
              <p className="text-lg font-semibold">Physical Activity</p>
              <p className="text-sm text-gray-600 mb-2">
                {healthAndWellness.physicalActivity.duration} minutes/day (Recommended: {healthAndWellness.physicalActivity.recommended} minutes)
              </p>
              <div className="w-full bg-gray-200 rounded-full h-4 mb-2">
                <div
                  className="bg-yellow-500 h-4 rounded-full"
                  style={{ width: `${getProgress(
                    healthAndWellness.physicalActivity.duration,
                    healthAndWellness.physicalActivity.recommended
                  )}%` }}
                ></div>
              </div>
              <p className="text-sm text-gray-600">
                {getProgress(healthAndWellness.physicalActivity.duration, healthAndWellness.physicalActivity.recommended)}% of recommended physical activity
              </p>
            </div>
          </div>

          {/* Nutrition */}
          <div className="mb-6 border p-4 rounded-lg bg-white shadow-md flex items-center">
            <FaUtensils className="text-2xl text-green-600 mr-4" /> {/* Nutrition icon */}
            <div>
              <p className="text-lg font-semibold">Nutrition</p>
              <p className="text-sm text-gray-600">
                Current Status: <span className="font-bold">{healthAndWellness.nutrition}</span>
              </p>
            </div>
          </div>

          {/* Hydration */}
          <div className="mb-6 border p-4 rounded-lg bg-white shadow-md flex items-center">
            <FaTint className="text-2xl text-blue-600 mr-4" /> {/* Hydration icon */}
            <div>
              <p className="text-lg font-semibold">Hydration</p>
              <p className="text-sm text-gray-600 mb-2">
                {healthAndWellness.hydration.intake} glasses of water/day (Recommended: {healthAndWellness.hydration.recommended} glasses)
              </p>
              <div className="w-full bg-gray-200 rounded-full h-4 mb-2">
                <div
                  className="bg-blue-500 h-4 rounded-full"
                  style={{ width: `${getProgress(healthAndWellness.hydration.intake, healthAndWellness.hydration.recommended)}%` }}
                ></div>
              </div>
              <p className="text-sm text-gray-600">
                {getProgress(healthAndWellness.hydration.intake, healthAndWellness.hydration.recommended)}% of recommended hydration
              </p>
            </div>
          </div>

          {/* Mental Health */}
          <div className="mb-6 border p-4 rounded-lg bg-white shadow-md flex items-center">
            <FaBrain className="text-2xl text-purple-600 mr-4" /> {/* Mental Health icon */}
            <div>
              <p className="text-lg font-semibold">Mental Health</p>
              <p className="text-sm text-gray-600">
                Status: <span className="font-bold">{healthAndWellness.mentalHealth.status}</span>
              </p>
              <p className="text-sm text-gray-600">
                Recommendation: {healthAndWellness.mentalHealth.recommendation}
              </p>
            </div>
          </div>

          {/* Hygiene */}
          <div className="mb-6 border p-4 rounded-lg bg-white shadow-md flex items-center">
            <FaHandsWash className="text-2xl text-teal-600 mr-4" /> {/* Hygiene icon */}
            <div>
              <p className="text-lg font-semibold">Hygiene</p>
              <p className="text-sm text-gray-600">
                Habits: <span className="font-bold">{healthAndWellness.hygiene.habits}</span>
              </p>
              <p className="text-sm text-gray-600">
                Recommendation: {healthAndWellness.hygiene.recommendation}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthWellnessCard;
