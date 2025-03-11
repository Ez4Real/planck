import { Outlet, createRootRoute } from "@tanstack/react-router"
import NotFound from "@/components/Common/NotFound"
import { useEffect } from "react"

// const loadDevtools = () =>
//   Promise.all([
//     import("@tanstack/router-devtools"),
//     import("@tanstack/react-query-devtools"),
//   ]).then(([routerDevtools, reactQueryDevtools]) => {
//     return {
//       default: () => (
//         <>
//           <routerDevtools.TanStackRouterDevtools />
//           <reactQueryDevtools.ReactQueryDevtools />
//         </>
//       ),
//     }
//   })

// const TanStackDevtools =
//   process.env.NODE_ENV === "production" ? () => null : React.lazy(loadDevtools)

function updateFavicon(isDarkMode: boolean) {
  const favicon = isDarkMode ? "favicon.svg" : "favicon-black.svg"

  document.querySelectorAll(
      "link[rel='icon'], link[rel='shortcut icon'], link[rel='apple-touch-icon']"
    ).forEach(el => {
      el.setAttribute("href", `/assets/images/${favicon}?v=${Date.now()}`)
  })
}

function useFaviconTheme() {
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")
    const handleChange = () => updateFavicon(mediaQuery.matches)

    updateFavicon(mediaQuery.matches)
    mediaQuery.addEventListener("change", handleChange)

    return () => mediaQuery.removeEventListener("change", handleChange)
  }, [])
}

function Root() {
  useFaviconTheme()
  return (
    <>
      <Outlet />
      {/* <Suspense>
        <TanStackDevtools />
      </Suspense> */}
    </>
  )
}

export const Route = createRootRoute({
  component: Root,
  notFoundComponent: () => <NotFound />,
})
