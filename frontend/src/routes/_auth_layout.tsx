import { CustomProvider } from "@/components/ui/provider"
import { Outlet, createFileRoute } from "@tanstack/react-router"
import { system } from "@/theme"

export const Route = createFileRoute("/_auth_layout")({
  component: AuthLayout,
})

function AuthLayout() {
  return (
    <CustomProvider theme={system}>
      <Outlet />
    </CustomProvider>
  )
}
