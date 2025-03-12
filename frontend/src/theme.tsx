import { createSystem, defaultConfig } from "@chakra-ui/react"
import { buttonRecipe } from "./theme/button.recipe"
import { mainButtonRecipe } from "./theme/main.button.recipe"
import { inputRecipe } from "./theme/input.recipe"

export const system = createSystem(defaultConfig, {
  globalCss: {
    html: {
      fontSize: "16px",
    },
    body: {
      fontSize: "0.875rem",
      margin: 0,
      padding: 0,
    },
    ".main-link": {
      color: "ui.main",
      fontWeight: "bold",
    },
  },
  theme: {
    tokens: {
      colors: {
        ui: {
          main: { value: "#009688" },
        },
      },
    },
    recipes: {
      button: buttonRecipe
    },
  },
})


export const main = createSystem(defaultConfig, {
  globalCss: {
    html: {
      fontSize: "16px",
    },
    body: {
      fontFamily: "'Lexend Exa', sans-serif",
      margin: 0,
      padding: 0,
      backgroundColor: { base: "ui.white", _dark: "ui.dark" },
      color: { base: "ui.dark", _dark: "ui.darkMuted" },
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
          muted: { value: "#4E4E4E" },
          dark: {value: "#131313"},
          white: { value: "#ffffff" },
          steel: { value: "#A0AEC0" },
          darkMuted: { value: "#F1F1F1" },
          darkHardMuted: { value: "#D7D7D7" },
          magicalOpacityBorder: { value: "rgba(0, 0, 0, 0.3)"}
        },
      },
    },
    recipes: {
      button: mainButtonRecipe,
      input: inputRecipe
    },
  },
})
