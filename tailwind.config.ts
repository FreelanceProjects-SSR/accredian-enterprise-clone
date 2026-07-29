import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: "#10233F",
          blue: "#1363DF",
          cyan: "#00A8B5",
          mint: "#DDF8F4",
          amber: "#F5A524",
          ink: "#172033",
          soft: "#F4F8FC"
        }
      },
      boxShadow: {
        soft: "0 18px 45px rgba(16, 35, 63, 0.10)",
        lift: "0 12px 30px rgba(19, 99, 223, 0.14)"
      }
    }
  },
  plugins: []
};

export default config;
