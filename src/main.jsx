// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
import React from "react";
import ReactDOM from "react-dom/client";
import {
    Route,
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
} from "react-router-dom";
// import App from "./App";
import "./index.css";
import Layout from "./Layout";
import Home from "./pages/Home";
import ParentDash from "./pages/ParentDash";
import UniversityDash from "./pages/UniversityDash";
import StudentDash from "./pages/StudentDash";
import Working from "./pages/Working";
import About from "./pages/About";
import Settings from "./pages/Settings";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import TeacherDash from "./pages/TeacherDash";
import StudentForm from "./pages/StudentForm";
import TeacherForm from "./pages/TeacherForm";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Layout />}>
            <Route path="" element={<Home />} />
            <Route path="student" element={<StudentDash />} />
            <Route path="parents" element={<ParentDash />} />
            <Route path="university" element={<UniversityDash />} />
            {/* <Route path="teacher" element={<UniversityDash />} /> */}
            <Route path="working" element={<Working />} />
            <Route path="about" element={<About />} />
            <Route path="settings" element={<Settings />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="signup" element={<SignupPage />} />
            <Route path="teacher" element={<TeacherDash />} />
            <Route path="stu_form" element={<StudentForm />} />
            <Route path="teach_form" element={<TeacherForm />} />
        </Route>
    )
);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
