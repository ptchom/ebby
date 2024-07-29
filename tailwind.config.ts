import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        system: ["system-ui, sans-serif", "serif"],
      },
      maxWidth: {
        big: "1800px",
      },
      colors: {
        "bg-footer": "hsl(0,0%,20%)",
        // 'bg-footer': '#84808a',
        "svg-background": "hsl(0, 0%, 96%)",
      },
    },
  },
  plugins: [require("tailwindcss-hero-patterns")],
} satisfies Config;
