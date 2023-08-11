module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      colors: {
        dark: "#04152d",
        dark2: "#041226",
        dark3: "#020c1b",
        "dark-lighter": "#1c4b91",
        "dark-light": "#173d77",
        pink: "#db104d",
        orange: "#edc600",
      },
      backgroundImage: (theme) => ({
        "gradient-button": `linear-gradient(98.37deg, ${theme(
          "colors.orange"
        )}, ${theme("colors.pink")})`,
      }),
      keyframes: {
        mobileMenu: {
          "0%": { transform: "translateY(-130%)" },
          "100%": { transform: "translateY(0)" },
        },
        shimmer: {
          "0%": {
            opacity: 0,
            transform: "translateX(-10px)",
          },
          "100%": {
            opacity: 1,
            transform: " translateX(0)",
          },
        },
        rotate: {
          "100%": { transform: "rotate(360deg)" },
        },
        dash: {
          "0%": {
            "stroke-dasharray": "1, 150",
            "stroke-dashoffset": 0,
          },
          "50%": {
            "stroke-dasharray": "90, 150",
            "stroke-dashoffset": -35,
          },
          "100%": {
            "stroke-dasharray": "90, 150",
            "stroke-dashoffset": -124,
          },
        },
      },
    },
  },
  plugins: [],
};
