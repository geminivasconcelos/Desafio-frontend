import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        bebasNeue: ["Bebas Neue"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      margin: {
        "21px": "21px",
        "24px": "24px",
        "632px": "632px",
        "935px": "935px",
        "128px": "128px",
        "188px": "188px",
        "62px": "62px",
        "18px": "18px",
        "22px": "22px",
        "20px": "20px",
        "19px": "19px",
        "408px": "408px",
        "12px": "12px",
        "40px": "40px",
        "61px": "61px",
        "14px": "14px",
        "336px": "336px",
        "359px": "359px",
        "449px": "449px",
        "296px": "296px",
        "28px": "28px",       
      },
      colors: {
        "verde-D29": "#1F6D29",
        "ouro-521": "#ffb521",
        descricao: "#281815",
        "cinza-sabor": "#BFBFBF",
        "black-815": "#281815",
        "cinza-e2": "#E2E2E2"
      },
    },
  },
  plugins: [],
};
export default config;
