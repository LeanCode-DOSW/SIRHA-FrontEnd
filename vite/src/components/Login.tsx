import Ladoder from '../assets/ladoder.png';
import Calendario from '../assets/calendario.png';
import Fondo from '../assets/fondo5.jpg';
function Login() {
  return (
    <div
      className="flex items-center justify-center h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${Fondo})` }}
    >
      {/* Card */}
      <div className="flex rounded-2xl overflow-hidden shadow-lg w-[800px] h-[500px] bg-white">
        
        {/* Lado Izquierdo */}
        <div className="w-1/2 bg-red-400 flex flex-col items-center justify-center p-8">
          <div className="p-4 rounded-lg mb-6 flex items-center justify-center">
            <img src={Calendario} alt="calendario" className="w-24 h-24" />
          </div>

          <h1 className="text-2xl font-bold text-white mb-6">
            ¡BIENVENIDO A SHIRA!
          </h1>

          {/* Inputs */}
          <input
            type="text"
            placeholder="Usuario"
            className="w-full mb-4 px-4 py-2 rounded bg-white text-gray-700 focus:outline-none"
          />
          <input
            type="password"
            placeholder="Contraseña"
            className="w-full mb-6 px-4 py-2 rounded bg-white text-gray-700 focus:outline-none"
          />

          {/* Botón */}
          <button className="w-full py-2 bg-white text-red-600 font-bold rounded-full hover:bg-gray-100 transition">
            INGRESAR
          </button>
        </div>

        {/* Lado Derecho */}
        <div className="w-1/2 bg-red-500 flex items-center justify-center">
          {/* Aquí va tu imagen abstracta */}
          <img
            src={Ladoder}
            alt="pintura"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default Login;
