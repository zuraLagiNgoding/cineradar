import { createFileRoute } from "@tanstack/react-router"

import SearchTVShowSection from "../../sections/search-tv-show"

export const Route = createFileRoute("/search/tv")({
  component: RouteComponent,
  validateSearch: (search) => ({
    query: String(search.query),
  }),
})

function RouteComponent() {
  const { query } = Route.useSearch()

  return <SearchTVShowSection query={query} />
}
