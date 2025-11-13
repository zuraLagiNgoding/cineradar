import * as React from "react"

import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import { createRootRoute, Outlet } from "@tanstack/react-router"

import { Toaster } from "sonner"

import Navbar from "../components/layout/navbar"

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  return (
    <React.Fragment>
      <Navbar />
      <main className="flex flex-col items-center overflow-hidden">
        <Outlet />
      </main>

      <Toaster position="top-center" theme="system" />

      {import.meta.env.DEV && (
        <>
          <ReactQueryDevtools buttonPosition="bottom-left" />
        </>
      )}
    </React.Fragment>
  )
}
