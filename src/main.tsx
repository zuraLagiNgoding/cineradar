import { StrictMode } from "react"
import { createRoot } from "react-dom/client"

import "@fontsource/source-sans-pro/200.css"
import "@fontsource/source-sans-pro/300.css"
import "@fontsource/source-sans-pro/400.css"
import "@fontsource/source-sans-pro/600.css"
import "@fontsource/source-sans-pro/700.css"
import "@fontsource/source-sans-pro/900.css"
import "./index.css"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { createRouter, RouterProvider } from "@tanstack/react-router"

import { HTTPError } from "ky"

import { routeTree } from "./routeTree.gen"

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: (failureCount, error) => {
        if (import.meta.env.DEV) console.log({ failureCount, error })

        if (failureCount >= 0 && import.meta.env.DEV) return false
        if (failureCount > 3 && import.meta.env.PROD) return false

        return !(
          error instanceof HTTPError &&
          [401, 403].includes(error.response.status)
        )
      },
      refetchOnWindowFocus: import.meta.env.PROD,
    },
  },
})

const router = createRouter({
  routeTree,
  context: {
    queryClient,
  },
  defaultPreloadStaleTime: 0,
  scrollRestoration: true,
})

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router
  }
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </StrictMode>
)
