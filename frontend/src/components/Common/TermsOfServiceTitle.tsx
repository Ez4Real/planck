import { Text } from "@chakra-ui/react"

interface TermsOfServiceTitleProps {
  title: string
}

export const TermsOfServiceTitle = ({ title }: TermsOfServiceTitleProps) => {
  return (
    <Text
      fontSize={["16px", "20px", "20px", "20px"]}
      fontWeight="600"
      lineHeight={["20px", "25px", "25px", "25px"]}
      mt={["24px", "42px", "42px", "42px"]}
    >{title}
    </Text>
  )
}
