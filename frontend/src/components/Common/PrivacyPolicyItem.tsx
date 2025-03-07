import { Box, Text } from "@chakra-ui/react"

interface PrivacyPolicyItemProps {
  number: string
  title: string
  description: string
}

export const PrivacyPolicyItem = ({
    number,
    title,
    description
}: PrivacyPolicyItemProps) => {
  return (
    <Box mt="42px">
      <Text
        fontSize="20px"
        fontWeight="600"
      >{number}. {title}</Text>
      <Text
        className="privacy-policy-text"
        whiteSpace="pre-line" 
      >{description}</Text>
    </Box>
  )
}
