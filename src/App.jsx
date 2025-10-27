import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Evaluaciones from './pages/Evaluaciones'
import Inicio from './pages/Inicio'
import Clientes from './pages/Clientes'
import Departamentos from './pages/Departamentos'
import Encuestas from './pages/Encuestas'
import Usuarios from './pages/Usuarios'
import LoginUsuario from "./pages/LoginUsuario"
import LoginAdmin from './pages/LoginAdmin'




function App(){

  return (
    <>
    <Router>
      <div className="container-fluid">
        <div className="row">

          <Routes>
            
            <Route path="/" element = {<LoginUsuario/>} />
            <Route path="/login_admin" element = {<LoginAdmin/>} />
            <Route path="/perfil_admin" element={ <Inicio/> } />
            <Route path="/clientes" element={ <Clientes/> } />
            <Route path="/departamentos" element={ <Departamentos/> } />
            <Route path="/encuestas" element={ <Encuestas/> }/>
            <Route path="/usuarios" element={ <Usuarios/> } />
            <Route path="/encuestas" element={ <Encuestas/> } />
            <Route path="/evaluaciones" element={ <Evaluaciones/> } />

          </Routes>

        </div>
      </div>
    </Router>
    </>
  )




}



export default App