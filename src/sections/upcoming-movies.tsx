import { useQuery } from "@tanstack/react-query"

import List from "../components/layout/list"
import Section from "../components/layout/section"
import MediaCard from "../components/media/media-card"
import MediaCardSkeleton from "../components/media/skeletons/media-card-skeleton"

import { upcomingMovieQueryOptions } from "../services/query-options"

import { cn } from "../lib/utils"

type UpcomingMoviesSectionProps = {
  layout?: "grid" | "list"
}

export default function UpcomingMoviesSection({
  layout = "grid",
}: UpcomingMoviesSectionProps) {
  // =========== Queries ===========
  const { data, isLoading } = useQuery(upcomingMovieQueryOptions())
  // =========== Queries ===========

  return (
    <Section title="Upcoming Movies">
      <List layout={layout}>
        {isLoading
          ? Array.from({ length: 10 }).map((_, index) => (
              <MediaCardSkeleton key={index} />
            ))
          : data &&
            data.results?.map((media) => (
              <MediaCard
                key={media.id}
                media={media}
                className={cn(layout === "list" && "h-40")}
              />
            ))}
      </List>
    </Section>
  )
}
