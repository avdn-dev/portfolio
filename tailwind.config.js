/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'info': '934px',
      // For picture on info screen

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'info-md': '1230px',

      'info-lg': '1275px',

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      'info-xl': '1307px',

      'info-2xl': '1337px',

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
}