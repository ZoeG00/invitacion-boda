import foto from "../src/assets/carrousel/c3.webp"

export default function Despedida() {
  const imagen = foto;
  return (
    <>
      <div className="bg-timberwolf relative">
        {/* Contenedor con imagen de fondo */}
        <div className="relative">
          <img
            src={imagen}
            className=" w-full h-full object-cover rounded-full"
            alt="joelyzoe"
          />
        </div>
      </div>
    </>
  );
}
