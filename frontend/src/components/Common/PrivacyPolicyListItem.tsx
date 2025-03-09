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
    description,
    points
}: PrivacyPolicyListItemProps) => {
  return (
    <Box mt="42px">
      <Text
        fontSize={["16px", "20px", "20px", "20px"]}
        lineHeight={["20px", "25px", "25px", "25px"]}
        fontWeight="600"
        mb="16px"
      >{number}. {title}</Text>
      <Text
        color="ui.muted"
        fontSize={["12px", "16px", "16px", "16px"]}
        lineHeight={["15px", "20px", "20px", "20px"]}
      >{description}:</Text>
      <List.Root
        color="ui.muted"
        fontSize={["12px", "16px", "16px", "16px"]}
        lineHeight={["15px", "20px", "20px", "20px"]}
        mt="12px"
        marginInlineStart="1.5em"
      >
        {points.map((point, index) => (
          <List.Item key={index}>{point}</List.Item>
        ))}
      </List.Root>
    </Box>
  )
}
