import { useState } from "react";
import { TbPigMoney } from "react-icons/tb";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { FaCopy } from "react-icons/fa";
import div from "../src/assets/elementos-graficos/divisor1.svg";

export default function Tarjetas() {
  const divisor = div;
  const [isModalOpen, setIsModalOpen] = useState(false); // Estado del modal
  const [isOpen, setIsOpen] = useState(false); // Estado del modal

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      alert(`${text} copiado al portapapeles`);
    });
  };

  return (
    <div className="relative flex flex-col items-center bg-timberwolf p-8 w-full h-full">
      <div className="flex justify-center w-64 left-14 opacity-50 m-8">
        <img src={divisor} alt="Divisor" />
      </div>
      <p id="medios-de-pago" className="text-pumpkin mb-5 text-2xl font-semibold">
        Medios de pago
      </p>
      <p className="text-center mb-8 text-gray-600">
        Queridos amigos y familia, como parte de nuestra celebración, hemos
        creado un espacio especial con detalles pensados para ustedes. Por eso
        es que les pedimos amablemente que abonen el costo correspondiente en
        tiempo y forma, para que podamos seguir creando momentos inolvidables.
        ¡Gracias de corazón por ser parte de esta hermosa celebración y por
        ayudarnos a hacerla aún más memorable!
      </p>
      <div className="flex flex-wrap justify-center gap-10">
        {/* Tarjeta 1 */}
        <div className="w-full sm:w-80 p-6 bg-white shadow-xl rounded-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
          <div className="border-2 border-dashed border-pumpkin rounded-xl p-6 flex flex-col items-center">
            <TbPigMoney className="text-pumpkin text-4xl mb-4" />
            <h3 className="text-lg font-semibold text-gray-800">Efectivo</h3>
            <p className="text-gray-600 text-center mt-2">
              Una opción práctica y tradicional
            </p>
            <div className="p-4 text-center">
              <button
                onClick={() => setIsModalOpen(true)} // Abrir modal
                className="py-2 px-6 mt-4 rounded-full bg-armygreen text-white font-semibold transition duration-300 hover:bg-orange-500 transform hover:scale-110"
              >
                Saber más
              </button>
            </div>
          </div>
        </div>

        {/* Tarjeta 2 */}
        <div className="w-full sm:w-80 p-6 bg-white shadow-xl rounded-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
          <div className="border-2 border-dashed border-pumpkin rounded-xl p-6 flex flex-col items-center">
            <FaMoneyBillTransfer className="text-green-700 text-4xl mb-4" />
            <h3 className="text-lg font-semibold text-gray-800">
              Transferencia Bancaria
            </h3>
            <p className="text-gray-600 text-center mt-2">
              Una forma sencilla y cómoda
            </p>
            <div className="p-4 text-center">
              <button
                onClick={() => setIsOpen(true)}
                className="py-2 px-6 mt-4 rounded-full bg-armygreen text-white font-semibold transition duration-300 hover:bg-orange-500 transform hover:scale-110"
              >
                Saber más
              </button>
            </div>
          </div>
        </div>
      </div>

{/* Modal para Efectivo */}
{isModalOpen && (
  <div
    className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center animate-fadeIn"
    onClick={() => setIsModalOpen(false)} // Cerrar modal al hacer clic fuera
  >
    <div
      className="bg-white p-8 rounded-xl shadow-lg w-96 relative"
      onClick={(e) => e.stopPropagation()} // Prevenir cierre al hacer clic dentro
    >
      <h2 className="text-xl font-bold text-pumpkin mb-4 text-center">
        Más sobre Efectivo
      </h2>
      <div className="divide-y divide-gray-300">
        <div className="py-4">
          <p className="text-gray-700">
            <strong>Costo de la tarjeta:</strong> $45.000
          </p>
        </div>
        <div className="py-4">
          <p className="text-gray-700">
            <strong>Opción de pago:</strong> 2 cuotas de $22.500
          </p>
        </div>
        <div className="py-4">
          <p className="text-gray-700">
            <strong>Niños (4-10 años):</strong> $26.000
          </p>
        </div>
        <div className="py-4">
          <p className="text-gray-700">
            <strong>Tarjeta de baile:</strong> $26.000
          </p>
        </div>
      </div>
      <button
        className="mt-6 py-2 px-6 w-full bg-pumpkin text-white font-semibold rounded-lg hover:bg-orange-600 transition duration-300"
        onClick={() => setIsModalOpen(false)}
      >
        Cerrar
      </button>
    </div>
  </div>
)}

{/* Modal para Transferencia */}
{isOpen && (
  <div
    className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center animate-fadeIn"
    onClick={() => setIsOpen(false)} // Cerrar modal al hacer clic fuera
  >
    <div
      className="bg-white p-8 rounded-xl shadow-lg w-96 relative"
      onClick={(e) => e.stopPropagation()} // Prevenir cierre al hacer clic dentro
    >
      <h2 className="text-xl font-bold text-pumpkin mb-4 text-center">
        Más sobre Transferencia
      </h2>
      <div className="divide-y divide-gray-300">
        <div className="py-4">
          <p className="text-gray-700">
            <strong>Costo de la tarjeta:</strong> $45.000
          </p>
        </div>
        <div className="py-4">
          <p className="text-gray-700">
            <strong>Opción de pago:</strong> 2 cuotas de $22.500
          </p>
        </div>
        <div className="py-4">
          <p className="text-gray-700">
            <strong>Niños (4-10 años):</strong> $26.000
          </p>
        </div>
        <div className="py-4">
          <p className="text-gray-700">
            <strong>Tarjeta de baile:</strong> $26.000
          </p>
        </div>
        <div className="py-4">
          <p className="text-gray-700">
            <strong>Datos de transferencia:</strong>
          </p>
          <div className="flex justify-center items-center mt-2">
            <span>Alias: <strong>joelyzoe</strong></span>
            <FaCopy
              className="text-pumpkin cursor-pointer hover:scale-110 transition duration-300"
              onClick={() => copyToClipboard("joelyzoe")}
              title="Copiar alias"
            />
          </div>
          <div className="flex justify-center items-center mt-2">
            <span>CVU: <strong>0000003100018947006113</strong></span>
            <FaCopy
              className="text-pumpkin cursor-pointer hover:scale-110 transition duration-300"
              onClick={() => copyToClipboard("0000003100018947006113")}
              title="Copiar CVU"
            />
          </div>
          <p className="mt-2">Titular: Zoe Valentina Guzman</p>
        </div>
      </div>
      <button
        className="mt-6 py-2 px-6 w-full bg-pumpkin text-white font-semibold rounded-lg hover:bg-orange-600 transition duration-300"
        onClick={() => setIsOpen(false)}
      >
        Cerrar
      </button>
    </div>
  </div>
)}

    </div>
  );
}
