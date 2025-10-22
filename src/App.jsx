import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Inicio from './pages/Inicio'
import Clientes from './pages/Clientes'
import Departamentos from './pages/Departamentos'
import Encuestas from './pages/Encuestas'
import Usuarios from './pages/Usuarios'
import { useState } from "react"

function App(){






  return (
    <>
    <Router>
      <div className="container-fluid">
        <div className="row">

          <Routes>
            
            <Route path="/" element={<Inicio/>} />
            <Route path="/clientes" element={<Clientes/>} />
            <Route path="/departamentos" element={<Departamentos/>} />
            <Route path="/encuestas" element={<Encuestas/>}/>
            <Route path="/usuarios" element={<Usuarios/>} />

          </Routes>

        </div>
      </div>
    </Router>
    </>
  )




}



export default App