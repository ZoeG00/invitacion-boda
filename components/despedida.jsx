import foto from "../src/assets/carrousel/c3.webp"

export default function Despedida() {
  const imagen = foto;
  return (
    <>
      <div className="relative bg-timberwolf overflow-hidden rounded-xl shadow-xl">
        {/* Contenedor con imagen de fondo */}
        <div className="relative w-full h-[500px] md:h-[700px]">
          <img
            src={imagen}
            className="w-full h-full object-cover rounded-xl transition-all duration-500 ease-in-out transform hover:scale-110 hover:brightness-90"
            alt="joelyzoe"
          />
        </div>
      </div>
    </>
  );
}
