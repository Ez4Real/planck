import { Outlet, createFileRoute } from "@tanstack/react-router"
import "../index.css"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import CookiesDialog from "@/components/CookiesDialog"
import { CustomProvider } from "@/components/ui/provider"
import { main } from "@/theme"

export const Route = createFileRoute("/_main_layout")({
  component: MainLayout,
})

function MainLayout() {
  return (
    <CustomProvider theme={main}>
      <Header />
      <Outlet />
      <Footer />
      <CookiesDialog />
    </CustomProvider>
  )
}
