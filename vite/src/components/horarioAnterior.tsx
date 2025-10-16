import React, { useState } from "react";

interface Props {
  styles?: string;
}

const dias: string[] = ["LUNES", "MARTES", "MIÉRCOLES", "JUEVES", "VIERNES", "SÁBADO"];
const horas: string[] = ["7:00","8:30","10:00","11:30","1:00","2:30","4:00","5:30","7:00"];
const semestres: string[] = ["2025-1", "2024-2", "2024-1", "2023-2", "2023-1"];

export const HorarioAnterior: React.FC<Props> = ({ styles = "" }) => {
  const [semestre, setSemestre] = useState<string>(semestres[0]);

  return (
    <div
      className={`relative flex flex-col items-center justify-start min-h-screen bg-red-100 pt-10 px-6 ${styles}`}
    >
      {/* Botón regresar */}
      <button
        aria-label="Regresar"
        onClick={() => window.history.back()}
        className="fixed left-6 top-6 z-50 w-10 h-10 rounded-full bg-white/95 shadow-md flex items-center justify-center hover:scale-105 transition"
      >
        <svg
          className="w-5 h-5 text-red-600"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden
        >
          <path
            d="M15 18L9 12L15 6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {/* Título */}
      <h1 className="text-3xl font-bold text-red-900 mb-4">
        Horarios anteriores
      </h1>

      {/* Selector de semestre */}
      <div className="mb-6">
        <label className="text-lg font-semibold text-red-800 mr-3">
          Selecciona semestre:
        </label>
        <select
          value={semestre}
          onChange={(e) => setSemestre(e.target.value)}
          className="bg-white text-red-800 font-medium border-2 border-red-400 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
        >
          {semestres.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>

      {/* Contenedor horario */}
      <div className="bg-red-50 p-4 rounded-2xl shadow-md w-[90%] max-w-5xl">
        <div className="grid grid-cols-7 gap-3">
          {/* Encabezados */}
          <div className="bg-red-400 text-white font-bold px-6 py-3 rounded-md text-center">
            HORA
          </div>
          {dias.map((dia) => (
            <div
              key={dia}
              className="bg-red-400 text-white font-bold px-6 py-3 rounded-md text-center"
            >
              {dia}
            </div>
          ))}

          {/* Celdas */}
          {horas.map((hora) => (
            <React.Fragment key={hora}>
              <div className="bg-gray-200 text-black font-semibold px-4 py-2 rounded-md text-center">
                {hora}
              </div>
              {dias.map((dia) => (
                <div
                  key={`${hora}-${dia}`}
                  className="bg-gray-200 rounded-md h-10 transition hover:bg-gray-300"
                ></div>
              ))}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};
