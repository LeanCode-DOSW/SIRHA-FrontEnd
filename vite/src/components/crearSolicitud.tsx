import { useNavigate } from "react-router-dom";

export const CrearSolicitud = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-red-100 relative">
      {/* Botón de retroceso */}
      <button
        className="absolute top-8 left-8 bg-red-200 text-red-700 p-3 rounded-full hover:bg-red-300 transition-colors"
        onClick={() => navigate(-1)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      {/* Contenedor principal */}
      <div className="bg-red-700 text-white rounded-3xl p-10 shadow-2xl w-[550px]">
        <h2 className="text-center text-2xl font-bold mb-8">
          Solicitud de cambio de materia
        </h2>

        <form className="space-y-6">
          {/* Campos principales */}
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Nombre"
                className="bg-red-300 text-white placeholder-white/80 rounded-lg p-3 focus:outline-none w-full"
              />
              <input
                type="text"
                placeholder="Materia destino"
                className="bg-red-300 text-white placeholder-white/80 rounded-lg p-3 focus:outline-none w-full"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Grupo"
                className="bg-red-300 text-white placeholder-white/80 rounded-lg p-3 focus:outline-none w-full"
              />
              <input
                type="text"
                placeholder="Grupo destino"
                className="bg-red-300 text-white placeholder-white/80 rounded-lg p-3 focus:outline-none w-full"
              />
            </div>
          </div>

          {/* Observaciones */}
          <div>
            <label className="block text-white font-semibold mb-2">
              Observaciones adicionales
            </label>
            <textarea
              placeholder="Escriba aquí los motivos o comentarios..."
              className="w-full bg-white text-red-800 rounded-lg p-3 focus:outline-none resize-none h-28"
            ></textarea>
          </div>

          {/* Botón */}
          <button
            type="submit"
            className="w-full bg-white text-red-700 font-bold text-lg py-3 rounded-full hover:bg-red-200 transition-colors"
          >
            Crear Solicitud
          </button>
        </form>
      </div>
    </div>
  );
};
