<<<<<<< HEAD
import { useState } from 'react'
import './App.css'
import ParentDashboard from './components/parentDashboard/ParentDashboard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ParentDashboard />
    </>
  )
=======
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Student from "./components/StudentDashboard/Student.jsx";
import "./App.css";

function App() {
    return (
        <div className="">
            <Student />
        </div>
    );
>>>>>>> origin/main
}

export default App;
