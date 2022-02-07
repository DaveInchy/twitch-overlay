module.exports = {
  content: [
    './**.{js,jsx}',
    './src/**/*.{js,jsx}',
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
  ],
}
