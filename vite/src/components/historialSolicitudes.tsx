import { useNavigate } from "react-router-dom";

export const HistorialSolicitudes = () => {
  const navigate = useNavigate();

  // Datos simulados (puedes luego cargarlos desde backend)
  const historial = [
    { id: "xxxxxxxxxx", estado: "Aprobada", fecha: "xx/xx/xx" },
    { id: "xxxxxxxxxx", estado: "Rechazada", fecha: "xx/xx/xx" },
    { id: "xxxxxxxxxx", estado: "Aprobada", fecha: "xx/xx/xx" },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-red-100 relative">
      {/* Botón volver */}
      <button
        onClick={() => navigate("/home2")}
        className="absolute top-6 left-6 bg-red-400 hover:bg-red-500 text-white p-2 rounded-full transition-colors"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
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
      <div className="bg-red-800 text-white p-8 rounded-3xl shadow-lg w-11/12 max-w-lg text-center">
        <h1 className="text-2xl font-bold mb-6">Historial de solicitudes</h1>

        <div className="flex flex-col gap-4">
          {historial.map((h, index) => (
            <div
              key={index}
              className={`rounded-xl p-4 grid grid-cols-3 text-left ${
                h.estado === "Rechazada"
                  ? "bg-red-300 text-black"
                  : "bg-red-100 text-black"
              }`}
            >
              <div>
                <p className="text-sm font-semibold text-gray-700">
                  No. Solicitud
                </p>
                <p>{h.id}</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-700">Estado</p>
                <p>{h.estado}</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-700">Fecha</p>
                <p>{h.fecha}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
