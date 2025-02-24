import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Register from './pages/Register'
import Admin from './pages/Admin'

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/adminpro" element={<Admin />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
