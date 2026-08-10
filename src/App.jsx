import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import './App.css'
import { useState } from 'react'

export default function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path='/' element={<Home/>} />
        </Routes>
      </div>
    </>
  )
}

