//estilos
import "./App.css";
import AOS from "aos";
import c11 from "../src/assets/carrousel/c11.webp"

//importación de cada componente
import NosCasamos from "../components/nos-casamos";
import Frase from "../components/frase";
import Ubicacion from "../components/ubication";
import Carrusel from "../components/carrusel";
import DressCode from "../components/dress-code";
import Playlist from "../components/playlist";
import Qr from "../components/qr-photos";
import Tarjetas from "../components/tarjetas";
import Regalo from "../components/regalos";
import Despedida from "../components/despedida";
import Asistencia from "../components/asistencia";

import { useState, useEffect } from "react";

const Countdown = ({ targetDate }) => {
  const imagen = c11;
  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance <= 0) {
        clearInterval(interval);
        setTimeLeft({});
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  if (
    !timeLeft.days &&
    !timeLeft.hours &&
    !timeLeft.minutes &&
    !timeLeft.seconds
  ) {
    return <p>¡El gran día ha llegado!</p>;
  }

  return (
    <div className=" h-full w-full relative bg-black">
      <img
        src={imagen}
        className="w-full opacity-50"
      />
      <div className="absolute text-3xl flex justify-center items-center h-full w-full bottom-2 left-0">
        <p className="text-xl text-timberwolf">Cuenta regresiva</p>
      </div>

      <div className="text-pumpkin absolute text-3xl flex justify-center items-center h-full w-full top-4 left-0 ">
        <div className="flex space-x-6 mr-2">
          <span>{timeLeft.days}</span>
          <span>:</span>
          <span>{timeLeft.hours}</span>
          <span>:</span>
          <span>{timeLeft.minutes}</span>
          <span>:</span>
          <span>{timeLeft.seconds}</span>
        </div>
      </div>

      <div>
        <p className="text-timberwolf absolute text-l flex justify-center items-center h-full w-full top-10 left-0 ">
          <span className="flex space-x-8">
            <span className="ml-10">días</span>
            <span>horas</span>
            <div className="flex space-x-6">
              <span>minutos</span>
              <span className="pr-8">segundos</span>
            </div>
          </span>
        </p>
      </div>
    </div>
  );
};
function App() {

  useEffect(() => {
    AOS.init({ duration: 1000 }); // Inicializar con duración de animaciones
  }, []);
  
  const weddingDate = new Date("2025-04-12T13:00:00").getTime();
  return (
    <>
      <NosCasamos />
      <Frase />
      <Countdown targetDate={weddingDate} />
      <Ubicacion />
      <Carrusel />
      <DressCode />
      <Playlist />
      <Qr />
      <Tarjetas />
      <Regalo />
      <Despedida />
      <Asistencia />
    </>
  );
}

export default App;
