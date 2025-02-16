import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import c1 from "../src/assets/carrousel/c1.webp";
import c2 from "../src/assets/carrousel/c2.webp";
import c3 from "../src/assets/carrousel/c3.webp";
import c4 from "../src/assets/carrousel/c4.webp";
import c5 from "../src/assets/carrousel/c5.webp";
import c6 from "../src/assets/carrousel/c6.webp";
import c7 from "../src/assets/carrousel/c7.webp";
import c9 from "../src/assets/carrousel/c9.webp";
import c10 from "../src/assets/carrousel/c10.webp";
import c13 from "../src/assets/carrousel/c13.webp";

export default function CarruselCircular() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [c1, c2, c3, c4, c5, c6, c7, c9, c10, c13];
  const totalImages = images.length;

  useEffect(() => {
    AOS.init({ duration: 5000 });
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < totalImages - 1 ? prevIndex + 1 : prevIndex
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : prevIndex
    );
  };

  return (
    <div
      className="relative w-full h-[600px] flex justify-center items-center bg-timberwolf overflow-hidden"
    >
      {/* Título */}
      <p
        data-aos="zoom-in"
        id="retratos-de-amor"
        className="absolute top-2 text-3xl font-bold text-timberwolf text-center bg-armygreen px-10"
      >
        Retratos de nuestro amor
      </p>

      {/* Carrusel en forma de círculo */}
      <div
        className="relative w-[800px] h-[500px] perspective"
        style={{ perspective: "700px" }}
      >
        <div
          className="absolute w-full h-full flex items-center justify-center transition-transform duration-[1500ms] ease-out"
          style={{
            transform: `rotateY(${currentIndex * -36}deg)`, // Ajuste aquí
            transformStyle: "preserve-3d",
          }}
        >
          {images.map((image, index) => {
            const angle = 36 * index;
            return (
              <div
                key={index}
                className="absolute w-[170px] h-[170px] bg-timberwolf shadow-md overflow-hidden"
                style={{
                  transform: `rotateY(${angle}deg) translateZ(350px)`,
                }}
              >
                <img
                  src={image}
                  alt={`Imagen ${index + 1}`}
                  className="w-full h-full object-cover rounded-md"
                  loading="lazy"
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* Flechas de navegación */}
      <button
        onClick={handlePrev}
        className="absolute left-4 top-58 transform -translate-y-1/2 bg-black opacity-50 text-white rounded-full p-2 hover:bg-gray-600 transition duration-300"
      >
        &#8592; {/* Flecha hacia la izquierda */}
      </button>
      <button
        onClick={handleNext}
        className="absolute right-4 top-58 transform -translate-y-1/2 bg-black opacity-50 text-white rounded-full p-2 hover:bg-gray-600 transition duration-300"
      >
        &#8594; {/* Flecha hacia la derecha */}
      </button>

      {/* Subtítulo */}
      <p
        id="frase-fotos"
        className="absolute mx-4 bottom-2 text-gray-600 italic text-center text-lg"
      >
        &quot;Cada foto es un recuerdo que siempre llevaremos en el corazón&quot;
      </p>
    </div>
  );
}
