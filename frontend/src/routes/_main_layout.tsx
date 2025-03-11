import { Outlet, createFileRoute } from "@tanstack/react-router"
import "../index.css"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import CookiesDialog from "@/components/CookiesDialog"

export const Route = createFileRoute("/_main_layout")({
  component: MainLayout,
})

function MainLayout() {
  return (
    // <div className="main-layout">
    <>
      <Header />
      <Outlet />
      <Footer />
      <CookiesDialog />
    </>
    // </div>
  )
}
