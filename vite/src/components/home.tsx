import Semaforo from '../assets/33.png';
import Horario from '../assets/11.png';
import Historial from '../assets/22.png';

interface Props {
  styles?: string;
}

export const Home = ({ styles = '' }: Props) => {
  return (
    <div className={`flex flex-col items-center justify-start min-h-screen bg-red-100 pt-20 relative ${styles}`}>
      <h1 className="text-3xl font-bold text-red-900 mb-4">
        Consulta tu información académica
      </h1>
      <h3 className="text-red-700 mb-10">
        Accede a tus horarios, materias y plan de estudios en un solo lugar
      </h3>

      <div className="flex flex-wrap justify-center gap-8 mb-20">
        {/* Tarjeta 1 */}
        <div className="bg-red-400 text-white rounded-2xl w-64 h-64 flex flex-col items-center justify-center shadow-lg hover:bg-red-500 transition-colors">
          <img src={Horario} alt="Horario actual" className="w-40 h-40 mb-4 object-contain" />
          <h2 className="text-lg font-semibold">Horario Actual</h2>
        </div>

        {/* Tarjeta 2 */}
        <div className="bg-red-400 text-white rounded-2xl w-64 h-64 flex flex-col items-center justify-center shadow-lg hover:bg-red-500 transition-colors">
          <img src={Historial} alt="Semestres anteriores" className="w-40 h-40 mb-4 object-contain" />
          <h2 className="text-lg font-semibold">Semestres Anteriores</h2>
        </div>

        {/* Tarjeta 3 */}
        <div className="bg-red-400 text-white rounded-2xl w-64 h-64 flex flex-col items-center justify-center shadow-lg hover:bg-red-500 transition-colors">
          <img src={Semaforo} alt="Plan de estudios" className="w-40 h-40 mb-4 object-contain" />
          <h2 className="text-lg font-semibold">Plan de estudios</h2>
        </div>
      </div>

      {/* Flecha para cambiar de página */}
      <button
        className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-red-500 text-white p-3 rounded-full shadow-lg hover:bg-red-600 transition-colors"
        onClick={() => {
          // aquí pones tu lógica de navegación, por ejemplo con react-router:
          // navigate("/otraPagina")
          console.log("Ir a la siguiente página");
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
    </div>
  );
};
