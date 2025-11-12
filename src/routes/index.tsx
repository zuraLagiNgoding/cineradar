import { createFileRoute } from "@tanstack/react-router"

import TopRatedMoviesSection from "../sections/top-rated-movies"
import TopRatedTVSeriesSection from "../sections/top-rated-tv-series"

export const Route = createFileRoute("/")({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <TopRatedMoviesSection />

      <TopRatedTVSeriesSection />
    </>
  )
}
