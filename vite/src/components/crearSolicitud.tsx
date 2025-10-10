import { Input } from "./input";

interface Props {
  styles?: string;
}

export const CrearSolicitud = ({ styles = "" }: Props) => {
  return (
    <div
      className={`flex flex-col items-center justify-start min-h-screen bg-rose-100 pt-20 relative ${styles}`}
    >
      <div className="flex flex-col bg-red-900 text-white p-8 rounded-xl shadow-lg w-full max-w-3xl">
        
        <h1 className="font-bold text-3xl text-center mb-8">
          Solicitud de cambio de materia
        </h1>

        <div className="flex flex-col md:flex-row md:space-x-8 mb-8">
          {/* Materia con problema */}
          <div className="flex flex-col flex-1 space-y-4">
            <h2 className="text-xl font-semibold mb-2">Materia con problema</h2>
            <Input placeholder="Nombre" />
            <Input placeholder="Grupo" />
          </div>

          {/* Sugerencia de cambio */}
          <div className="flex flex-col flex-1 space-y-4 mt-6 md:mt-0">
            <h2 className="text-xl font-semibold mb-2">Sugerencia de cambio</h2>
            <Input placeholder="Materia destino" />
            <Input placeholder="Grupo de destino" />
          </div>
        </div>

        {/* Observaciones */}
        <div className="flex flex-col mb-6">
          <h2 className="text-lg mb-2">Observaciones adicionales</h2>
          <textarea
            placeholder="Escriba aquí los motivos o comentarios..."
            className="w-full h-24 bg-rose-50 text-black rounded-lg p-3 resize-none focus:ring-2 focus:ring-rose-400 outline-none"
          />
        </div>

        {/* Botón */}
        <button
          type="button"
          className="text-center bg-rose-200 text-red-900 font-semibold py-2 px-6 rounded-full w-40 mx-auto hover:bg-rose-300 transition"
        >
          Crear solicitud
        </button>
      </div>
    </div>
  );
};
