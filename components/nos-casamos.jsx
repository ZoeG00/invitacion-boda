import { RiArrowDownDoubleFill } from "react-icons/ri";
import confetti from "canvas-confetti";
import foto from "../src/assets/carrousel/nos-casamos.jpg"

export default function NosCasamos() {
  const nosCasamos = foto;
  const lanzarSerpentinas = () => {
    confetti({
      particleCount: 150, // Número de partículas
      spread: 100, // Ángulo de dispersión
      origin: { x: 0.5, y: 0.5 }, // Origen en el centro
      colors: ["#FF7E5F", "#FEB47B", "#606C38"], // Colores personalizados
    });
  };
  return (
    <div className="relative h-full w-screen">
      {/* Imagen principal (fondo) */}
      <span onClick={lanzarSerpentinas}>
        <img
          src={nosCasamos}
          alt="Nos Casamos"
          className="w-full h-full"
        />

        {/* Texto centrado con círculo */}
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center flex-col">
          {/* Círculo */}
          <div className=" shadow-lg text-center relative">
            <h2
              
              className="text-xl font-bold text-white"
            >
              ¡Nos casamos!
            </h2>
          </div>
        </div>

        {/* Flechas en la parte inferior */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
          <RiArrowDownDoubleFill className="text-white h-8 w-8 animate-bounce" />
        </div>
      </span>
    </div>
  );
}
