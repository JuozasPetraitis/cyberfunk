module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        "3xl": "1920px",
      },
      fontFamily: {
        Audiowide: ["Audiowide"],
        Supreme: ["Supreme"],
      },
      keyframes: {
        slideBoxContainer: {
          "0%": {
            width: "0",
          },
          "100%": {
            width: "100%",
          },
        },
        textShowsUp: {
          from: { color: "transparent" },
          to: { color: "white" },
        },
        blinkOnTheEndOfText: {
          "50%": { borderColor: "transparent" },
        },
        pictureZoomIn: {
          "0%": { transform: "scale(2.5,2.0)" },
          "100%": { transform: "scale(1.0,1.0)" },
        },
        pictureZoomInX: {
          "0%": { transform: "scaleX(1.3)" },
          "100%": { transform: "scaleX(1.0)" },
        },
        boxShowsUp: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
      },
      animation: {
        "bounce-slow": "bounce 3000ms linear infinite",
      },
    },
  },
  plugins: [],
};
