import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Menu from './components/Menu'
import './App.css'

export default function App() {
  return (
    <>
      <div>
        <Menu/>
        <Routes>
          <Route path='/' element={<Home/>} />
        </Routes>
      </div>
    </>
  )
}

