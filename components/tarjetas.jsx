import { useState } from "react";
import { TbPigMoney } from "react-icons/tb";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { FaCopy } from "react-icons/fa";

export default function Tarjetas() {
  const [isModalOpen, setIsModalOpen] = useState(false); // Estado del modal
  const [isOpen, setIsOpen] = useState(false); // Estado del modal

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      alert(`${text} copiado al portapapeles`);
    });
  };

  return (
    <div className="relative flex flex-col items-center bg-timberwolf p-6 w-full h-full">
      <div className="flex justify-center w-64 left-14 opacity-50 m-8">
        <img src="../src/assets/elementos-graficos/divisor1.svg" />
      </div>
      <p id="medios-de-pago" className=" text-pumpkin mb-5">
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
      <div className="flex flex-wrap justify-center gap-8">
        {/* Tarjeta 1 */}
        <div className="w-full sm:w-80 p-6 bg-white shadow-lg rounded-lg">
          <div className="border-2 border-dashed border-pumpkin rounded p-2 flex flex-col items-center">
            <TbPigMoney className="text-pumpkin text-4xl mb-4" />
            <h3 className="text-lg font-semibold text-gray-800">Efectivo</h3>
            <p className="text-gray-600 text-center mt-2">
              Una opción práctica y tradicional
            </p>
            <div className="p-4 bg-gray-100 text-center">
              <button
                onClick={() => setIsModalOpen(true)} // Abrir modal
                className=" text-pumpkin py-2 px-4 rounded-full hover:bg-orange-300 hover:scale-110 transition duration-300 border-2 border-pumpkin"
              >
                Saber más
              </button>
            </div>
          </div>
        </div>

        {/* Tarjeta 2 */}
        <div className="w-full sm:w-80 p-6 bg-white shadow-lg rounded-lg">
          <div className="border-2 border-dashed border-pumpkin rounded p-3 flex flex-col items-center">
            <FaMoneyBillTransfer className="text-green-700 text-4xl mb-4" />
            <h3 className="text-lg font-semibold text-gray-800">
              Transferencia Bancaria
            </h3>
            <p className="text-gray-600 text-center mt-2">
              Una forma sencilla y cómoda
            </p>
            <div className="p-4 bg-gray-100 text-center">
              <button
                onClick={() => setIsOpen(true)}
                className=" text-pumpkin py-2 px-4 rounded-full hover:bg-orange-300 hover:scale-110 transition duration-300 border-2 border-pumpkin"
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
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
          onClick={() => setIsModalOpen(false)} // Cerrar modal al hacer clic fuera
        >
          <div
            className="bg-white p-6 rounded-lg shadow-lg w-80"
            onClick={(e) => e.stopPropagation()} // Prevenir cierre al hacer clic dentro
          >
            <h2 className="text-lg font-semibold text-pumpkin">
              Más sobre Efectivo
            </h2>
            <p className="text-gray-600 mt-4 flex flex-col">
              <span>
                El costo de la tarjeta es de <strong>$45.000</strong>
              </span>
              <span>
                El mismo puede dividirse en 2 pagos de $22.500 cada uno
              </span>
              <span>Para niños, el costo es de $26.000 (4-10 años)</span>
            </p>
            <button
              className="mt-4 text-pumpkin py-2 px-4 rounded-full hover:bg-orange-300 transition duration-300 border-2 border-pumpkin"
              onClick={() => setIsModalOpen(false)} // Cerrar modal
            >
              Cerrar
            </button>
          </div>
        </div>
      )}

      {/* Modal para Transferencia */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
          onClick={() => setIsOpen(false)} // Cerrar modal al hacer clic fuera
        >
          <div
            className="bg-white p-6 rounded-lg shadow-lg w-80"
            onClick={(e) => e.stopPropagation()} // Prevenir cierre al hacer clic dentro
          >
            <h2 className="text-lg font-semibold text-pumpkin">
              Más sobre Transferencia
            </h2>
            <p className="text-gray-600 mt-4 flex flex-col">
              <span>
                El costo de la tarjeta es de $45.000
              </span>
              <span>
                El mismo puede dividirse en 2 pagos de $22.500 cada uno
              </span>
              <span>Para niños, el costo es de $26.000 (4-10 años)</span>
              <span className="text-pumpkin">
                Datos para la transferencia
              </span>
              <span className="flex items-center mx-16 gap-2">
                Alias: joelyzoe
                <FaCopy
                  className="text-pumpkin cursor-pointer hover:scale-110 transition duration-300"
                  onClick={() => copyToClipboard("joelyzoe")}
                  title="Copiar alias"
                />
              </span>
              <span className="flex items-center">
                CBU: 0000003100018947006113
                <FaCopy
                  className="text-pumpkin cursor-pointer hover:scale-110 transition duration-300"
                  onClick={() => copyToClipboard("0000003100018947006113")}
                  title="Copiar CBU"
                />
              </span>
              <span>Zoe Valentina Guzman</span>
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
