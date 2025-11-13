import { createFileRoute } from "@tanstack/react-router"

import SearchMoviesSection from "../../sections/search-movies"

export const Route = createFileRoute("/search/movies")({
  component: RouteComponent,
  validateSearch: (search) => ({
    query: String(search.query),
  }),
})

function RouteComponent() {
  const { query } = Route.useSearch()

  return <SearchMoviesSection query={query} />
}
