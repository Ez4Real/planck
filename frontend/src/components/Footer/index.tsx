import { Box, Container, Flex, Image, Link } from "@chakra-ui/react"
import { useColorModeValue } from "../ui/color-mode"

const Footer = () => {
    const logo = useColorModeValue("/logo-black.svg", "/logo.svg")
    const icons = {
        moon: useColorModeValue("/assets/moon.svg", "/assets/moon-dark.svg"),
        sun: useColorModeValue("/assets/sun.svg", "/assets/sun-dark.svg"),
    };

    return (
        <>
            <Container
                p={["0 21px 66px", "0 21px 66px", "0 64px 96px", "0 64px 96px",]}
            >
                <Flex
                    justifyContent="space-between"
                    alignItems={["flex-end", "center", "center",]}
                >
                    <Flex
                        direction="column"
                        gap={["8px", "8px", "12px", "12px",]}
                    >
                        <Image
                            src={logo}
                            h={["17px", "17px", "39px", "39px",]}
                            width={["131.36px", "131.36px", "176px", "176px",]}
                            mb={["8px", "8px", "4px", "4px",]}
                            objectFit="contain"
                        />
                        <Link
                            href="/privacy-policy"
                            fontSize="14px"
                            color="ui.muted"
                            fontWeight="400"
                        >
                            Privacy Policy
                        </Link>

                        <Link
                            href="/terms-service"
                            fontSize="14px"
                            color="ui.muted"
                            fontWeight="400"
                        >
                            Terms of Service
                        </Link>

                    </Flex>

                    <Box
                        display="inline-flex"
                        border="1px solid #4E4E4E"
                        borderRadius="6px"
                        mt="13px"
                        w={["60px", "96px", "96px",]}
                        h={["24px", "38px", "38px",]}
                    >
                        <Box>
                            <Image
                                src={icons.moon}
                                w={["29px", "48px", "48px",]}
                                opacity="50%"
                                p={["4.52px 7.75px", "7px 12px", "7px 12px",]}
                                
                            />
                        </Box>

                        <Box
                            
                        >
                            <Image
                                src={icons.sun}
                                w={["29px", "48px", "48px",]}
                                borderRadius="6px"
                                borderLeft="1px solid #4E4E4E"
                                p={["4.52px 7.75px", "7px 12px", "7px 12px",]}
                                background="#CACACA"
                                
                            />
                        </Box>
                    </Box>
                </Flex>
            </Container>
        </>
    )
}

export default Footer