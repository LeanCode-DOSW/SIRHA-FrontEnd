import { useNavigate } from "react-router-dom";

export const EstadoSolicitudes = () => {
  const navigate = useNavigate();

  const solicitudes = [
    { id: "000001", estado: "Aprobada", fecha: "01/10/25" },
    { id: "000002", estado: "En revisión", fecha: "05/10/25" },
    { id: "000003", estado: "Rechazada", fecha: "07/10/25" },
  ];

  const colorEstado = (estado: string) => {
    switch (estado) {
      case "Aprobada":
        return "text-green-600 font-semibold";
      case "Rechazada":
        return "text-red-600 font-semibold";
      default:
        return "text-yellow-600 font-semibold";
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-red-100 relative">
      <button
        onClick={() => navigate("/home2")}
        className="absolute top-6 left-6 bg-red-400 hover:bg-red-500 text-white p-2 rounded-full transition-colors"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
          viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <div className="bg-red-800 text-white p-8 rounded-3xl shadow-lg w-11/12 max-w-lg text-center">
        <h1 className="text-2xl font-bold mb-6">Mis peticiones de solicitudes</h1>

        <div className="flex flex-col gap-6">
          {solicitudes.map((s, index) => (
            <div
              key={index}
              className="bg-gray-200 text-black rounded-xl p-4 grid grid-cols-3 text-left"
            >
              <div>
                <p className="text-sm font-semibold text-gray-600">No. Solicitud</p>
                <p>{s.id}</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-600">Estado</p>
                <p className={colorEstado(s.estado)}>{s.estado}</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-600">Fecha</p>
                <p>{s.fecha}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
