import confetti from "canvas-confetti";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import div from "../src/assets/elementos-graficos/divisor1.svg"

export default function Ubicacion() {
    const divisor = div;
  // Función para lanzar serpentinas
  const lanzarSerpentinas = () => {
    console.log("Botón presionado"); // Verifica en la consola
    confetti({
      particleCount: 150, // Número de partículas
      spread: 100, // Ángulo de dispersión
      origin: { x: 0.5, y: 0.5 }, // Origen en el centro
      colors: ["#FF7E5F", "#FEB47B", "#606C38"], // Colores personalizados
    });
  };

  useEffect(() => {
    AOS.init({ duration: 5000 });
  }, []);
  
  return (
    <div className="relative w-full h-full flex items-center justify-center bg-timberwolf flex-col">
      <div className="flex justify-center w-64  left-14 opacity-50 m-8">
        <img src={divisor} />
      </div>
      {/* Título */}
      <p
        id="guarda-la-fecha"
        className=" mb-10  text-armygreen"
        data-aos="fade-up"
      >
        ¡Guardá la fecha!
      </p>

      {/* Botón Fecha */}
      <button
        data-aos="fade-up"
        onClick={lanzarSerpentinas}
        className="mt-3 mb-2 border-2 border-armygreen text-armygreen px-4 py-2 rounded-full hover:bg-armygreen hover:text-white transition-all duration-300 bg-timberwolf"
      >
        Fecha
      </button>
      <p className=" mb-2 text-lg text-pumpkin" data-aos="fade-up">
        12 de abril de 2025
      </p>
      <p className="text-base mb-3 text-gray-600" data-aos="fade-up">
        13:00hs
      </p>

      {/* Botón Lugar */}
      <button
        data-aos="fade-up"
        onClick={lanzarSerpentinas}
        className=" mb-2 mt-3 border-2 border-armygreen text-armygreen px-4 py-2 rounded-full hover:bg-armygreen hover:text-white transition-all duration-300 bg-timberwolf"
      >
        Lugar
      </button>
      <p className=" mb-2 text-lg text-pumpkin" data-aos="fade-up">
        Finca La Mariana
      </p>
      <p className="text-lg text-gray-600" data-aos="fade-up">
        La Junta S/N,
      </p>
      <p className="text-lg mb-5 text-gray-600" data-aos="fade-up">
        M5570 San Martín, Mendoza
      </p>

      {/* Google Maps Embed */}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3342.3716573423167!2d-68.4080408!3d-33.0993117!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x967e0b243163de75%3A0x3ec1a576bd118f0d!2sFinca%20La%20Mariana!5e0!3m2!1ses!2sar!4v1734469897103!5m2!1ses!2sar"
        width="300"
        height="200"
        title="mapa finca la mariana"
      ></iframe>

      {/* Botón Ver Mapa */}
      <button
        data-aos="fade-up"
        className="mt-4 mb-5 border-2 border-armygreen text-armygreen px-4 py-2 rounded-full hover:bg-armygreen hover:text-white transition-all duration-300 bg-timberwolf"
      >
        <a href="https://maps.app.goo.gl/ViH1eZywZnUGDYfG9" target="BLANK_">
          Ver mapa
        </a>
      </button>
      <div className="flex justify-center w-64  left-14 opacity-50 m-8">
        <img src={divisor} />
      </div>
    </div>
  );
}
