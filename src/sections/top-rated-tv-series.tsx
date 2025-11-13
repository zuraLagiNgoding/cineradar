import { useQuery } from "@tanstack/react-query"

import List from "../components/layout/list"
import Section from "../components/layout/section"
import MediaCard from "../components/media/media-card"
import MediaCardSkeleton from "../components/media/skeletons/media-card-skeleton"

import { topRatedMediaQueryOptions } from "../services/query-options"

type TopRatedTVShowSectionProps = {
  layout?: "grid" | "list"
}

export default function TopRatedTVShowSection({
  layout = "grid",
}: TopRatedTVShowSectionProps) {
  // =========== Queries ===========
  const { data, isLoading } = useQuery(topRatedMediaQueryOptions("tv"))
  // =========== Queries ===========

  return (
    <Section title="Top Rated TV Show">
      <List layout={layout}>
        {isLoading
          ? Array.from({ length: 10 }).map((_, index) => (
              <MediaCardSkeleton key={index} />
            ))
          : data &&
            data.results?.map((media) => (
              <MediaCard key={media.id} media={media} />
            ))}
      </List>
    </Section>
  )
}
