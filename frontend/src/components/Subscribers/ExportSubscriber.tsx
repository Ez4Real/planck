import { useMutation } from "@tanstack/react-query"
import { FormProvider, type SubmitHandler, useForm } from "react-hook-form"

import {
  Box,
  Button,
  DialogActionTrigger,
  DialogTitle,
  Field,
  Flex,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react"
import { useState } from "react"
import { FaPlus } from "react-icons/fa"

import { type SubscribersExport, SubscribersService } from "@/client"
import type { ApiError } from "@/client/core/ApiError"
import useCustomToast from "@/hooks/useCustomToast"
import { downloadFromBlob, handleError } from "@/utils"
import {
  DialogBody,
  DialogCloseTrigger,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogRoot,
  DialogTrigger,
} from "../ui/dialog"


const ExportSubscriber = () => {
  const [isOpen, setIsOpen] = useState(false)

  const { showSuccessToast } = useCustomToast()

  const methods = useForm<SubscribersExport>({
    mode: "onBlur",
    criteriaMode: "all",
    defaultValues: {
      date_from: undefined,
      date_to: undefined,
    },
  })

  const {
    handleSubmit,
    register,
    reset,
    formState: { isSubmitting },
  } = methods

  const mutation = useMutation({
    mutationFn: async (data: SubscribersExport) => {
      const response = await SubscribersService.exportSubscribers({
        requestBody: data
      })
      const blob = new Blob([response as Blob], { type: "text/csv" })
      const date = new Date()
      const filename = `subscribers-${date.toISOString().slice(0, 19)}.csv`

      downloadFromBlob(blob, filename)
    },
    onSuccess: () => {
      showSuccessToast("Subscribers exported successfully.")
      reset()
      setIsOpen(false)
    },
    onError: (err: ApiError) => {
      handleError(err)
    },
  })

  const onSubmit: SubmitHandler<SubscribersExport> = (data) => {
    console.log(data);
    console.log(typeof(data.date_from));
    console.log(typeof(data.date_to));
    
    mutation.mutate(data)
  }

  const actionName = "Export Subscribers"
  return (
    <DialogRoot
      size={{ base: "xs", md: "md" }}
      placement="center"
      open={isOpen}
      onOpenChange={({ open }) => setIsOpen(open)}
    >
      <DialogTrigger asChild>
        <Button value="add-product" my={4}>
          <FaPlus fontSize="16px" />
          {actionName}
        </Button>
      </DialogTrigger>
      <DialogContent
        h="95%"
      >
        <FormProvider {...methods}>
          <Flex
            as="form"
            direction="column"
            justifyContent="space-between"
            height="100%"
            overflowY="scroll"
            onSubmit={handleSubmit(onSubmit)}
          >
            <Box>
              <DialogHeader>
                <DialogTitle>{actionName}</DialogTitle>
              </DialogHeader>
              <DialogBody>
                <Text mb={4}>Select Date | Time range to export subscribers.</Text>
                <VStack
                  gap={4}
                >
                  <Field.Root>
                    <Field.Label>
                      From <Field.RequiredIndicator />
                    </Field.Label>
                    <Input
                      size='md'
                      type='datetime-local'
                      id="date_from"
                      required
                      {...register("date_from", {
                        required: "Title is required.",
                        setValueAs: (value) => value ? new Date(value) : null,
                      })}
                    />
                  </Field.Root>

                  <Field.Root>
                    <Field.Label>
                      To <Field.RequiredIndicator />
                    </Field.Label>
                    <Input
                      size='md'
                      type='datetime-local'
                      id="date_to"
                      required
                      {...register("date_to", {
                        required: "Title is required.",
                        setValueAs: (value) => value ? new Date(value) : null,
                      })}
                      
                    />
                  </Field.Root> 
                </VStack>
              </DialogBody>
            </Box>

            <DialogFooter gap={2}>
              <DialogActionTrigger asChild>
                <Button
                  variant="subtle"
                  colorPalette="gray"
                  disabled={isSubmitting}
                >
                  Cancel
                </Button>
              </DialogActionTrigger>
              <Button
                variant="solid"
                type="submit"
                loading={isSubmitting}
              >
                Export
              </Button>
            </DialogFooter>
          </Flex>
        </FormProvider>
      <DialogCloseTrigger />
    </DialogContent>
  </DialogRoot>
  )
}

export default ExportSubscriber
