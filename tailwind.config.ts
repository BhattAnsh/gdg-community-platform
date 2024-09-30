import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        button: "#4285F4",
        buttonHover: "#174EA6",
        lightGrey:"#F1F3F4",
        darkGrey:"#333333",
        black:"#202124",
        grey:"#9AA0A6",
        lightRed:"#EA4335"
      },
    },
  },
  plugins: [],
};
export default config;
