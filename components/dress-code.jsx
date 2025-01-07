import { GiClothes } from "react-icons/gi";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import div from "../src/assets/elementos-graficos/divisor1.svg"

export default function DressCode() {
   const divisor = div;
  useEffect(() => {
    AOS.init({ duration: 5000 });
  }, []);

  return (
    <div className="bg-timberwolf relative mx-auto flex flex-col items-center shadow-lg overflow-hidden">
      {/* Divisor con animación */}
      <div
        className="flex justify-center w-64 left-14 opacity-50 m-8"
      >
        <img src={divisor} alt="Divisor" />
      </div>

      {/* Card Header con animación */}
      <div
        className="flex justify-center items-center"
        data-aos="zoom-in"
      >
        <GiClothes className="text-armygreen" size={72} />
      </div>

      {/* Card Body con animación */}
      <div className="p-6 text-center" data-aos="fade-down">
        <h3 className="text-lg font-semibold text-armygreen">Dress Code</h3>
        <p className="text-gray-600 mt-2">
          Una pequeña guía sobre qué usar
        </p>
      </div>

      {/* Card Footer (Botón) con animación */}
      <div className="p-4 text-center" data-aos="fade-down">
        <button className="bg-armygreen text-white py-2 px-4 rounded-full  hover:scale-110 transition duration-300 mb-8">
          <a href="https://pin.it/3zG6bcxKY" target="BLANK_">Saber más</a>
        </button>
      </div>
    </div>
  );
}
