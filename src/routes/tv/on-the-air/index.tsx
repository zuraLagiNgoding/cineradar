import { createFileRoute } from "@tanstack/react-router"

import OnTheAirTVShowSection from "../../../sections/on-the-air-tv-show"

export const Route = createFileRoute("/tv/on-the-air/")({
  component: () => <OnTheAirTVShowSection layout="grid" pagination={true} />,
})
