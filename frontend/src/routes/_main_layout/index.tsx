import { Box, Button, Container, Flex, Heading, Separator, Text, HStack, Input, Field } from "@chakra-ui/react"
import { createFileRoute } from "@tanstack/react-router"


export const Route = createFileRoute("/_main_layout/")({
  component: Main,
})


function Main() {

  return (
    <Container
      p="0 54px"
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
        p="31px 40px 55px"
        m="120px 0"
        border="1px solid #4E4E4E"
        borderRadius="8px"
      >
        <Text
          as="h2"
          color="ui.dark"
          fontSize="58px"
          fontWeight="500"
          textAlign="center"
          mb="33px"
        >Magical. Yet Practical.</Text>

        <HStack gap="0">
          <Flex
            direction="column"
            gap="0"
            h="100%"
          >
            <Text
              color="ui.dark"
              fontSize="36px"
              fontWeight="500"
              mb="16px"
              textIndent="5px"
              lineHeight="45px"
            >
              Intuitive
            </Text>
            <Text
              color="ui.muted"
            >
              No learning curve. Ask questions in your own words and receive clear answers instantly.
            </Text>

            <Separator
              m="32px 0"
            >
            </Separator>

            <Text
              color="ui.dark"
              fontSize="36px"
              fontWeight="500"
              mb="16px"
              textIndent="5px"
              lineHeight="45px"
            >
              Private
            </Text>

            <Text
              color="ui.muted"
            >
              Built with privacy at its core. Self-hosted and secure, your data never leaves your control.
            </Text>

          </Flex>

          <Separator
            orientation="vertical"
            m="0 57px"
            height="282px"
          />
          <Flex
            direction="column"
          >

            <Text
              color="ui.dark"
              fontSize="36px"
              fontWeight="500"
              lineHeight="45px"
              mb="16px"
              textIndent="5px"
            >
              Comprehensive
            </Text>

            <Text
              color="ui.muted"
            >
              Works with spreadsheets, PDFs, Word documents, and various business tools.
            </Text>

            <Separator
              m="32px 0"
            >
            </Separator>

            <Text
              color="ui.dark"
              fontSize="36px"
              fontWeight="500"
              lineHeight="45px"
              mb="16px"
              textIndent="5px"
            >
              Intelligent
            </Text>

            <Text
              color="ui.muted"
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
          mb="120px"
          fontSize="58px"
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
        >Your Data. Your Control.</Box>
      </Box>

      <Box
        pb="160px"
      >
        <Text
          color="ui.dark"
          fontSize="58px"
          fontWeight="500"
          textAlign="center"
        >NOW INVITING BETA USERS
        </Text>

        <Text
          color="ui.muted"
          textAlign="center"
          mt="28px"
          mb="63px"
        >
          Everything on your device: your data, your AI,<br />
          your insights. Create a secure, personal knowledge<br />
          hub with your most sensitive information.
        </Text>

        <Flex
          justifyContent="center"
          gap="4"
        >
          <Field.Root
            w="275px"
          >
            <Input
              placeholder="Enter your email"
              color="ui.muted"
              fontSize="14px"
              fontFamily="input"
              h="36px"
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