import { createFileRoute } from "@tanstack/react-router"

import SearchSection from "../../sections/search"

export const Route = createFileRoute("/search/")({
  component: RouteComponent,
  validateSearch: (search) => ({
    query: String(search.query),
  }),
})

function RouteComponent() {
  const { query } = Route.useSearch()

  return <SearchSection query={query} />
}
