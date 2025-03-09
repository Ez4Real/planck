import { 
    Box,
    Image
} from "@chakra-ui/react"
import { useColorModeValue } from "../ui/color-mode"
import { useRouter } from "@tanstack/react-router"
import { useMemo } from "react"
  
  const Header = () => {
    const router = useRouter()
    const isHomepage = useMemo(() => router.state.location.pathname === "/", [router.state.location.pathname])
    const logo = useColorModeValue("/logo-black.svg", "/logo.svg")
  
    return (
      <>
        <Box
          as="header"
          py={isHomepage ? "96px" : "72px"}
          pl={isHomepage ? 0 : "48px"}
          width="-webkit-fill-available"
        >
          <Image
            src={logo}
            h={isHomepage ? "84px" : "29px"}
            mx={isHomepage ? "auto" : 0}
          />
        </Box>
      </>
    )
  }
  
  export default Header