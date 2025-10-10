import { useNavigate } from "react-router-dom";
import Crear from '../assets/crear.png';
import Estado from '../assets/estado.png';
import Historial from '../assets/historiall.png';

interface Props {
  styles?: string;
}

export const Home2 = ({ styles = '' }: Props) => {
  const navigate = useNavigate();

  return (
    <div className={`flex flex-col items-center justify-start min-h-screen bg-red-100 pt-20 relative ${styles}`}>
      <h1 className="text-3xl font-bold text-red-900 mb-4 text-center">
        Consulta tu información de solicitudes
      </h1>

      <h3 className="text-red-700 mb-10 text-center">
        Crea, consulta y revisa tus solicitudes en un solo lugar
      </h3>

      <div className="flex flex-wrap justify-center gap-8 mb-20">
        {/* Crear Solicitud */}
        <div
          className="bg-red-400 text-white rounded-2xl w-64 h-64 flex flex-col items-center justify-center shadow-lg hover:bg-red-500 transition-colors cursor-pointer"
          onClick={() => navigate("/crear-solicitud")}
        >
          <img src={Crear} alt="Crear solicitud" className="w-40 h-40 mb-4 object-contain" />
          <h2 className="text-lg font-semibold">Crear Solicitud</h2>
        </div>

        {/* Estado Solicitudes */}
        <div className="bg-red-400 text-white rounded-2xl w-64 h-64 flex flex-col items-center justify-center shadow-lg hover:bg-red-500 transition-colors">
          <img src={Estado} alt="Estado solicitudes" className="w-40 h-40 mb-4 object-contain" />
          <h2 className="text-lg font-semibold">Estado Solicitudes</h2>
        </div>

        {/* Historial Solicitudes */}
        <div className="bg-red-400 text-white rounded-2xl w-64 h-64 flex flex-col items-center justify-center shadow-lg hover:bg-red-500 transition-colors">
          <img src={Historial} alt="Historial solicitudes" className="w-40 h-40 mb-4 object-contain" />
          <h2 className="text-lg font-semibold">Historial Solicitudes</h2>
        </div>
      </div>

      {/* Flecha para volver a Home */}
      <button
        className="absolute top-6 left-1/2 -translate-x-1/2 bg-red-500 text-white p-3 rounded-full shadow-lg hover:bg-red-600 transition-colors"
        onClick={() => navigate("/")}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
          viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
        </svg>
      </button>
    </div>
  );
};
