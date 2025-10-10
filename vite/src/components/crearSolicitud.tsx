import { useNavigate } from "react-router-dom";

export const CrearSolicitud = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-red-100 relative">
      <h1 className="text-3xl font-bold text-red-900 mb-6">
        Crear nueva solicitud
      </h1>

      <form className="bg-white p-8 rounded-2xl shadow-lg w-96">
        <label className="block text-red-700 font-semibold mb-2">
          Asunto:
        </label>
        <input
          type="text"
          className="w-full border border-red-300 rounded-md p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-red-400"
          placeholder="Ej: Cambio de grupo"
        />

        <label className="block text-red-700 font-semibold mb-2">
          Descripción:
        </label>
        <textarea
          className="w-full border border-red-300 rounded-md p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-red-400"
          placeholder="Describe tu solicitud..."
        ></textarea>

        <button
          type="submit"
          className="w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600 transition-colors"
        >
          Enviar
        </button>
      </form>

      {/* Botón para volver */}
      <button
        className="absolute top-6 left-1/2 -translate-x-1/2 bg-red-500 text-white p-3 rounded-full shadow-lg hover:bg-red-600 transition-colors"
        onClick={() => navigate("/home2")}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
          viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
        </svg>
      </button>
    </div>
  );
};

