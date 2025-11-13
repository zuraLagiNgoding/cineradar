import { createFileRoute } from "@tanstack/react-router"

import FeaturedMoviesSection from "../../../sections/featured-movies"

export const Route = createFileRoute("/movie/featured/")({
  component: () => <FeaturedMoviesSection layout="grid" pagination={true} />,
})
