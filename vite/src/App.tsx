import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import { Home } from "./components/home";
import { Home2 } from "./components/home2";
import { PlanDeEstudios } from "./components/planDeEstudios";
import { HorarioActual } from "./components/horarioActual";
import { HorarioAnterior } from "./components/horarioAnterior";
import { CrearSolicitud } from "./components/crearSolicitud";
import { EstadoSolicitudes } from "./components/estadoSolicitudes";
import { HistorialSolicitudes } from "./components/historialSolicitudes";

function App() {
  return (
    <Router>
      <Routes>
        {/* Pantalla inicial */}
        <Route path="/" element={<Login />} />

        {/* Vistas principales */}
        <Route path="/home" element={<Home />} />
        <Route path="/home2" element={<Home2 />} />

        {/* Otras vistas */}
        <Route path="/plan-estudios" element={<PlanDeEstudios />} />
        <Route path="/horario-actual" element={<HorarioActual />} />
        <Route path="/horario-anterior" element={<HorarioAnterior />} />
        <Route path="/crear-solicitud" element={<CrearSolicitud />} />
        <Route path="/estado-solicitudes" element={<EstadoSolicitudes />} />
        <Route path="/historial-solicitudes" element={<HistorialSolicitudes />} />
      </Routes>
    </Router>
  );
}

export default App;

