import { createFileRoute } from "@tanstack/react-router"

import TopRatedMoviesSection from "../../../sections/top-rated-movies"

export const Route = createFileRoute("/movie/top-rated/")({
  component: () => <TopRatedMoviesSection layout="grid" pagination={true} />,
})
