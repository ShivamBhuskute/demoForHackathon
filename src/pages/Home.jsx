import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();

    const handleClickButton = () => {
        navigate("/student");
    };
    const handleClickButtonParent = () => {
        navigate("/parents");
    };
    const handleClickButtonUni = () => {
        navigate("/university");
    };
    return (
        <>
            <div>Home</div>
            <button
                className="mt-4 p-2 bg-blue-600 text-white rounded  hover:bg-blue-100 hover:text-black"
                onClick={handleClickButton}
            >
                Student
            </button>{" "}
            <br />
            <button
                className="mt-4 p-2 bg-blue-600 text-white rounded  hover:bg-blue-100 hover:text-black"
                onClick={handleClickButtonParent}
            >
                Parent
            </button>{" "}
            <br />
            <button
                className="mt-4 p-2 bg-blue-600 text-white rounded  hover:bg-blue-100 hover:text-black"
                onClick={handleClickButtonUni}
            >
                UNI
            </button>
        </>
    );
}

export default Home;
