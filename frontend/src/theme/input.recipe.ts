import { defineRecipe } from "@chakra-ui/react"

export const inputRecipe = defineRecipe({
  variants: {
    variant: {
      outline: {
        fontFamily: "Space Grotesk, sans-serif",
        color: "ui.muted",
        _placeholder: {
            color: {base: "ui.muted", _dark: "ui.darkMuted"}
        },
      },
    },
  },
})

