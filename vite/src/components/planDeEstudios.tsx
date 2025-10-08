interface Props {
  styles?: string;
}

export const PlanDeEstudios = ({ styles = '' }: Props) => {
  return (
    <div className={`flex flex-col items-center justify-start min-h-screen bg-red-50 pt-16 ${styles}`}>
      <header className="w-full bg-red-800 text-center py-4 shadow-md relative">
        {/* Botón de retroceso */}
        <button
          aria-label="volver"
          className="absolute left-4 top-3 w-10 h-10 rounded-full bg-white/90 shadow flex items-center justify-center hover:scale-105 transition"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 18L9 12L15 6" stroke="#9B1C1C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        <h1 className="text-3xl font-bold text-white">Plan de estudios</h1>
      </header>

      <main className="w-11/12 mt-6 grid grid-cols-3 gap-6 items-start">
        {/* Información del estudiante */}
        <section className="col-span-2 bg-gray-100 p-4 rounded-lg shadow-sm">
          <div className="flex flex-wrap justify-between gap-4">
            <div className="w-1/2">
              <p><strong>ID:</strong> xxxxxx</p>
              <p><strong>Nombre:</strong> xxxxx</p>
            </div>
            <div className="w-1/2">
              <p><strong>Créditos totales:</strong> xxxxx</p>
              <p><strong>Créditos faltantes:</strong> xxxxx</p>
              <p><strong>Carrera:</strong> xxxxx</p>
            </div>
          </div>
        </section>

        {/* Leyenda - Estado de cursos */}
        <aside className="bg-white p-4 rounded-lg shadow-sm">
          <h3 className="font-semibold mb-3">Estado del curso</h3>
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <span className="w-6 h-6 rounded-sm bg-green-400 ring-1 ring-gray-200" aria-hidden></span>
              <span className="text-sm">Curso Aprobado</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="w-6 h-6 rounded-sm bg-blue-400 ring-1 ring-gray-200" aria-hidden></span>
              <span className="text-sm">Curso en Progreso</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="w-6 h-6 rounded-sm bg-red-400 ring-1 ring-gray-200" aria-hidden></span>
              <span className="text-sm">Curso Reprobado</span>
            </div>
          </div>
        </aside>

        {/* Semestres */}
        <section className="col-span-3 mt-2">
          <div className="flex flex-wrap justify-center gap-6 px-6">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((semestre) => (
              <div
                key={semestre}
                className="w-56 bg-red-300 rounded-lg shadow p-3 flex-shrink-0"
              >
                <h2 className="text-center font-bold text-gray-800 mb-3">
                  {semestre}er. Semestre
                </h2>

                {[1, 2, 3, 4, 5].map((curso) => (
                  <div
                    key={curso}
                    className="flex items-center justify-between bg-gray-50 text-black text-sm px-3 py-2 rounded mt-2 shadow-sm"
                  >
                    <span>Curso {curso + (semestre - 1) * 5}</span>
                    {/* indicador lateral de estado: verde/azul/rojo */}
                    <span className="bg-green-400 w-3 h-6 rounded-sm ml-3" aria-hidden></span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};