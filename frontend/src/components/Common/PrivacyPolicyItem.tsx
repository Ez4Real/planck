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
        fontWeight="600"
        fontSize={["16px", "20px", "20px", "20px"]}
        lineHeight={["15px", "20px", "20px", "20px"]}
        mb={["12px", "16px", "16px", "16px"]}
      >{number}. {title}</Text>
      <Text
        color="ui.muted"
        maxWidth={["365px", "1040px", "1040px", "1040px"]}
        fontSize={["12px", "16px", "16px", "16px"]}
        lineHeight={["15px", "20px", "20px", "20px"]}
        whiteSpace="pre-line" 
      >{description}</Text>
    </Box>
  )
}
