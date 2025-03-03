import foto from "../src/assets/carrousel/c3.webp";

export default function Despedida() {
  return (
    <div className="flex justify-center items-center bg-armygreen">
      {/* Contenedor de la imagen con padding derecho */}
      <div className="shadow-2xl pr-6">
      <div className="relative w-30 h-30 md:w-80 md:h-80">
          <img
            src={foto}
            className=" pr-6 w-full h-full rounded-lg shadow-lg transition-transform duration-500 ease-in-out transform hover:scale-105"
            alt="joelyzoe"
          />
        </div>
      </div>
    </div>
  );
}
