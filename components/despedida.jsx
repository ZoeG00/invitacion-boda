import foto from "../src/assets/carrousel/c3.webp";

export default function Despedida() {
  return (
    <div className="flex justify-center items-center bg-armygreen">
      <div className="w-30 h-30 md:w-80 md:h-80 shadow-2xl">
        <img
          src={foto}
          className="w-full h-full pr-10 transition-all duration-500 ease-in-out transform hover:scale-110 hover:brightness-90"
          alt="joelyzoe"
        />
      </div>
    </div>
  );
}
