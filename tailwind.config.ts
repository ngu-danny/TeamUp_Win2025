import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "app-theme": "#4b2e83",
        "app-dark": "#2c2856",
        "app-inverse": "#ffffff",
        "app-middle": "#37326d",
        background: "var(--background)",
        foreground: "var(--foreground)",
        midground: "var(--midground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
