/** @type {import('tailwindcss').Config} */
import Colors from './constants/Colors';

module.exports = {
  content: ['./index.{js,ts,tsx}', './app/**/*.{js,ts,tsx}', './components/**/*.{js,ts,tsx}'],

  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: Colors,
    },
  },
  plugins: [],
};
