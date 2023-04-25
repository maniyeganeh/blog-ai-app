/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        "wh-10": "#f4f4f4",
        "wh-50": "#fbfbfb",
        "wh-100": "#939393",
        "wh-300": "#c9c9c9",
        "wh-500": "#595959",
        "wh-900": "#0f0f0f",
        "accent-red": "#ea9648",
        "accent-orange": "#f6cf68",
        "accent-green": "#c2e984"
      },
      backgroundImage: (theme) => ({
        "gradient-gradiual":
          "linear-gradient(180deg , rgba(116 , 116 , 116 , 0) 66.15%,#0000 , 100%)"

      }),
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px"
    }
  },
  plugins: [
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/typography")
  ],
}
