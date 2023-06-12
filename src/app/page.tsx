
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from '../pages/home'
// import CadastroUsuario  from '../pages/cadastroUsuario'
// import cadastrarUsuario from '../pages/usuarios/cadastrarUsuario/index'
import CadastrarUsuario from '../pages/usuarios/cadastrarUsuario/index'
export default function App() {
  return (
    <>

    
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/cadastrarUsuario" element={<CadastrarUsuario/>}/>
        </Routes>
        </Router>
    </>
   
)
  
}