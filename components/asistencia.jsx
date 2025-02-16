import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Asistencia() {
  useEffect(() => {
    AOS.init({ duration: 5000 });
  }, []);
  return (
    <div className="bg-timberwolf flex flex-col items-center py-8">
      {/* Frase principal */}
      <p className="relative text-armygreen mx-14 text-center my-4" data-aos="zoom-out">
        Confirmar asistencia al:
      </p>
      <p className="text-gray-600 mx-14 text-center my-4">
        +54 2634937329(Zoe) o +54 2634223848(Joel)
      </p>
      <p className="text-gray-600 mx-14 text-center">
        Escribir por dudas y consultas
      </p>
    </div>
  );
}
