import TarefasComStatus from "./pages/TarefasComStatus";
import TarefasSimples from "./pages/TarefasSimples";
import ListaSupermercado from "./pages/ListaSupermercado";
import Calculadora from "./pages/Calculadora";
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"


export default function App(){

  //Criar a estrutura de rotas de navegação
  return(
    <Router> 
      <div className="container pt-3">
        <nav className="text-center d-flex justify-content-center gap-3">
          <Link to="/" className="btn btn-outline-danger btn-sm">Tarefas Simples</Link>
          <Link to="/status" className="btn btn-outline-primary btn-sm">Tarefas com Status</Link>
          <Link to="/supermercado" className="btn btn-outline-primary btn-sm">Lista Supermercado</Link>
          <Link to="/calculadora" className="btn btn-outline-primary btn-sm">Calculadora</Link>

        </nav>

        <Routes>
          <Route path="/" element={<TarefasSimples/>}/>
          <Route path="/status" element={<TarefasComStatus/>}/> 
          <Route path="/supermercado" element={<ListaSupermercado/>}/> 
          <Route path="/calculadora" element={<Calculadora/>}/> 
        </Routes>
      </div>
    </Router>
  )
}
