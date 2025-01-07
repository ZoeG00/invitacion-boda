import { RiMusicAiFill } from "react-icons/ri";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Playlist() {
   useEffect(() => {
      AOS.init({ duration: 5000 });
    }, []);
  
  return (
    <div className="relative mx-auto bg-timberwolf shadow-lg  overflow-hidden">
      {/* Card Header */}
      <div className="flex justify-center items-center" data-aos="zoom-in">
        <RiMusicAiFill className="text-pumpkin" size={72} />
      </div>

      {/* Card Body */}
      <div className="p-6" data-aos="fade-down">
        <h3 className="text-lg font-semibold text-pumpkin">Playlist</h3>
        <p className="text-gray-600 mt-2">
          Añade la canción que no puede faltar en nuestra playlist
          </p>
      </div>

      {/* Card Footer (Botón) */}
      <div className="p-4  text-center" data-aos="fade-down">
        <button className="bg-pumpkin text-white py-2 px-4 mb-10 rounded-full  hover:scale-110 transition duration-300">
          <a href="https://forms.gle/z18Gt2PJMC7nMSc77" target="BLANK_">Añadir</a>
        </button>
      </div>
    </div>
  );
}
