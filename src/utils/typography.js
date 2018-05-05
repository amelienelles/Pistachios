import Typography from "typography"

const typography = new Typography({
  includeNormalize: true,
  omitGoogleFont: false,
  googleFonts: [
    {
      name: "Princess Sofia",
      styles: ["400"]
    },
    {
      name: "Aref Ruqaa",
      styles: ["400"]
    }
  ],
  baseFontSize: "20px",
  baseLineHeight: 1.5,
  headerFontFamily: ["Arab Dances", "sans-serif"],
  headerWeight: "normal",
  bodyFontFamily: ["Aref Ruqaa", "sans-serif"]
})

export default typography
