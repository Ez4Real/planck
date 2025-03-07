import { Box, List, Text } from "@chakra-ui/react"

interface PrivacyPolicyListItemProps {
  number: string
  title: string
  titleFontSize?: string
  description: string
  points: string[]
  
}

export const PrivacyPolicyListItem = ({
    number,
    title,
    titleFontSize="20px",
    description,
    points
}: PrivacyPolicyListItemProps) => {
  return (
    <Box mt="42px">
      <Text
        fontSize={titleFontSize}
        fontWeight="600"
      >{number}. {title}</Text>
      <Text
        className="privacy-policy-text"  
      >{description}:</Text>
      <List.Root
        color="ui.muted"
        lineHeight="20px"
        mt="16px"
        marginInlineStart="1.5em"
      >
        {points.map((point, index) => (
          <List.Item key={index}>{point}</List.Item>
        ))}
      </List.Root>
    </Box>
  )
}
