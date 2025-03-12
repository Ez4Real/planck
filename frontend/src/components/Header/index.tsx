import {
  Box,
  Image
} from "@chakra-ui/react"
import { useRouterState, Link as RouterLink } from "@tanstack/react-router"
import { useColorModeValue } from "../ui/color-mode"
// import { useMemo } from "react"

const Header = () => {
  const { location } = useRouterState()
  const isHomepage = location.pathname === "/"
  const logo = useColorModeValue("/logo-black.svg", "/logo.svg")

  return (
    <Box
      as="header"
      width="-webkit-fill-available"
      py={isHomepage
          ? ["66px", "96px", "96px", "96px"]
          : ["68px", "72px", "72px", "72px"]}
      pl={isHomepage
          ? 0
          : ["16px", "48px", "48px", "48px"]}
    >
      <RouterLink to="/">
        <Image
          src={`/assets/images/${logo}`}
          h={isHomepage
            ? ["48px", "84px", "84px", "84px"]
            : ["17px", "29px", "29px", "29px"]}
          mx={isHomepage ? "auto" : 0}
        />
      </RouterLink>
    </Box>
  )
}

export default Header