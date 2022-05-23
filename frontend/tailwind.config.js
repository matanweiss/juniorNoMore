module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    fontFamily: {
      assistant: ['Assistant'],
      varela: ['Varela Round']
    },
    extend: {
      animation: {
        'scroll': 'scroll 15s linear infinite',
      },
      keyframes: {
        'scroll': {
          '0%': { transform: 'translate3d(0, 0, 0)' },
          '100%': { transform: 'translate3d(265%, 0, 0)' },
        }
      }
    },
  },
  plugins: [],
}
