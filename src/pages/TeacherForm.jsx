import React, { useState } from "react";
import axios from "axios";

function TeacherForm() {
    const [inputs, setInputs] = useState({
        uniqueId: "",
        attendance: "",
        grades: "",
        streak: "", // This will now hold 1 or 0
        behaviour: "",
        test: "",
        attention: "",
    });

    const handleChange = (event) => {
        const { name, value } = event.target;

        if (name === "streak") {
            // Set streak to 1 for "yes" and 0 for "no"
            setInputs((prevState) => ({
                ...prevState,
                [name]: value === "1" ? 1 : value === "0" ? 0 : "", // Updated to use 1 and 0
            }));
        } else if (name === "behaviour") {
            const numericValue = Number(value);
            if (numericValue >= 1 && numericValue <= 5) {
                setInputs((prevState) => ({
                    ...prevState,
                    [name]: numericValue,
                }));
            } else if (value === "") {
                // Allow empty input to reset value
                setInputs((prevState) => ({
                    ...prevState,
                    [name]: "",
                }));
            }
        } else {
            setInputs((prevState) => ({
                ...prevState,
                [name]: value,
            }));
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post("http://localhost:3000/api/aI/feedback/teacher", inputs);
            console.log("Response:", response.data); // Handle success response
            setInputs({
                uniqueId: "",
                attendance: "",
                grades: "",
                streak: "",
                behaviour: "",
                test: "",
                attention: "",
            });
            alert("Data submitted successfully!");
        } catch (error) {
            console.error("Error submitting form:", error); // Handle error response
        }
    };

    return (
        <div className="flex items-center justify-center h-screen">
            <form
                onSubmit={handleSubmit}
                className="bg-white p-6 rounded shadow-md w-96"
            >
                <h2 className="text-lg font-bold mb-4">Teacher Inputs</h2>

                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">
                        Unique ID of the student
                        <input
                            type="text"
                            name="uniqueId"
                            value={inputs.uniqueId}
                            onChange={handleChange}
                            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                        />
                    </label>
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">
                        What percentage of classes has the student attended?
                        <input
                            type="text"
                            name="attendance"
                            value={inputs.attendance}
                            onChange={handleChange}
                            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                        />
                    </label>
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">
                        What percentage of marks has the student achieved in their assessments?
                        <input
                            type="text"
                            name="grades"
                            value={inputs.grades}
                            onChange={handleChange}
                            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                        />
                    </label>
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">
                        Has the student consistently submitted their homework?
                        <select
                            name="streak"
                            value={inputs.streak}
                            onChange={handleChange}
                            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                        >
                            <option value="">Select</option>
                            <option value="1">Yes</option> {/* Changed to use 1 */}
                            <option value="0">No</option> {/* Changed to use 0 */}
                        </select>
                    </label>
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">
                        How would you rate the student's classroom behaviour and participation? (1-5)
                        <input
                            type="number"
                            name="behaviour"
                            min="1"
                            max="5"
                            value={inputs.behaviour}
                            onChange={handleChange}
                            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                        />
                    </label>
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">
                        What is the student's average percentage score in weekly tests?
                        <input
                            type="text"
                            name="test"
                            value={inputs.test}
                            onChange={handleChange}
                            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                        />
                    </label>
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">
                        What is the student's percentage score in attention-based assessments?
                        <input
                            type="text"
                            name="attention"
                            value={inputs.attention}
                            onChange={handleChange}
                            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                        />
                    </label>
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 rounded"
                >
                    Submit
                </button>
            </form>
        </div>
    );
}

export default TeacherForm;