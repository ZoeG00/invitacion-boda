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
  useEffect(() => {
    AOS.init({ duration: 5000 });
  }, []);

  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [c1, c2, c3, c4, c5, c6, c7, c9, c10, c13];
  const totalImages = images.length;

  // Cambio automático de imagen cada 4 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalImages);
    }, 4000); // Cambia cada 4 segundos

    return () => clearInterval(interval);
  }, [totalImages]);

  return (
    <div className="relative w-full h-[600px] flex justify-center items-center bg-timberwolf overflow-hidden">
      {/* Título */}
      <p
        data-aos="zoom-in"
        id="retratos-de-amor"
        className="absolute top-2 text-3xl font-bold text-pumpkin text-center"
      >
        Retratos de nuestro amor
      </p>
      {/* Carrusel en forma de círculo */}
      <div
        className="relative w-[800px] h-[500px] perspective bottom-10"
        style={{ perspective: "700px" }}
      >
        <div
          className="absolute w-full h-full flex items-center justify-center transition-transform duration-[1500ms] ease-out"
          style={{
            transform: `rotateY(${(currentIndex * -360) / totalImages}deg)`,
            transformStyle: "preserve-3d",
          }}
        >
          {images.map((image, index) => {
            const angle = (360 / totalImages) * index;
            return (
              <div
                key={index}
                className="absolute w-[170px] h-[170px] bg-white shadow-md  overflow-hidden"
                style={{
                  transform: `rotateY(${angle}deg) translateZ(350px)`,
                }}
              >
                <img
                  src={image}
                  alt={`Imagen ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            );
          })}
        </div>
      </div>
      {/* Subtítulo */}
      <p
        id="frase-fotos"
        className="absolute mx-4 bottom-2 text-gray-600 italic text-center text-lg"
      >
       &quot;Cada foto captura un momento único, un recuerdo que perdura en el
        tiempo, un pedazo de nuestra historia que siempre llevaremos en el
        corazón.&quot;
      </p>
    </div>
  );
}
