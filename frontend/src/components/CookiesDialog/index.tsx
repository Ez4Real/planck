import { Link as RouterLink } from "@tanstack/react-router"
import { Button, CloseButton, Dialog, HStack, Portal, Text } from "@chakra-ui/react"
import { useEffect, useRef, useState } from "react"

const CookiesDialog = () => {
    const [isAccepted, setIsAccepted] = useState<boolean>(() => {
      const storedValue = localStorage.getItem("accept_cookies")
      return storedValue ? JSON.parse(storedValue) : false
    })

    const ref = useRef<HTMLInputElement>(null)

    useEffect(() => {
      localStorage.setItem("accept_cookies", JSON.stringify(isAccepted))
    }, [isAccepted])

    const acceptCookies = () => {
      setIsAccepted(true)
    }

    if (isAccepted) {
      return null
    }

    return (
      <Dialog.Root
        size="xs"
        motionPreset="slide-in-bottom"
        initialFocusEl={() => ref.current}
        closeOnInteractOutside={false}
        closeOnEscape={false}
        defaultOpen={!isAccepted}
      >
        <Portal>
          <Dialog.Backdrop />
          <Dialog.Positioner
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Dialog.Content
              p="30px"
              maxWidth="320px"
            >
              <Dialog.Header
                p="0"
                pb="16px"
              ><Dialog.Title>We use cookies</Dialog.Title>
              </Dialog.Header>
              <Dialog.Body focusRing="outside"
                p="0"
              >
                <Text lineHeight="20px">
                  Cookies help us deliver the best experience on our website.
                  By using our website, you agree to the use of cookies.
                  <RouterLink
                    className="link-footer"
                    to="/privacy-policy"
                    hash="root"
                  > <Text
                    as="span"
                    textDecoration="underline"
                    >Find out how we use cookies.
                  </Text>
                  </RouterLink>
                </Text>
              </Dialog.Body>
              <Dialog.Footer
                display="flex"
                justifyContent="space-between"
                p="0"
                mt="30px"
              >
                <HStack
                  w="100%"
                  gap="4%"
                >
                  <Dialog.ActionTrigger asChild>
                    <Button
                      variant="plain"
                      onClick={acceptCookies}
                      w="48%"
                    >Yes</Button>
                  </Dialog.ActionTrigger>
                  <Dialog.CloseTrigger asChild>
                    <Button
                      variant="plain"
                      w="48%"
                    >No</Button>
                  </Dialog.CloseTrigger>
                </HStack>

                <Dialog.CloseTrigger
                  position="absolute"
                  top="8px"
                  right="14px"
                >
                  <CloseButton
                    size="sm"
                    color="ui.dark"
                  />
                </Dialog.CloseTrigger>
              </Dialog.Footer>
            </Dialog.Content>
          </Dialog.Positioner>
        </Portal>
      </Dialog.Root>
    )
}

export default CookiesDialog