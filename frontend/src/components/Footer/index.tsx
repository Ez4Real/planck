import { Box, Container, Flex, Image } from "@chakra-ui/react"
import { Link as RouterLink, useNavigate } from "@tanstack/react-router"
import { useColorMode, useColorModeValue } from "../ui/color-mode"

const Footer = () => {
    const logo = useColorModeValue("/logo-black.svg", "/logo.svg")
    const icons = {
        moon: useColorModeValue("moon.svg", "moon-dark.svg"),
        sun: useColorModeValue("sun.svg", "sun-dark.svg"),
    };
    const { colorMode, toggleColorMode } = useColorMode();
    const navigate = useNavigate();
    const handleClick = () => {
        navigate({ to: "/" });
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

        return (
            <>
                <Container
                    p={["100px 21px 66px", "100px 21px 66px", "160px 64px 96px", "160px 64px 96px",]}
                >
                    <Flex
                        justifyContent="space-between"
                        alignItems={["flex-end", "center", "center",]}
                    >
                        <Flex
                            direction="column"
                            gap={["8px", "8px", "12px", "12px",]}
                        >
                            <RouterLink to="/" onClick={handleClick}>
                                <Image
                                    src={`/assets/images/${logo}`}
                                    h={["17px", "17px", "39px", "39px",]}
                                    width={["131.36px", "131.36px", "176px", "176px",]}
                                    mb={["8px", "8px", "4px", "4px",]}
                                    objectFit="contain"
                                />
                            </RouterLink>

                            <RouterLink
                                className="link-footer"
                                to="/privacy-policy"
                                hash="root"
                            >Privacy Policy
                            </RouterLink>

                            <RouterLink
                                className="link-footer"
                                to="/terms-of-service"
                                hash="root"
                            >Terms of Service
                            </RouterLink>

                        </Flex>

                        <Box onClick={toggleColorMode}
                            display="inline-flex"
                            border="1px solid #4E4E4E"
                            borderRadius={["4px", "6px", "6px",]}
                            mt="13px"
                            w={["62px", "96px", "96px",]}
                            h={["24px", "38px", "38px",]}
                            cursor="pointer"
                            borderColor={colorMode === 'dark' ? "#F1F1F1" : "#4E4E4E"}
                        >

                            <Box
                                w={["31px", "48px", "48px",]}
                                h={["24px", "38px", "38px",]}
                            >
                                {colorMode === 'dark'}
                                <Image
                                    src={`/assets/icons/${icons.moon}`}
                                    w={["31px", "48px", "48px",]}
                                    h={["22px", "36px", "36px",]}
                                    borderRadius={["4px", "6px", "6px",]}
                                    p={["4px 8px", "7px 12px", "7px 12px",]}
                                    background={colorMode === 'dark' ? "#5c5c5c" : "white"}
                                    borderLeftColor={colorMode === 'dark' ? "#F1F1F1" : "#4E4E4E"}
                                    borderRight={colorMode === 'dark' ? "1px solid #F1F1F1" : "#4E4E4E"}
                                />
                            </Box>

                            <Box
                                w={["31px", "48px", "48px",]}
                                h={["24px", "38px", "38px",]}
                            >
                                {colorMode === 'light'}
                                <Image
                                    src={`/assets/icons/${icons.sun}`}
                                    w={["31px", "48px", "48px",]}
                                    h={["22px", "36px", "36px"]}
                                    borderRadius={["4px", "6px", "6px",]}
                                    borderLeft="1px solid #4E4E4E"
                                    p={["4px 8px", "7px 12px", "7px 12px",]}
                                    background={colorMode === 'dark' ? "transperent" : "#CACACA"}
                                    borderLeftColor={colorMode === 'dark' ? "black" : "#4E4E4E"}
                                />
                            </Box>
                        </Box>

                    </Flex>
                </Container>
            </>
        )
    }

    export default Footer