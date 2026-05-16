import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="w-full h-screen bg-primary text-secondary flex justify-center items-center ">
      <Routes>
          <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  )
}

export default App
