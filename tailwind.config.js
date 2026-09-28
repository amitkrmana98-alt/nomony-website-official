/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        nomony: {
          bg: '#0B0F17',
          card: '#111827',
          border: '#1F2937',
          borderBright: '#374151',
          primary: '#0EA5E9',
          primaryHover: '#0284C7',
          accent: '#2563EB',
          text: '#F9FAFB',
          textMuted: '#9CA3AF',
        }
      },
      boxShadow: {
        'neubrutal': '4px 4px 0px 0px #0EA5E9',
        'neubrutal-dark': '4px 4px 0px 0px #1F2937',
        'neubrutal-white': '4px 4px 0px 0px #F9FAFB',
        'neubrutal-sm': '2px 2px 0px 0px #0EA5E9',
      }
    },
  },
  plugins: [],
}