import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontSize: {
        10: ['0.625rem', '15px'],
        11: ['0.688rem', '16.5px'],
        12: ['0.75rem', '18px'],
        14: ['0.875rem', '21px'],
        16: ['1rem', '24px'],
        18: ['1.125rem', '27px'],
        21: ['1.313rem', '31.5px'],
        22: ['1.375rem', '33px'],
        24: ['1.5rem', '36px'],
        25: ['1.563rem', '37.5px'],
        26: ['1.625rem', '39px'],
        28: ['1.75rem', '40px'],
        30: ['1.875rem', '45px'],
        36: ['2.25rem', '54px'],
        50: ['3.125rem', '75px'],
      },
      colors : {
        mainColor : '#c40f39',
        subGray : '#6e6e6e',
      }
    },
  },
  plugins: [],
};
export default config;
