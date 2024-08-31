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
}

export default App
