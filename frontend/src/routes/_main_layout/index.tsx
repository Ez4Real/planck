import { Box, Button, Container, Flex, Text, HStack, Input, Field } from "@chakra-ui/react"
import { createFileRoute } from "@tanstack/react-router"


export const Route = createFileRoute("/_main_layout/")({
  component: Main,
})


function Main() {

  return (
    <Container
      p={["0 21px", "0 21px", "0 21px", "0 54px"]}
    >
      <Text
        as="h1"
        color="ui.dark"
        fontSize="58px"
        fontWeight="500"
        textAlign="center"
      >Intelligence. Privacy. Simplicity.</Text>
      <Text
        color="ui.muted"
        fontSize="20px"
        textAlign="center"
        mt="32px"
      >A new way to understand your data, designed from the ground up for the way you work. Planck AI transforms how you interact with information. Simply ask questions about your documents and data in natural language. Get immediate insights that matter.
      </Text>
      <Flex
        justifyContent="center"
        p="48px"
      >
        <Button
          colorScheme="black"
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
          as="h2"
          color="ui.dark"
          fontWeight="500"
          textAlign="center"
        >Magical. <Box display={["block", "block", "none", "none"]}/> Yet Practical.</Text>

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
        >Your Data. <Box display={["block", "block", "none", "none"]}/> Your Control.</Box>
      </Box>

      <Box
        pb={["100px", "100px", "160px", "160px",]}
      >
        <Text
          color="ui.dark"
          fontSize={["32px", "32px", "58px"]}
          fontWeight="500"
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
          Everything on your device: your data, your AI, <Box display={["block"]}/>
          your insights. Create a secure, personal knowledge <Box display={["none", "block", "none", "block"]}/>
          hub with your most sensitive <Box display={["block", "block", "none", "none"]}/> information.
        </Text>

        <Flex
          justifyContent="center"
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
            variant="solid"
            p="8px 18px"
          >Join Waitlist
          </Button>
        </Flex>
      </Box>



    </Container>
  )
}