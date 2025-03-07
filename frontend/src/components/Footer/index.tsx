import { Container, Flex, Image, Link, Switch } from "@chakra-ui/react"
import { useColorModeValue } from "../ui/color-mode"

const Footer = () => {
    const logo = useColorModeValue("/logo-black.svg", "/logo.svg")
    return (
        <>
            <Container
                p="0 64px 96px"
            >
                <Flex
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <Flex
                        direction="column"
                        gap="12px"
                    >
                        <Image
                            src={logo}
                            h="39px"
                            width="176px"
                            mb="16px"
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

                    <Switch.Root
                        css={{
                            display: "flex",
                            alignItems: "center",
                            gap: "12px",
                            background: "ui.white"
                        }}
                    >
                        <Switch.HiddenInput
                        />

                        <Switch.Control
                            css={{
                                position: "relative",
                                width: "96px",
                                height: "38px",
                                bg: "ui.white",
                                border: "1px solid #4E4E4E",
                                borderRadius: "6px",
                                transition: "background 0.3s",
                                _checked: {
                                    bg: "",
                                },
                            }}
                        >

                            <Switch.Thumb
                                css={{
                                    position: "absolute",
                                    top: "0",
                                    right: "0",
                                    width: "48px",
                                    height: "38px",
                                    bg: "white",
                                    border: "1px solid #4E4E4E",
                                    boxShadow: "unset",
                                    borderRadius: "6px",
                                    transition: "right 0.3s",
                                    transform: "translateX(0)",
                                    "&[data-state='checked']": {
                                        right: "70px",
                                    },
                                }}
                            />

                        </Switch.Control>

                    </Switch.Root>
                </Flex>
            </Container>
        </>
    )
}

export default Footer