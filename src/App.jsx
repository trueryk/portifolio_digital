import { Routes, Route } from 'react-router-dom'
import './App.css'
// pages
import Home from './pages/Home'
import GestaoAgil from './pages/GestaoAgil'
// componentes
import Menu from './components/Menu'
import MenuMateria from './components/MenuMateria'



export default function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path='/' element={
            <>
              <Menu />
              <Home />
            </>
          } />

          <Route path='/gap' element={
            <>
              <MenuMateria/>
              <GestaoAgil />
            </>
          } />
        </Routes>
      </div>
    </>
  )
}

