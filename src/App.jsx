import { Routes, Route } from 'react-router-dom'
import './App.css'
// pages
import Home from './pages/Home'
import GestaoAgil from './pages/GestaoAgil'
import TecnicasProgramacao from './pages/TecnicasProgramacao'
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

          <Route path='/tp' element={
            <>
              <MenuMateria/>
              <TecnicasProgramacao />
            </>
          } />
        </Routes>
      </div>
    </>
  )
}

