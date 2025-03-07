import { Outlet, createFileRoute } from "@tanstack/react-router"
import "../index.css"
import Header from "@/components/Header"

export const Route = createFileRoute("/_main_layout")({
  component: MainLayout,
})

function MainLayout() {
  return (
    // <div className="main-layout">
    <>
      <Header />
      <Outlet />
      {/* <div>Footer Component comes here</div> */}
    </>
    // </div>
  )
}
