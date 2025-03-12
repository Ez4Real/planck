import {
  Box,
  Container,
  EmptyState,
  Flex,
  Heading,
  Table,
  VStack,
} from "@chakra-ui/react"
import { useQuery } from "@tanstack/react-query"
import { createFileRoute, useNavigate } from "@tanstack/react-router"
import { FiSearch } from "react-icons/fi"
import { z } from "zod"

import { SubscribersService } from "@/client"
import PendingSubscribers from "@/components/Pending/PendingSubscribers"
import {
  PaginationItems,
  PaginationNextTrigger,
  PaginationPrevTrigger,
  PaginationRoot,
} from "@/components/ui/pagination.tsx"
import { useEffect, useRef } from "react"
import { useColorModeValue } from "@/components/ui/color-mode"

const subscribersSearchSchema = z.object({
  page: z.number().catch(1),
})

const PER_PAGE = 7

function getSubscribersQueryOptions({ page }: { page: number }) {
  return {
    queryFn: () =>
      SubscribersService.readSubscribers({ skip: (page - 1) * PER_PAGE, limit: PER_PAGE }),
    queryKey: ["subscribers", { page }],
  }
}

export const Route = createFileRoute("/_layout/admin/subscribers")({
  component: Subscribers,
  validateSearch: (search) => subscribersSearchSchema.parse(search),
})

function SubscribersTable() {
  const navigate = useNavigate({ from: Route.fullPath })
  const { page } = Route.useSearch()

  const { data, isLoading, isPlaceholderData } = useQuery({
    ...getSubscribersQueryOptions({ page }),
    placeholderData: (prevData) => prevData,
  })

  const setPage = (page: number) =>
    navigate({
      search: (prev: { [key: string]: number }) => ({ ...prev, page }),
    })

  const subscribers = data?.data.slice(0, PER_PAGE) ?? []
  const count = data?.count ?? 0

  const scrollbarColor = useColorModeValue("ui.main", "ui.steel")
  const scrollContainerRef = useRef<HTMLDivElement | null>(null)
  
  useEffect(() => {
    const container = scrollContainerRef.current
    if (!container) return

    const handleWheel = (evt: WheelEvent) => {
      evt.preventDefault()
      container.scrollLeft += evt.deltaY / 3
    }

    container.addEventListener("wheel", handleWheel)
    return () => container.removeEventListener("wheel", handleWheel)
  }, [isLoading])

  if (isLoading) {
    return <PendingSubscribers />
  }

  if (subscribers.length === 0) {
    return (
      <EmptyState.Root>
        <EmptyState.Content>
          <EmptyState.Indicator>
            <FiSearch />
          </EmptyState.Indicator>
          <VStack textAlign="center">
            <EmptyState.Title>You don't have any subscribers yet</EmptyState.Title>
          </VStack>
        </EmptyState.Content>
      </EmptyState.Root>
    )
  }

  return (
    <>
      <Box
        ref={scrollContainerRef}
        css={{
          "&::-webkit-scrollbar-thumb": {
            background: scrollbarColor,
          },
        }}
        whiteSpace="nowrap"
        overflowX="auto"
        p={0}
      >
        <Table.Root
          size={{ base: "sm", md: "md" }}
        >
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeader>ID</Table.ColumnHeader>
              <Table.ColumnHeader>Email</Table.ColumnHeader>
              <Table.ColumnHeader>Date | Time</Table.ColumnHeader>
              <Table.ColumnHeader>Location</Table.ColumnHeader>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {subscribers?.map((subscriber) => (
              <Table.Row key={subscriber.id} opacity={isPlaceholderData ? 0.5 : 1}>
                <Table.Cell truncate maxW="sm">
                  {subscriber.id}
                </Table.Cell>
                <Table.Cell truncate maxW="sm">
                  {subscriber.email}
                </Table.Cell>
                <Table.Cell
                  truncate
                  maxWidth="30%"
                >
                  {new Date(subscriber.created_at as string).toLocaleString()}
                </Table.Cell>
                <Table.Cell
                  color={!subscriber.location ? "ui.dim" : "inherit"}
                >
                  { subscriber.location || "N/A"}
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Root>
      </Box>
      <Flex justifyContent="flex-end" mt={4}>
        <PaginationRoot
          count={count}
          pageSize={PER_PAGE}
          onPageChange={({ page }) => setPage(page)}
        >
          <Flex>
            <PaginationPrevTrigger />
            <PaginationItems />
            <PaginationNextTrigger />
          </Flex>
        </PaginationRoot>
      </Flex>
    </>
  )
}

function Subscribers() {
  return (
    <Container maxW="full">
      <Heading
        size="lg"
        pt={2}
        pb={4}
        pl={[10, 0]}
      >
        Subscribers
      </Heading>
      <SubscribersTable />
    </Container>
  )
}
