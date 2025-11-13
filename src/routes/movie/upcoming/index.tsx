import { createFileRoute } from "@tanstack/react-router"

import UpcomingMoviesSection from "../../../sections/upcoming-movies"

export const Route = createFileRoute("/movie/upcoming/")({
  component: () => <UpcomingMoviesSection layout="grid" pagination={true} />,
})
