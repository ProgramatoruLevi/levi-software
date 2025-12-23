/** @type {import("tailwindcss").Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        base: "rgb(var(--bg) / <alpha-value>)",
        surface: "rgb(var(--surface) / <alpha-value>)",
        card: "rgb(var(--card) / <alpha-value>)",
        text: "rgb(var(--text) / <alpha-value>)",
        muted: "rgb(var(--muted) / <alpha-value>)",
        accent: "rgb(var(--accent) / <alpha-value>)",
        accent2: "rgb(var(--accent-2) / <alpha-value>)",
        border: "rgb(var(--border) / <alpha-value>)",
        success: "rgb(var(--success) / <alpha-value>)",
        warning: "rgb(var(--warning) / <alpha-value>)",
        danger: "rgb(var(--danger) / <alpha-value>)"
      },
      fontFamily: {
        display: ["'Space Grotesk'", "ui-sans-serif", "system-ui"],
        body: ["'Manrope'", "ui-sans-serif", "system-ui"]
      },
      boxShadow: {
        glow: "0 0 40px rgb(var(--accent) / 0.35)",
        glass: "0 20px 60px -30px rgb(0 0 0 / 0.65)"
      },
      backgroundImage: {
        mesh: "radial-gradient(circle at 20% 20%, rgb(var(--accent) / 0.35), transparent 45%), radial-gradient(circle at 80% 10%, rgb(var(--accent-2) / 0.25), transparent 40%), radial-gradient(circle at 30% 80%, rgb(94 234 212 / 0.22), transparent 42%)",
        grid: "linear-gradient(to right, rgb(255 255 255 / 0.08) 1px, transparent 1px), linear-gradient(to bottom, rgb(255 255 255 / 0.08) 1px, transparent 1px)"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" }
        },
        pulseGlow: {
          "0%, 100%": { opacity: 0.6 },
          "50%": { opacity: 1 }
        }
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        pulseGlow: "pulseGlow 4s ease-in-out infinite"
      }
    }
  },
  plugins: []
};