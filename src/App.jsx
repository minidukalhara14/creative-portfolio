import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ContactPage from './pages/ContactPage'

function App() {
 

  return (
    <div className="w-full  bg-primary text-secondary flex justify-center items-center ">
      <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<div>About Page</div>} />
          <Route path="/projects" element={<div>Projects Page</div>} />
          <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </div>
  )
}

export default App
