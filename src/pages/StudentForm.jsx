import React, { useState } from "react";
import axios from "axios"; // Import Axios

function StudentForm() {
    const [inputs, setInputs] = useState({
        uniqueId: "",
        bullying: "",
        financialIssues: "",
        mentalHealth: "",
        physicalHealth: "",
        genderDiscrimination: "",
        physicalDisability: "",
        workingAndStudying: "",
        interestedInStudies: "",
        schoolFarOff: "",
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setInputs((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const convertYesNoToBinary = (value) => {
        return value === "yes" ? 1 : value === "no" ? 0 : null;
    };

    // axios.defaults.withCredentials = true;

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Convert yes/no responses to 1/0
        const convertedInputs = {
            ...inputs,
            bullying: convertYesNoToBinary(inputs.bullying),
            financialIssues: convertYesNoToBinary(inputs.financialIssues),
            mentalHealth: convertYesNoToBinary(inputs.mentalHealth),
            physicalHealth: convertYesNoToBinary(inputs.physicalHealth),
            genderDiscrimination: convertYesNoToBinary(
                inputs.genderDiscrimination
            ),
            physicalDisability: convertYesNoToBinary(inputs.physicalDisability),
            workingAndStudying: convertYesNoToBinary(inputs.workingAndStudying),
            interestedInStudies: convertYesNoToBinary(
                inputs.interestedInStudies
            ),
            schoolFarOff: convertYesNoToBinary(inputs.schoolFarOff),
        };

        console.log(convertedInputs); // Log the converted form data

        try {
            const response = await axios.post(
                // "https://backend-for-hackathon.vercel.app/api/aI/feedback/student",
                "http://localhost:3000/api/aI/feedback/student",
                convertedInputs
            ); // Replace with your backend URL
            console.log(response.data); // Handle response data
            alert("Data submitted successfully!");
        } catch (error) {
            console.error("There was an error submitting the data!", error);
            alert("Error submitting data");
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <form
                onSubmit={handleSubmit}
                className="bg-white p-6 rounded shadow-md w-full max-w-lg"
            >
                <h2 className="text-2xl font-bold mb-4">Student Inputs</h2>

                {/* Unique uniqueId Input Field */}
                <div className="mb-4">
                    <label className="block mb-2 font-semibold">
                        Student uniqueId
                    </label>
                    <input
                        type="text"
                        name="uniqueId"
                        value={inputs.uniqueId}
                        onChange={handleChange}
                        className="border border-gray-300 rounded p-2 w-full"
                        required // Make this field required
                    />
                </div>

                {/* Question 1 */}
                <div className="mb-4">
                    <label className="block mb-2 font-semibold">
                        Have you experienced bullying or ragging at school?
                    </label>
                    <select
                        name="bullying"
                        value={inputs.bullying}
                        onChange={handleChange}
                        className="border border-gray-300 rounded p-2 w-full"
                        required
                    >
                        <option value="">Select</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>

                {/* Question 2 */}
                <div className="mb-4">
                    <label className="block mb-2 font-semibold">
                        Are you currently facing any financial difficulties that
                        affect your studies?
                    </label>
                    <select
                        name="financialIssues"
                        value={inputs.financialIssues}
                        onChange={handleChange}
                        className="border border-gray-300 rounded p-2 w-full"
                        required
                    >
                        <option value="">Select</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>

                {/* Question 3 */}
                <div className="mb-4">
                    <label className="block mb-2 font-semibold">
                        Are you currently experiencing any mental health issues
                        (such as stress, anxiety, or depression)?
                    </label>
                    <select
                        name="mentalHealth"
                        value={inputs.mentalHealth}
                        onChange={handleChange}
                        className="border border-gray-300 rounded p-2 w-full"
                        required
                    >
                        <option value="">Select</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>

                {/* Question 4 */}
                <div className="mb-4">
                    <label className="block mb-2 font-semibold">
                        Do you have any physical health problems affecting your
                        well-being or school performance?
                    </label>
                    <select
                        name="physicalHealth"
                        value={inputs.physicalHealth}
                        onChange={handleChange}
                        className="border border-gray-300 rounded p-2 w-full"
                        required
                    >
                        <option value="">Select</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>

                {/* Question 5 */}
                <div className="mb-4">
                    <label className="block mb-2 font-semibold">
                        Have you experienced any discrimination based on your
                        gender at school?
                    </label>
                    <select
                        name="genderDiscrimination"
                        value={inputs.genderDiscrimination}
                        onChange={handleChange}
                        className="border border-gray-300 rounded p-2 w-full"
                        required
                    >
                        <option value="">Select</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>

                {/* Question 6 */}
                <div className="mb-4">
                    <label className="block mb-2 font-semibold">
                        Do you have any physical disabilities that impact your
                        ability to participate in school activities?
                    </label>
                    <select
                        name="physicalDisability"
                        value={inputs.physicalDisability}
                        onChange={handleChange}
                        className="border border-gray-300 rounded p-2 w-full"
                        required
                    >
                        <option value="">Select</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>

                {/* Question 7 */}
                <div className="mb-4">
                    <label className="block mb-2 font-semibold">
                        Are you currently working and studying?
                    </label>
                    <select
                        name="workingAndStudying"
                        value={inputs.workingAndStudying}
                        onChange={handleChange}
                        className="border border-gray-300 rounded p-2 w-full"
                        required
                    >
                        <option value="">Select</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>

                {/* Question 8 */}
                <div className="mb-4">
                    <label className="block mb-2 font-semibold">
                        Are you interested in your studies?
                    </label>
                    <select
                        name="interestedInStudies"
                        value={inputs.interestedInStudies}
                        onChange={handleChange}
                        className="border border-gray-300 rounded p-2 w-full"
                        required
                    >
                        <option value="">Select</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>

                {/* Question 9 */}
                <div className="mb-4">
                    <label className="block mb-2 font-semibold">
                        Is your school far off from your residence?
                    </label>
                    <select
                        name="schoolFarOff"
                        value={inputs.schoolFarOff}
                        onChange={handleChange}
                        className="border border-gray-300 rounded p-2 w-full"
                        required
                    >
                        <option value="">Select</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>

                <button
                    type="submit"
                    className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                >
                    Submit
                </button>
            </form>
        </div>
    );
}

export default StudentForm;
