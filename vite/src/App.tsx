import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./components/home";
import { Home2 } from "./components/home2";
import { CrearSolicitud } from "./components/crearSolicitud";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home2" element={<Home2 />} />
        <Route path="/crear-solicitud" element={<CrearSolicitud />} />
      </Routes>
    </Router>
  );
}

export default App;

