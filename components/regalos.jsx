import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Regalo() {
   useEffect(() => {
      AOS.init({ duration: 5000 });
    }, []);
  return (
    
    <div className="relative bg-timberwolf flex flex-col items-center py-8">
      {/* Divisor superior */}
      <div className="flex justify-center w-64 opacity-50 my-4">
        <img src="../src/assets/elementos-graficos/divisor1.svg" alt="Divisor" />
      </div>

      {/* Frase principal */}
      <p id="frase-fotos" className="text-gray-600 mx-14 text-center my-4" data-aos="fade-up">
        ¡Estamos llenos de emoción y no podemos esperar para verlos en nuestra
        boda! Su presencia será el mejor regalo que podríamos recibir y hará de
        este día algo aún más especial. ¡Nos vemos muy pronto para celebrar
        juntos este momento tan único!
      </p>

      {/* Joel & Zoe */}
      <p id="frase-fotos" className="text-armygreen text-center my-4" data-aos="zoom-in">
        Joel & Zoe
      </p>

      {/* Divisor inferior */}
      <div className="flex justify-center w-64 opacity-50 my-4">
        <img src="../src/assets/elementos-graficos/divisor1.svg" alt="Divisor" />
      </div>
    </div>
  );
}
