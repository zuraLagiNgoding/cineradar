import { createFileRoute } from "@tanstack/react-router"

import TopRatedTVShowSection from "../../../sections/top-rated-tv-show"

export const Route = createFileRoute("/tv/top-rated/")({
  component: () => <TopRatedTVShowSection layout="grid" pagination={true} />,
})
