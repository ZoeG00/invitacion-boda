import React, { useState, useEffect } from "react";
import { RiArrowDownDoubleFill } from "react-icons/ri";
import confetti from "canvas-confetti";
import AOS from "aos";
import "aos/dist/aos.css";

import foto from "../src/assets/carrousel/nos-casamos.webp";

const lanzarSerpentinas = () => {
  confetti({
    particleCount: 200,
    spread: 120,
    origin: { x: 0.5, y: 0.5 },
    colors: ["#FF7E5F", "#FEB47B", "#606C38"],
  });
};

const NosCasamos = () => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    if (isImageLoaded) {
      setTimeout(() => {
        setShowContent(true);
      }, 300);
    }
  }, [isImageLoaded]);

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className="relative h-screen w-screen">
      {/* Capa de carga */}
      {!isImageLoaded && (
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-gray-600 bg-opacity-50">
          <div className="w-10 h-10 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}

      {/* Imagen de fondo */}
      <img
        src={foto}
        alt="Nos Casamos"
        onLoad={() => setIsImageLoaded(true)}
        className={`w-full h-full object-cover bg-timberwolf transition-opacity duration-700 ${
          isImageLoaded ? "opacity-100" : "opacity-0"
        }`}
        loading="lazy"
        data-aos="fade-up"
      />

      {/* Capa oscura para resaltar el texto */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex flex-col items-center justify-center text-center px-4">
        {/* Texto de la invitación */}
        <h2
          className={`text-timberwolf opacity-70 text-4xl md:text-6xl font-bold drop-shadow-lg transition-opacity duration-700 ${
            showContent ? "opacity-100" : "opacity-0"
          }`}
          
        >
          Nos casamos <br /> <p className="text-2xl mx-2" id="guarda-la-fecha">¡y queremos celebrarlo con vos! </p>
        </h2>

        {/* Botón interactivo */}
        <button
          onClick={lanzarSerpentinas}
          className="mt-6 px-6 py-3 bg-timberwolf text-armygreen font-semibold rounded-full shadow-lg hover:bg-armygreen hover:text-timberwolf transition-all duration-300"
          data-aos="fade-up"
        >
          ¡Festejemos juntos!
        </button>
      </div>

      {/* Flecha animada */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
        <RiArrowDownDoubleFill className="text-white h-10 w-10 animate-bounce" />
      </div>
    </div>
  );
};

export default React.memo(NosCasamos);
