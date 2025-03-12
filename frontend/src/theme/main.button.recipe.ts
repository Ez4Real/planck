import { defineRecipe } from "@chakra-ui/react"

export const mainButtonRecipe = defineRecipe({
  base: {
    fontFamily: "Space Grotesk, sans-serif",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    borderRadius: "4px",
    transition: ".6s",
  },
  variants: {
    variant: {
      plain: {
        color: { base: "ui.darkMuted", _dark: "ui.dark" },
        bg: { base: "ui.dark", _dark: "ui.darkMuted" },
        _hover: {
          color: { base: "ui.dark", _dark: "ui.darkMuted" },
          bg: { base: "ui.darkMuted", _dark: "ui.dark" },
        },
      },
    },
  },
})
