import { createFileRoute } from "@tanstack/react-router"

import FeaturedTVShowSection from "../../../sections/featured-tv-show"

export const Route = createFileRoute("/tv/featured/")({
  component: () => <FeaturedTVShowSection layout="grid" pagination={true} />,
})
