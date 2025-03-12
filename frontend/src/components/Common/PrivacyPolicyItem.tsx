import { Box, Text } from "@chakra-ui/react"
import { useColorModeValue } from "../ui/color-mode"

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
  const mutedTextColor = useColorModeValue("ui.muted", "ui.darkHardMuted")
  return (
    <Box mt="42px">
      <Text
        fontWeight="600"
        fontSize={["16px", "20px", "20px", "20px"]}
        lineHeight={["15px", "20px", "20px", "20px"]}
        mb={["12px", "16px", "16px", "16px"]}
      >{number}. {title}</Text>
      <Text
        color={mutedTextColor}
        fontSize={["12px", "16px", "16px", "16px"]}
        lineHeight={["15px", "20px", "20px", "20px"]}
        whiteSpace="pre-line" 
      >{description}</Text>
    </Box>
  )
}
