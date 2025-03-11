import {
  Box,
  Image
} from "@chakra-ui/react"
import { useColorModeValue } from "../ui/color-mode"
import { useRouter } from "@tanstack/react-router"
import { useMemo } from "react"
import { Link as RouterLink } from "@tanstack/react-router"

const Header = () => {
  const router = useRouter()
  const isHomepage = useMemo(() => router.state.location.pathname === "/", [router.state.location.pathname])
  const logo = useColorModeValue("/logo-black.svg", "/logo.svg")

  return (
    <>
      <Box
        as="header"
        width="-webkit-fill-available"
      >
        <RouterLink to="/">
          <Image
            src={`/assets/images/${logo}`}
          />
        </RouterLink>
      </Box>
    </>
  )
}

export default Header