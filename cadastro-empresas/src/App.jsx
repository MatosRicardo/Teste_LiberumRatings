import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cadastro from "./pages/Cadastro.jsx";
import Empresas from "./pages/Empresas.jsx";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/empresas/:id" element={<Empresas />} />
      </Routes>
    </Router>
  );
}
