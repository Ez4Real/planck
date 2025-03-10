import { Text } from "@chakra-ui/react"

interface TermsOfServiceItemProps {
  number?: string
  title: string
  text: string
}

export const TermsOfServiceItem = ({
    number,
    title,
    text
}: TermsOfServiceItemProps) => {
  return (
    <Text
      fontSize={["12px", "16px", "16px", "16px"]}
      lineHeight={["15px", "20px", "20px", "20px"]}
      mt="12px"
    >
      <Text
        as="span"
        fontWeight="600"
      >{number} {title} </Text>
      {text}
    </Text>
  )
}
