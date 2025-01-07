import { ImQrcode } from "react-icons/im";
import { FaCopy } from "react-icons/fa"; // Importar icono para copiar
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import qr from "../src/assets/elementos-graficos/Qr.webp";

export default function Qr() {
  const [isOpen, setIsOpen] = useState(false); // Estado del modal
  const imagenQr = qr;
  const albumCode = "l2bU2iWV"; // Alias a copiar

  useEffect(() => {
    AOS.init({ duration: 5000 });
  }, []);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(albumCode).then(() => {
      alert("Código copiado al portapapeles"); // Confirmación opcional
    });
  };

  return (
    <div className="relative mx-auto bg-timberwolf shadow-lg overflow-hidden">
      {/* Card Header */}
      <div className="flex justify-center items-center" data-aos="zoom-in">
        <ImQrcode className="text-armygreen" size={72} />
      </div>

      {/* Card Body */}
      <div className="p-6" data-aos="fade-down">
        <h3 className="text-lg font-semibold text-armygreen">QR Fotos</h3>
        <p className="text-gray-600 mt-2">
          Escaneá este QR para compartir tus fotos el día de la boda
        </p>
      </div>

      {/* Card Footer (Botón) */}
      <div className="p-4 text-center" data-aos="fade-down">
        <button
          onClick={() => setIsOpen(true)}
          className="bg-armygreen text-white py-2 px-4 rounded-full  hover:scale-110 transition duration-300"
        >
          Saber más
        </button>
      </div>

      {/* Modal para QR */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
          onClick={() => setIsOpen(false)} // Cerrar modal al hacer clic fuera
        >
          <div
            className="bg-white p-6 rounded-lg shadow-lg w-80"
            onClick={(e) => e.stopPropagation()} // Prevenir cierre al hacer clic dentro
          >
            <h2 className="text-lg font-semibold text-pumpkin my-2">
              Fotos con QR
            </h2>
            <p className="mb-2">Escaneá el siguiente QR para compartir tus fotos de la boda:</p>
            <img src={imagenQr} alt="Código QR" />
            <p className="text-gray-600 mt-4 flex flex-col">
              <span>O descarga la app &quot;Dots Memories&quot;</span>
              <span className="flex items-center gap-2">
                Código de álbum: {albumCode}
                <FaCopy
                  className="text-pumpkin cursor-pointer hover:scale-110 transition duration-300"
                  onClick={copyToClipboard} // Copiar alias
                  title="Copiar código"
                />
              </span>
            </p>
            <button
              className="mt-4 text-pumpkin py-2 px-4 rounded-full hover:bg-orange-300 transition duration-300 border-2 border-pumpkin"
              onClick={() => setIsOpen(false)} // Cerrar modal
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
