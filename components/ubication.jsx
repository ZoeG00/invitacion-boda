import confetti from "canvas-confetti";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import div from "../src/assets/elementos-graficos/divisor1.svg";

export default function Ubicacion() {
  const divisor = div;

  const lanzarSerpentinas = () => {
    confetti({
      particleCount: 150,
      spread: 100,
      origin: { x: 0.5, y: 0.5 },
      colors: ["#FF7E5F", "#FEB47B", "#606C38"],
    });
  };

  useEffect(() => {
    AOS.init({ duration: 2000});
  }, []);

  return (
    <div className="relative w-full min-h-screen bg-timberwolf flex flex-col items-center py-10">
      {/* Divisor superior */}
      <img src={divisor} alt="Divisor" className="w-64 opacity-50 mb-8" />

      {/* Título principal */}
      <h1
        id="guarda-la-fecha"
        className="text-4xl font-bold text-armygreen mb-4"
        data-aos="fade-up"
      >
        ¡Guardá la fecha!
      </h1>

      {/* Tarjetas de información */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl px-6">
        {/* Tarjeta de Fecha */}
        <div
          className="bg-white shadow-lg rounded-lg p-6 text-center"
          data-aos="fade-up"
        >
          <i className="fas fa-calendar-alt text-pumpkin text-4xl mb-4"></i>
          <h2 className="text-xl font-semibold text-armygreen">Fecha</h2>
          <p className="text-lg text-gray-700 mt-2">7 de junio de 2025</p>
          <button
            onClick={lanzarSerpentinas}
            className="mt-4 px-4 py-2 bg-armygreen text-white rounded-full hover:bg-green-800 transition-all"
          >
            Celebrar
          </button>
        </div>

        {/* Tarjeta de Ceremonia */}
        <div
          className="bg-white shadow-lg rounded-lg p-6 text-center"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <i className="fas fa-church text-pumpkin text-4xl mb-4"></i>
          <h2 className="text-xl font-semibold text-armygreen">Ceremonia</h2>
          <p className="text-lg text-gray-700 mt-2">13:00hs</p>
          <p className="text-sm text-gray-500 mt-1 italic">Momento especial</p>
        </div>

        {/* Tarjeta de Baile */}
        <div
          className="bg-white shadow-lg rounded-lg p-6 text-center"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <i className="fas fa-music text-pumpkin text-4xl mb-4"></i>
          <h2 className="text-xl font-semibold text-armygreen">Baile</h2>
          <p className="text-lg text-gray-700 mt-2">16:00hs</p>
          <p className="text-sm text-gray-500 mt-1 italic">¡A divertirse!</p>
        </div>

        {/* Tarjeta de Lugar */}
        <div
          className="bg-white shadow-lg rounded-lg p-6 text-center col-span-1 md:col-span-3"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <i className="fas fa-map-marker-alt text-pumpkin text-4xl mb-4"></i>
          <h2 className="text-xl font-semibold text-armygreen">Lugar</h2>
          <p className="text-lg text-gray-700 mt-2">Finca La Mariana</p>
          <p className="text-sm text-gray-500 mt-1">La Junta S/N, San Martín</p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3342.3716573423167!2d-68.4080408!3d-33.0993117!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x967e0b243163de75%3A0x3ec1a576bd118f0d!2sFinca%20La%20Mariana!5e0!3m2!1ses!2sar!4v1734469897103!5m2!1ses!2sar"
            width="100%"
            height="150"
            className="mt-4 rounded-lg border"
            title="Mapa Finca La Mariana"
          ></iframe>
          <a
            href="https://maps.app.goo.gl/ViH1eZywZnUGDYfG9"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block px-4 py-2 bg-armygreen text-white rounded-full hover:bg-green-700 transition-all"
          >
            Ver mapa
          </a>
        </div>
        <div>
          
        </div>
        <p
          id="frase-fotos"
          className=" text-gray-500 flex justify-center items-center w-full"
        >
          Cada momento cuenta. ¡Llega puntual para compartir la emoción desde el principio!
        </p>
      </div>

      {/* Divisor inferior */}
      <img src={divisor} alt="Divisor" className="w-64 opacity-50 mt-8" />
    </div>
  );
}
