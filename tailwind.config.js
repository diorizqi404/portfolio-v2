/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/script.js"],
  theme: {
    // screens: {
    fontFamily: {
      'figtree': ["'Figtree', sans-serif"],
      'hanken': ["'Hanken Grotesk', sans-serif"],
      'public': ["'Public Sans', sans-serif"],
      'jakarta': ["'Plus Jakarta Sans', sans-serif"],
    },
    // },
    extend: {
      colors: {
        'lochmara': {
          '50': '#eff7ff',
          '100': '#dfefff',
          '200': '#b8e0ff',
          '300': '#79c7ff',
          '400': '#31aaff',
          '500': '#0683dc',
          '600': '#0070ce',
          '700': '#005aa6',
          '800': '#034c89',
          '900': '#094071',
          '950': '#06284b',
        },
        'denim': {
          '50': '#edf9ff',
          '100': '#d6f0ff',
          '200': '#b6e7ff',
          '300': '#83d9ff',
          '400': '#49c3ff',
          '500': '#1fa2ff',
          '600': '#0783ff',
          '700': '#016bf4',
          '800': '#095dd7',
          '900': '#0e4a9a',
          '950': '#0e2e5d',
        },
        'blue-ribbon': {
          '50': '#eef5ff',
          '100': '#d8e7ff',
          '200': '#bad5ff',
          '300': '#8bbdff',
          '400': '#5499ff',
          '500': '#2c70ff',
          '600': '#2459fb',
          '700': '#0e39e7',
          '800': '#122fbb',
          '900': '#152e93',
          '950': '#121d59',
        },
        'royal-blue': {
          '50': '#f0f6fe',
          '100': '#ddeafc',
          '200': '#c3dcfa',
          '300': '#9ac6f6',
          '400': '#6aa8f0',
          '500': '#4787ea',
          '600': '#3069de',
          '700': '#2956cc',
          '800': '#2747a6',
          '900': '#253e83',
          '950': '#1b2850',
        }, 
      },
      fontFamily: {
        'rubik': ['Rubik', 'sans-serif'],
        'jetbrains': ['JetBrains Mono', 'monospace'],
      },
      aspectRatio: {
        '1/2' : '4 / 5',
      },
    },
  },
  plugins: [],
}

