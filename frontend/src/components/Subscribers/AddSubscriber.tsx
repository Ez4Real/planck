import { useMutation } from "@tanstack/react-query"
import { type SubmitHandler, useForm } from "react-hook-form"

import {
  Button,
  Flex,
  Field,
  Input,
} from "@chakra-ui/react"

import { SubscribersService, type SubscriberCreate } from "@/client"
import type { ApiError } from "@/client/core/ApiError"
import useCustomToast from "@/hooks/useCustomToast"
import { getUserCoordinates, handleError } from "@/utils"

const AddSubscriber = () => {
  const { showSuccessToast } = useCustomToast()
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<SubscriberCreate>({
    mode: "onBlur",
    criteriaMode: "all",
    defaultValues: {
      coordinates: {
        latitude: 0,
        longitude: 0,
      },
      email: "",
    },
  })

  const mutation = useMutation({
    mutationFn: (data: SubscriberCreate) =>
      SubscribersService.createSubscriber({
        requestBody: data
      }),
    onSuccess: () => {
      showSuccessToast("Product created successfully.")
      reset()
    },
    onError: (err: ApiError) => {
      handleError(err)
    },
  })

  const onSubmit: SubmitHandler<SubscriberCreate> = async (data) => {
    const coordinates  = await getUserCoordinates()
    const processedData = {
      ...data,
      coordinates: {
        latitude: coordinates.latitude,
        longitude: coordinates.longitude,
      },
    }

    mutation.mutate(processedData)
  }

  return (
    <Flex
      as="form"
      onSubmit={handleSubmit(onSubmit)}
      justifyContent="center"
      alignItems="center"
      gap="4"
    >
      <Field.Root
        w={["246px", "246px", "275px"]}
      >
        <Input
          id="email"
          required
          placeholder="Enter your email"
          {...register("email", {
            required: "Email is required."
          })}
          type="text"
          h={["32px", "32px", "36px"]}
          borderColor="ui.muted"
        />
      </Field.Root>
      <Button
        type="submit"
        loading={isSubmitting}
        variant="plain"
        fontSize={["12px", "12px", "14px", "14px"]}
        p={["9px 18px", "9px 18px", "9px 12px", "9px 12px"]}
        h={["32px", "32px", "36px", "36px"]}
      >Join Waitlist</Button>
    </Flex>
  )
}

export default AddSubscriber
