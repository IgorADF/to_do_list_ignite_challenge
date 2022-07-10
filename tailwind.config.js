module.exports = {
  important: true,
  content: [
    "./src/**/*.tsx",
  ],
  theme: {
    colors: {
      white: "#FFFFFF",
      gray: {
        200: "#D9D9D9",
        300: "#808080",
        400: "#333333",
        500: "#262626",
        700: "#0D0D0D",
        900: "#000000",
      },
    },
    extend: {
      colors: {
        app: {
          main: "#1A1A1A",
          header: "#0D0D0D",
          dark_blue: "#1E6F9F",
          blue: "#4EA8DE",
          blue_completed: "#0063BF",
          purple: "#8284FA",
          dark_purple: "#5E60CE",
        },
      },
    },
  },
  plugins: [],
}