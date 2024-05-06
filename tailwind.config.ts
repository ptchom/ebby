import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        big: "1800px",
      },
      colors: {
        "bg-footer": "hsl(0,0%,20%)",
        // 'bg-footer': '#84808a',
        "svg-background": "hsl(0, 0%, 96%)",
      },
      backgroundImage: {
        "svg-pattern-topography": "url('/assets/svg/topography.svg')",
        "svg-pattern-graph-paper": "url('/assets/svg/graph-paper.svg')",
        "svg-pattern-footer": "url('/assets/svg/overlapping-diamonds.svg')",
      },
    },
  },
  plugins: [],
} satisfies Config;
