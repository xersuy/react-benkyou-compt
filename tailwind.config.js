const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  // 리셋 css 비활성화 옵션
  // corePlugins: {
  //   preflight: false,
  // }
  theme: {
    extend: {
      colors: {
        // gray: colors.blueGray,
        'common-orange': '#f97316',
        'common-orange-300': '#fdba74',
        'common-green': '#22c55e',
        'common-green-300': '#86efac',
        'common-red': '#ef4444',
        'common-red-300': '#fca5a5',
        'common-yellow': '#eab308',
        'common-yellow-300': '#fde047',
        'common-blue': '#0ea5e9',
        'common-blue-300': '#7dd3fc',
        // 'main-light': '#e0e0e0',
        // 'main-pupple': '#6366f1',
        // 'main-green': '#2b5034',
        // 'main-green-light': '#528a3d',
        // 'main-green-lighter': '#edf3eb',%
        // 'main-gray': '#7c7c7c',
        // 'main-gray-light': '#e5e5e5',
        // 'main-gray-lighter': '#f9f9f9',

        disabled: '#d8d8d8',
      },
      zIndex: {
        top: 9999,
        header: 9998,
        'header-alarm': 8999,
        footer: 9998,
        'bottom-alarm': 9997,
        panel: 8000,
        'panel-active': 9000,
        'form-modal': 9100,
        alert: 9200,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
  content: [
    './src/pages/**/*.{html,js,tsx}',
    './src/components/**/*.{html,js,tsx}',
    './src/index.html',
  ],
};
