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
    ".privacy-policy-text": {
      color: "ui.muted",
      lineHeight: "20px",
      mt: "16px",
    }
  },
  theme: {
    tokens: {
      fonts: {
        heading: { value: "Lexend Exa, sans-serif" },
      },
      colors: {
        ui: {
          main: { value: "#009688" },
          muted: { value: "#4E4E4E" },
          dark: { value: "#131313" },
          light: { value: "#F5F5F5" },
          steel: { value: "#A0AEC0" },
        },
      },
    },
    recipes: {
      button: buttonRecipe,
    },
  },
})
