/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Syne"', "sans-serif"],
        sans: ['"Plus Jakarta Sans"', "sans-serif"],
        "dm-sans": ['"Plus Jakarta Sans"', "sans-serif"],
      },
      colors: {
        ink: "#0C1F1C",
        paper: "#F3F6F2",
        mist: "#E4EBE6",
        accent: "#FF4D1A",
        "accent-soft": "#FFE8E0",
        muted: "#5A6B66",
        surface: "#FFFFFF",
        // Aliases for existing inner pages (tema oscuro)
        "blue-color": "#88bcbf",
        "gray-color": "#828282",
        "card-color": "#212121",
        "color-background": "#171717",
        "menu-color": "#172554",
      },
      backgroundImage: {
        "open-menu": "url('../assets/menu.svg')",
        "close-menu": "url('../assets/close.svg')",
        "hero-wash":
          "radial-gradient(ellipse 80% 60% at 70% 20%, rgba(255,77,26,0.14), transparent 55%), radial-gradient(ellipse 60% 50% at 10% 80%, rgba(12,31,28,0.08), transparent 50%)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "image-in": {
          "0%": { opacity: "0", transform: "scale(1.06)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.9s cubic-bezier(0.22, 1, 0.36, 1) both",
        "fade-up-delay": "fade-up 0.9s cubic-bezier(0.22, 1, 0.36, 1) 0.15s both",
        "fade-up-delay-2": "fade-up 0.9s cubic-bezier(0.22, 1, 0.36, 1) 0.3s both",
        "fade-in": "fade-in 1s ease both",
        "image-in": "image-in 1.4s cubic-bezier(0.22, 1, 0.36, 1) both",
      },
    },
  },
  plugins: [],
};
