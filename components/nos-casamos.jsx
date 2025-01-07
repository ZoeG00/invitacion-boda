import React, { useState } from "react";
import { RiArrowDownDoubleFill } from "react-icons/ri";
import confetti from "canvas-confetti";
import foto from "../src/assets/carrousel/nos-casamos.webp";

const lanzarSerpentinas = () => {
  confetti({
    particleCount: 150, // Número de partículas
    spread: 100, // Ángulo de dispersión
    origin: { x: 0.5, y: 0.5 }, // Origen en el centro
    colors: ["#FF7E5F", "#FEB47B", "#606C38"], // Colores personalizados
  });
};

const NosCasamos = () => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  // Función para manejar el evento de carga de la imagen
  const handleImageLoad = () => {
    setIsImageLoaded(true); // Cambia el estado cuando la imagen se haya cargado
  };

  return (
    <div className="relative h-full w-screen">
      {/* Imagen principal (fondo) con carga perezosa */}
      <span onClick={lanzarSerpentinas}>
        {/* Mostrar pantalla de carga mientras la imagen no se ha cargado */}
        {!isImageLoaded && (
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-gray-600 bg-opacity-50">
          </div>
        )}

        {/* Imagen con onLoad que indica que la imagen se ha cargado */}
        <img
          src={foto}
          alt="Nos Casamos"
          onLoad={handleImageLoad} // Detecta cuando la imagen se carga
          className="w-full h-full object-cover"
          loading="lazy" // Carga diferida
        />

        {/* Texto centrado con círculo */}
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center flex-col">
          <h2 className="text-xl font-bold text-white bg-black/10 p-2 rounded">
            ¡Nos casamos!
          </h2>
        </div>

        {/* Flechas en la parte inferior */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
          <RiArrowDownDoubleFill className="text-white h-8 w-8 animate-bounce" />
        </div>
      </span>
    </div>
  );
};

export default React.memo(NosCasamos);
