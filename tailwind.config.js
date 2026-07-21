/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./public/**/*.js",
    "./lib/**/*.{js,jsx,ts,tsx}",
  ],
  // Existing site styles own the reset; avoid Preflight collisions during migration.
  corePlugins: {
    preflight: false,
  },
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        ink: "var(--text)",
        mut: "var(--mut)",
        fnt: "var(--fnt)",
        pnl: "var(--pnl)",
        acc: "var(--acc)",
      },
      borderColor: {
        ln: "var(--ln)",
        pbd: "var(--pbd)",
      },
      backgroundColor: {
        nav: "var(--nav)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Poppins", "sans-serif"],
        mono: ["var(--font-mono)", "JetBrains Mono", "monospace"],
      },
      boxShadow: {
        mega: "0 24px 44px -30px rgba(0,0,0,0.45)",
        panel: "0 24px 50px -20px rgba(0,0,0,0.5)",
        term: "0 30px 70px -30px rgba(0,0,0,0.6)",
      },
      maxWidth: {
        site: "1160px",
        prose: "720px",
      },
      transitionTimingFunction: {
        out: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};
