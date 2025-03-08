import { defineRecipe } from "@chakra-ui/react"

export const buttonRecipe = defineRecipe({
  base: {
    fontFamily: "Space Grotesk, sans-serif",
    fontWeight: "bold",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    colorPalette: "teal",
  },
  variants: {
    variant: {
      ghost: {
        bg: "transparent",
        _hover: {
          bg: "gray.100",
        },
      },
      plain: {
        color: "ui.light",
        bg: "ui.dark",
        fontSize: "16px",
        fontWeight: "500",
        transition: ".6s",
        borderRadius: "4px",
        _hover: {
          color: "ui.dark",
          bg: "ui.light",
        },
      },
    },
  },
})
