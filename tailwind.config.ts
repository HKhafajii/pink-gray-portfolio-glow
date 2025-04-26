import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    extend: {
      colors: {
        accent: "#F45B69",
        primary: "#666370",
        secondary: "#F5F9E9",
        border: "hsl(var(--border))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
      },
      keyframes: {
        "fade-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "flip-in": {
          "0%": {
            transform: "translateX(-100%) rotateY(90deg)",
            opacity: "0"
          },
          "100%": {
            transform: "translateX(0) rotateY(0deg)",
            opacity: "1"
          }
        }
      },
      animation: {
        "fade-up": "fade-up 0.5s ease-out forwards",
        "flip-in": "flip-in 1s cubic-bezier(0.4, 0, 0.2, 1) forwards"
      },
      textShadow: {
        DEFAULT: '2px 2px 4px rgba(0, 0, 0, 0.3)',
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    function ({ addUtilities }) {
      addUtilities({
        '.text-shadow': {
          'text-shadow': '2px 2px 4px rgba(0, 0, 0, 0.3)',
        },
      });
    },
  ],
} satisfies Config;
