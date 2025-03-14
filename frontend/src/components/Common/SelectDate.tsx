import { Dispatch, SetStateAction } from "react"
import { createListCollection, Select } from "@chakra-ui/react"
import { ListCollection } from "@chakra-ui/react"
import { SubscriberPublic } from "@/client"
import { useFormContext } from "react-hook-form"
import { convertStringToDate } from "@/utils"


export type StringDateItem = string | undefined

type DateRangeSelectorProps = {
  field_id: string
  label: string
  userDates: SubscriberPublic[]
  dateValue: StringDateItem
  setDateValue: Dispatch<SetStateAction<StringDateItem>>
}

const DateRangeSelector = ({
  field_id,
  label,
  userDates,
  dateValue,
  setDateValue
}: DateRangeSelectorProps) => {
  const {
    setValue
  } = useFormContext()

  const Datescollection: ListCollection<string> = createListCollection({
    items: (userDates)
    .map((item) => (
      item.created_at ? new Date(item.created_at).toLocaleString() : null
    ))
    .filter((date): date is string => date !== null)
  })
    

  const handleSelect = (value: string) => {
    setDateValue(value)
    setValue(field_id, convertStringToDate(value))
  }

  return (
    <Select.Root
      collection={Datescollection}
      onValueChange={(e) => handleSelect(e.items[0])}
      size="sm"
      width="320px"
    >
      <Select.Label>{label}</Select.Label>
      <Select.Trigger> 
        <Select.ValueText>
          <>{dateValue ? dateValue : "Select date"}</>
        </Select.ValueText>
      </Select.Trigger>
      <Select.Content>
        {Datescollection.items.map((date, index) => (
          <Select.Item
            key={index}
            item={date}
            _hover={{
              bg: "ui.main",
              color: "white"
            }}
          >
            {date}
          </Select.Item>
        ))}
      </Select.Content>
    </Select.Root>
  )
}

export default DateRangeSelector
