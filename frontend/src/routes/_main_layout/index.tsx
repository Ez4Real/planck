import { Box, Button, Container, Flex, Heading, Text } from "@chakra-ui/react"
  import { createFileRoute } from "@tanstack/react-router"
  
  export const Route = createFileRoute("/_main_layout/")({
    component: Main,
  })


  function Main() {
  
    return (
      <Container>
        <Heading
          fontSize="58px"
          fontWeight="500"
          textAlign="center"
          lineHeight="72px"
        >Intelligence. Privacy. Simplicity.</Heading>
        <Text
          color="ui.muted"
          fontSize="20px"
          lineHeight="25px"
          textAlign="center"
          w="845px"
          mt="32px"
          mx="auto"
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
        {/* <Box p="20px" mt="120px">PLACEHOLDER</Box> */}
      </Container>
    )
  }
  