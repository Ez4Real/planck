import { Button, Container, Flex, Heading, Text } from "@chakra-ui/react"
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
  const [location, setLocation] = useState<Coordinates | null>(null)
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
    <Container>
      <Heading
        fontSize="58px"
        fontWeight="500"
        textAlign="center"
        lineHeight="72px"
        mt="140px"
      >Intelligence. Privacy. Simplicity.</Heading>
      <Text
        color="ui.muted"
        fontSize="20px"
        lineHeight="25px"
        textAlign="center"
        mt="32px"
        mx="auto"
      >A new way to understand your data, designed from the ground up <br />
        for the way you work. Planck AI transforms how you interact with<br />
        information. Simply ask questions about your documents and data<br />
        in natural language. Get immediate insights that matter.
      </Text>
      <Flex
        justifyContent="center"
        mt="56px"
        mx="auto"
      >
        <Button
          onClick={getUserLocation}
          variant="plain"
          p="8px 18px"
        >Join Waitlist</Button>
      </Flex>
    </Container>
  )
}
  