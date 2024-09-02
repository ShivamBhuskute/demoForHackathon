import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import React from "react";
import ReactDOM from "react-dom/client";
import {
    Route,
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
} from "react-router-dom";
import App from "./App";
import "./index.css";
import Layout from "./Layout";
import Home from "./pages/Home";
import ParentDash from "./pages/ParentDash";
import UniversityDash from "./pages/UniversityDash";
import StudentDash from "./pages/StudentDash";
import Working from "./pages/Working";
import About from "./pages/About";
import Settings from "./pages/Settings";

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
        </Route>
    )
);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
