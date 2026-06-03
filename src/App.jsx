import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ContactPage from './pages/ContactPage'
import ProjectPage from './pages/ProjectPage'
import ProjectDetailPage from './pages/ProjectDetailPage'

function App() {
 

  return (
    <div className="w-full  bg-primary text-secondary flex justify-center items-center ">
      <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={ <h1>About page</h1>} />
          <Route path="/projects" element={<ProjectPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/projects/:id" element={<ProjectDetailPage />} />
      </Routes>
    </div>
  )
}

export default App
