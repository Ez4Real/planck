import {
  Box,
  Button,
  Container,
  Flex, 
  Text,
  HStack,
  Input,
  Field,
  CloseButton,
  Dialog,
  For,
  Portal,
} from "@chakra-ui/react"
import { createFileRoute } from "@tanstack/react-router"
import { useState } from "react";

export const Route = createFileRoute("/_main_layout/")({
  component: Main,
})

interface Coordinates {
  latitude: number;
  longitude: number;
}

function Main() {
  const [isAccepted, setIsAccepted] = useState(localStorage.getItem('accept_cookies'))

  // const [location, setLocation] = useState<Coordinates | null>(null)
  const [error, setError] = useState<string | null>(null)


  const getUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          console.log(latitude, longitude);

        },
        (err) => {
          setError(err.message);
        }
      );
    } else {
      setError('Geolocation is not supported by this browser.');
    }
  };

  return (
    <Container
      p={["0 21px", "0 21px", "0 21px", "0 54px"]}
      pt={["54px", "54px", "140px", "140px"]}
    >
      <Text
        as="h1"
        color="ui.dark"
        fontSize={["36px", "58px", "58px"]}
        lineHeight={["46px", "73px", "73px"]}
        fontWeight="500"
        textAlign="center"
      >Intelligence. Privacy. Simplicity.</Text>
      <Text
        color="ui.muted"
        fontSize={["12px", "20px", "20px"]}
        lineHeight={["15px", "25px", "25px"]}
        textAlign="center"
        mt={["24px", "24px", "32px", "32px"]}
      >A new way to understand your data, designed from the ground up <Box display={["none", "none", "block", "block"]} />
        for the way you work. Planck AI transforms how you interact with <Box display={["none", "none", "block", "block"]} />
        information. Simply ask questions about your documents and data <Box display={["none", "none", "block", "block"]} />
        in natural language. Get immediate insights that matter.
      </Text>
      <Flex
        justifyContent="center"
        pt={["46px", "46px", "36px", "36px"]}
      >
        <Button
          onClick={getUserLocation}
          fontSize={["12px", "12px", "16px", "16px"]}
          h={["31px", "31px", "36px", "36px"]}
          variant="plain"
          p="8px 18px"
        >Join Waitlist</Button>
      </Flex>

      <Box
        p={["16px 0", "16px 0", "16px 0", "31px 40px 55px"]}
        m={["101px 0", "120px 0"]}
        border="1px solid #4E4E4E"
        borderColor={["rgba(0, 0, 0, 0.3)", "#4E4E4E", "#4E4E4E", "#4E4E4E",]}
        borderRadius="8px"
        boxShadow="4px 8px 9px rgba(0, 0, 0, 0.05)"
      >
        <Text
          fontSize={["32px", "32px", "58px", "58px"]}
          mb={["16px", "16px", "16px", "33px"]}
          lineHeight={["40px", "40px", "73px"]}
          as="h2"
          color="ui.dark"
          fontWeight="500"
          textAlign="center"
        >Magical. <Box display={["block", "block", "none", "none"]} /> Yet Practical.</Text>

        <HStack
          wrap={["wrap", "wrap", "wrap", "nowrap"]}
          gap="0"
        >
          <Flex
            direction="column"
            gap="0"
            h="100%"
            w="100%"
          >
            <Text
              fontSize={["24px", "24px", "36px"]}
              mb={["8px", "8px", "8px", "16px"]}
              p={["0 11px", "0 11px", "0 11px", "0"]}
              color="ui.dark"
              fontWeight="500"
              textIndent="5px"
              lineHeight={["", "", "45px"]}
            >
              Intuitive
            </Text>
            <Text
              color="ui.muted"
              fontSize={["12px", "12px", "16px"]}
              p={["0 11px", "0 11px", "0 11px", "0"]}
            >
              No learning curve. Ask questions in your own words and receive clear answers instantly.
            </Text>

            <Box
              background={["rgba(0, 0, 0, 0.3)", "#4E4E4E", "#4E4E4E", "#4E4E4E",]}
              w="100%"
              h="1px"
              m={["16px 0", "16px 0", "16px 0", "32px 0"]}
            >
            </Box>

            <Text
              fontSize={["24px", "24px", "36px"]}
              mb={["8px", "8px", "8px", "16px"]}
              p={["0 11px", "0 11px", "0 11px", "0"]}
              color="ui.dark"
              fontWeight="500"
              textIndent="5px"
              lineHeight={["", "", "45px"]}
            >
              Private
            </Text>

            <Text
              color="ui.muted"
              fontSize={["12px", "12px", "16px"]}
              p={["0 11px", "0 11px", "0 11px", "0"]}
            >
              Built with privacy at its core. Self-hosted and secure, your data never leaves your control.
            </Text>

          </Flex>

          <Box
            background={["rgba(0, 0, 0, 0.3)", "#4E4E4E", "#4E4E4E", "#4E4E4E",]}
            w={["100%", "100%", "100%", "1px"]}
            h={["1px", "1px", "1px", "282px"]}
            m={["16px 0", "16px 0", "16px 0", "0 57px"]}
          />
          <Flex
            direction="column"
            w="100%"
          >

            <Text
              fontSize={["24px", "24px", "36px"]}
              mb={["8px", "8px", "8px", "16px"]}
              p={["0 11px", "0 11px", "0 11px", "0"]}
              color="ui.dark"
              fontWeight="500"
              textIndent="5px"
              lineHeight={["", "", "45px"]}
            >
              Comprehensive
            </Text>

            <Text
              color="ui.muted"
              fontSize={["12px", "12px", "16px"]}
              p={["0 11px", "0 11px", "0 11px", "0"]}
            >
              Works with spreadsheets, PDFs, Word documents, and various business tools.
            </Text>

            <Box
              background={["rgba(0, 0, 0, 0.3)", "#4E4E4E", "#4E4E4E", "#4E4E4E",]}
              w="100%"
              h="1px"
              m={["16px 0", "16px 0", "16px 0", "32px 0"]}
            >
            </Box>

            <Text
              fontSize={["24px", "24px", "36px"]}
              mb={["8px", "8px", "8px", "16px"]}
              p={["0 11px", "0 11px", "0 11px", "0"]}
              color="ui.dark"
              fontWeight="500"
              textIndent="5px"
              lineHeight={["", "", "45px"]}
            >
              Intelligent
            </Text>

            <Text
              color="ui.muted"
              fontSize={["12px", "12px", "16px"]}
              p={["0 11px", "0 11px", "0 11px", "0"]}
            >
              Understands context and relationships, revealing not just what happened, but why.
            </Text>

          </Flex>

        </HStack>
      </Box>
      <Box
        position="relative"
      >
        <Box
          pt="18px"
          pb="17px"
          mb={["101px", "101px", "120px", "120px",]}
          fontSize={["32px", "32px", "58px"]}
          lineHeight={["40px", "40px", "73px"]}
          fontWeight="500"
          color="ui.light"
          bg="ui.dark"
          textAlign="center"
          _after={{
            content: '""',
            display: "block",
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
            width: "100vw",
            top: "0",
            height: "100%",
            background: "ui.dark",
            zIndex: "-1",
          }}
        >Your Data. <Box display={["block", "block", "none", "none"]} /> Your Control.</Box>
      </Box>

      <Box>
        <Text
          color="ui.dark"
          fontSize={["32px", "32px", "58px"]}
          fontWeight="500"
          lineHeight={["40px", "40px", "73px"]}
          textAlign="center"
        >NOW INVITING BETA USERS
        </Text>

        <Text
          color="ui.muted"
          textAlign="center"
          mt={["12px", "12px", "28px"]}
          mb={["44px", "44px", "63px"]}
          fontSize={["12px", "12px", "20px"]}
        >
          Everything on your device: your data, your AI, <Box display={["block"]} />
          your insights. Create a secure, personal knowledge <Box display={["none", "block", "none", "block"]} />
          hub with your most sensitive <Box display={["block", "block", "none", "none"]} /> information.
        </Text>

        <Flex
          justifyContent="center"
          alignItems="center"
          gap="4"
        >
          <Field.Root
            w={["246px", "246px", "275px"]}
          >
            <Input
              placeholder="Enter your email"
              color="ui.muted"
              fontSize="14px"
              fontFamily="input"
              h={["32px", "32px", "36px"]}
              borderColor="ui.muted"
            />
          </Field.Root>
          <Button
            onClick={getUserLocation}
            variant="plain"
            fontSize={["12px", "12px", "14px", "14px"]}
            p={["9px 18px", "9px 18px", "9px 12px", "9px 12px"]}
            h={["32px", "32px", "36px", "36px"]}
          >Join Waitlist</Button>
        </Flex>
      </Box>

      <HStack 
        wrap="wrap" 
        gap="4"
        >
        <For each={["xs"]}>
          {(size) => (
            <Dialog.Root
              key={size}
              size={size}
              motionPreset="slide-in-bottom"
            >
              <Dialog.Trigger asChild>

                <Button variant="outline">Open Dialog</Button>
                
              </Dialog.Trigger>

              <Portal>
                <Dialog.Backdrop />
                
                <Dialog.Positioner display="flex" alignItems="center" justifyContent="center">
                  <Dialog.Content
                    p="30px"
                    maxWidth="320px"
                  >
                    <Dialog.Header
                      p="0"
                      pb="16px"
                    >
                      <Dialog.Title
                      >We use cookies</Dialog.Title>
                    </Dialog.Header>

                    <Dialog.Body
                      p="0"
                    >
                      <p style={{ lineHeight: "20px" }}>
                        Cookies help us deliver the best experience on our website. 
                        By using our website, you agree to the use of cookies. <span style={{ textDecoration: "underline" }}>Find out how we use cookies.</span>
                      </p>
                    </Dialog.Body>
                    <Dialog.Footer
                      display="flex"
                      justifyContent="space-between"
                      p="0"
                      mt="30px"
                    >
                      <Dialog.ActionTrigger asChild w="47%">
                        <Button 
                        variant="outline" 
                        borderColor="ui.muted"
                        color="ui.dark"
                        background="ui.white"
                        borderWidth="3px"
                        borderRadius="initial"
                        
                        >Yes</Button>
                      </Dialog.ActionTrigger>

                      <Button
                        w="47%"
                        color="ui.dark"
                        background="ui.white"
                        borderColor="ui.muted"
                        borderWidth="3px"
                        borderRadius="initial"
                      >No</Button>

                    </Dialog.Footer>

                    <Dialog.CloseTrigger 
                      position="absolute"
                      top="8px"
                      right="14px"
                    >
                      <CloseButton size="sm" color="ui.dark" />
                    </Dialog.CloseTrigger>

                  </Dialog.Content>
                </Dialog.Positioner>
              </Portal>
            </Dialog.Root>
          )}
        </For>
      </HStack>

    </Container>
  )
}