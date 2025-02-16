import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import div from "../src/assets/elementos-graficos/divisor1.svg";

export default function Regalo() {
  const divisor = div;
  useEffect(() => {
    AOS.init({ duration: 5000 });
  }, []);
  return (
    <div className="relative bg-timberwolf flex flex-col items-center py-8">
      {/* Divisor superior */}
      <div className="flex justify-center w-64 opacity-50 my-4">
        <img src={divisor} alt="Divisor" />
      </div>

      {/* Frase principal */}
      <p
        id="frase-fotos"
        className="text-gray-600 mx-10 text-center my-4"
        data-aos="fade-up"
      >
        ¡Estamos llenos de emoción y no podemos esperar para verlos!.
      </p>
      <p
        id="frase-fotos"
        className="text-gray-600 mx-10 text-center"
        data-aos="fade-up"
      >
        ¡Nos vemos muy pronto para celebrar juntos este momento tan único!
      </p>

      {/* Joel & Zoe */}
      <p
        id="frase-fotos"
        className="text-armygreen text-center my-4"
        data-aos="zoom-in"
      >
        Joel & Zoe
      </p>
    </div>
  );
}
