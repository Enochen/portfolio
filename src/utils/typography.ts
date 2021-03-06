import verticalRhythm from "compass-vertical-rhythm"
import Typography, { BaseLine } from "typography"
import { TABLET_MEDIA_QUERY } from "typography-breakpoint-constants"

const theme = {
  title: "Dasher",
  baseFontSize: "18px",
  baseLineHeight: 1.56,
  scaleRatio: 2,
  headerFontFamily: ["Source Sans Pro", "Helvetica", "Arial", "sans-serif"],
  bodyFontFamily: ["Source Sans Pro", "Helvetica", "Arial", "sans-serif"],
  headerColor: "hsla(0,0%,0%,0.85)",
  bodyColor: "hsla(0,0%,0%,0.7)",
  headerWeight: 400,
  bodyWeight: 400,
  boldWeight: 700,
  overrideStyles: () => {
    const vr = verticalRhythm({
      baseFontSize: "16px",
      baseLineHeight: "1.5",
    })

    const styles = {
      "h1, h2": {
        margin: 0,
      },
      a: {
        color: "#DB0E0A",
        textDecoration: "none",
      },
      "a:hover": {
        color: "#6460b8",
      },
      html: {
        backgroundColor: "#f1f1f1",
        justifyContent: "center",
        display: "flex",
      },
      // Mobile
      [TABLET_MEDIA_QUERY]: {
        html: {
          ...vr.establishBaseline(),
        },
      },
    }

    return styles
  },
}

export const scale = (value:number) => {
  const temp:BaseLine = typography.scale(value)
  return {fontSize: temp.fontSize, lineHeight: temp.lineHeight}
}

const typography:Typography = new Typography(theme)
export * from "typography-breakpoint-constants"
export const { rhythm, options } = typography
export default typography
