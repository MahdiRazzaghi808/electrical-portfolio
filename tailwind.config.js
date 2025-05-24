// tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      vazir: ["Vazirmatn", "sans-serif"],
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      primary: {
        DEFAULT: "#ffbd39",
        100: "#fff5e6",
        200: "#ffe9cc",
        300: "#ffd999",
        400: "#ffc966",
        600: "#e6aa33",
        700: "#b38829",
      },
      secondary: {
        DEFAULT: "#0a0a0a",
        200: "#f3f3f3",
        300: "#e6e6e6",
        400: "#999999",
        500: "#666666",
        700: "#333333",
      },
      tertiary: {
        DEFAULT: "#c0c0c0",
        100: "#FEFEFE",
        200: "#F8F8F8",
        300: "#D8D8D8",
        500: "#9D9D9D",
        600: "#585858",
        700: "#414141",
      },
      white: "#ffffff",
      black: "#000000",
    },

    screens: {
      xs: "480px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },

    fontSize: {
      xs: "12px",
      sm: "14px",
      base: "16px",
      lg: "18px",
      xl: "24px",
      "2xl": "32px",
      "3xl": "40px",
      "4xl": "48px",
      "5xl": "60px",
      "6xl": "72px",
      "7xl": "96px",
    },
    spacing: {
      0: "0px",
      1: "4px",
      2: "8px",
      4: "16px",
      8: "32px",
      16: "64px",
      32: "128px",
    },
    borderRadius: {
      none: "0px",
      sm: "2px",
      DEFAULT: "6px",
      md: "8px",
      lg: "12px",
      xl: "16px",
      "2xl": "24px",
      full: "9999px",
    },

  },
  plugins: [],
};
