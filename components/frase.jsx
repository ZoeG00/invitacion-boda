import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"

export default function Frase() {
   useEffect(() => {
      AOS.init({ duration: 5000 });
    }, []);
  
  return (
    <div className="bg-armygreen flex flex-col items-center justify-center px-4 py-8">
      {/* Botón central */}
      <div className="relative py-10 text-center mb-8" >
        <button
        data-aos="fade-up"
          id="joelyzoe"
          className="relative flex items-center justify-center text-white transition-transform w-40 h-40"
        >
          {/* Fondo circular transparente */}
          <div className="absolute w-40 h-40 rounded-full bg-white/10 backdrop-blur-sm z-0 "></div>

          <div className="absolute w-48 h-48 rounded-full border-2 border-white opacity-50 z-0 "></div>
          {/* Letra "&" grande en el fondo */}
          <span className="absolute text-9xl font-bold text-armygreen z-0 ">
            &amp;
          </span>

          {/* Texto "Joel" en la esquina superior izquierda */}
          <span
            id="nombres"
            className="absolute top-4 left-2 opacity-80 text-5xl font-medium z-10"
          >
            Joel
          </span>

          {/* Texto "Zoe" en la esquina inferior derecha */}
          <span
            id="nombres"
            className="absolute bottom-8 right-5 opacity-80 text-5xl font-medium z-10"
          >
            Zoe
          </span>
        </button>
      </div>

      {/* Texto debajo del botón */}
      <div className="max-w-3xl text-center">
        <p id="frase-fotos" className="text-timberwolf text-lg leading-relaxed">
          Nos encantaría que seas parte de este día tan especial en nuestras
          vidas, un momento único en el que celebramos nuestra historia, el
          compromiso que nos une y los sueños que juntos estamos construyendo.
          Acompáñanos a compartir esta jornada tan esperada, donde rodeados de
          las personas que más queremos, daremos inicio a una nueva etapa
          juntos. ¡Te esperamos con los brazos abiertos para celebrar nuestra
          boda y crear recuerdos inolvidables!
        </p>
      </div>
    </div>
  );
}
