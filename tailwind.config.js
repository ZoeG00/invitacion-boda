/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/nos-casamos.jsx",
    "./components/carrusel.jsx",
    "./components/dress-code.jsx",
    "./components/playlist.jsx",
    "./components/qr-photos.jsx",
    "./components/regalos.jsx",
    "./components/ubication.jsx",
    "./components/tarjetas.jsx",
    "./components/frase.jsx",
    "./index.html",
    "./src/App.jsx",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        armygreen: "#606C38",
        tofee: "#C2803A",
        timberwolf: "#E0E0BD",
        nutmeg: "#7A402E",
        pumpkin: "#C2803A",
        squash: "#2F4D49",
      },
      animation: {
        "fade-in": "fadeIn 1s ease-in-out",
        "slide-in-bottom": "slideInBottom 0.8s ease-out",
        "bounce-once": "bounce 1s ease-in-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        slideInBottom: {
          "0%": { transform: "translateY(20px)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
      },
      plugins: [],
    },
  },
};
