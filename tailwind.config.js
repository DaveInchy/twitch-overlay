module.exports = {
  content: [
    './src/**/*.{js,jsx}',
    './src/**/*.{ts,tsx}',
    './src/**/*.{css,pcss}',
    './src/**/*.{html,md,txt}',
    './src/**/*.{json,yml,yaml}',
    './src/**/*.{jpg,jpeg,png,gif,svg}',
    './src/**/*.{ico,webp}',
    './src/**/*.{woff,woff2,eot,ttf,otf}',
    './src/**/*.{mp3,ogg,wav}',
    './src/**/*.{mp4,webm,ogv}',
    './',
  ],
  theme: {
    extend: {
      fonts: {
        'sans': ['Fira Sans', 'sans-serif'],
        'serif': ['Fira Serif', 'serif'],
        'code': ['Fira Code', 'monospace'],
      },
      colors: {
        'primary': '#0070f3',
        'secondary': '#ff4081',
        'success': '#4caf50',
        'info': '#2196f3',
        'warning': '#ffeb3b',
        'danger': '#f44336',
        'light': '#f4f4f4',
        'dark': '#212121',
        'white': '#ffffff',
        'black': '#000000',
        'transparent': 'transparent',
        'current': 'currentColor',
      },
    },
  },
  plugins: [
    require('tailwindcss'),
  ],
}
