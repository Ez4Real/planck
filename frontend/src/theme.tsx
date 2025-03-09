import { createSystem, defaultConfig } from "@chakra-ui/react"
import { buttonRecipe } from "./theme/button.recipe"

export const system = createSystem(defaultConfig, {
  globalCss: {
    html: {
      fontSize: "16px",
    },
    body: {
      fontFamily: "'Lexend Exa', sans-serif",
      fontSize: "0.875rem",
      margin: 0,
      padding: 0,
    },
    ".main-link": {
      color: "ui.main",
      fontWeight: "bold",
    },
    ".link-footer": {
      fontSize: "14px",
      color: "ui.muted",
      fontWeight: "400",
    },
  },
  theme: {
    tokens: {
      fonts: {
        heading: { value: "Lexend Exa, sans-serif" },
        input: { value: "Space Grotesk, sans-serif" },
      },
      colors: {
        ui: {
          main: { value: "#009688" },
          muted: { value: "#4E4E4E" },
          dark: {value: "#131313"},
          light: { value: "#F5F5F5" },
          white: { value: "#ffffff" },
          steel: { value: "#A0AEC0" },
        },
      },
    },
    recipes: {
      button: buttonRecipe,
    },
  },
})
