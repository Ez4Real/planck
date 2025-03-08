import { 
    Box,
    Image
} from "@chakra-ui/react"
import { useColorModeValue } from "../ui/color-mode"
  
  const Header = () => {
    const logo = useColorModeValue("/logo-black.svg", "/logo.svg")
  
    return (
      <>
        <Box
          as="header"
          pt="96px"
          pb="236px"
          width="-webkit-fill-available"
        >
        
          <Image
            src={logo}
            h="84px"
            height={["48px", "48px", "84px", "84px",]}
            m="0 auto"
          />
        </Box>
      </>
    )
  }
  
  export default Header