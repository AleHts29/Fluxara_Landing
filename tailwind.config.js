/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          dark: '#1e0c42', // Deep Blue-Violet (Background)
          blue: '#5015BD', // Electric Blue-Violet (Glows)
          light: '#afcacc', // Light Blue - Highlights
        },
        accent: {
          pop: '#ff00aa', // Hot Magenta (Highlights)
          warm: '#ffa02e', // Orange - Warnings/Accents
        },
        bg: {
          light: '#e4f3d8', // Minty White - Secondary/Contrast
        },
        // Semantic colors for dashboard
        success: '#10b981', // Emerald 500
        warning: '#ffa02e', // Orange
        error: '#ef4444', // Red 500
        info: '#3b82f6', // Blue 500
      },
      fontFamily: {
        mono: ['"Source Code Pro"', 'monospace'], // For terminal/logs
        sans: ['"Inter"', 'sans-serif'], // UI
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'terminal-blink': 'blink 1s step-end infinite',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        }
      }
    },
  },
  plugins: [],
}
