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
import Home_Student from './pages/Home_Student';
import Home_Parents from './pages/Home_Parents';
import Home_Teacher from './pages/Home_Teacher';
import Home_University from './pages/Home_University';
// import Signup from "./components/Signup";



const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Layout />}>
            {/* <Route path="/Home" element={<Home />} /> */}
            <Route index element={<Home />} />  
            <Route path="StudentDash" element={<StudentDash />} />
            <Route path="ParentDash" element={<ParentDash />} />
            <Route path="UniversityDash" element={<UniversityDash />} />
            <Route path="working" element={<Working />} />
            <Route path="about" element={<About />} />
            <Route path="settings" element={<Settings />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="signup" element={<SignupPage />} />
            <Route path="TeacherDash" element={<TeacherDash />} />
            {/* <Route path="/" element={<HomePage />} /> */}
            <Route path="/Home_Student" element={<Home_Student />} />
            <Route path="/Home_Parents" element={<Home_Parents />} />
            <Route path="/Home_Teacher" element={<Home_Teacher />} />
            <Route path="/Home_University" element={<Home_University />} />
        </Route>
    )
);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
