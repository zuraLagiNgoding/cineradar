import { useQuery } from "@tanstack/react-query"

import List from "../components/layout/list"
import Section from "../components/layout/section"
import MediaCard from "../components/media/media-card"
import MediaCardSkeleton from "../components/media/skeletons/media-card-skeleton"

import { popularMediaQueryOptions } from "../services/query-options"

type FeaturedTVShowSectionProps = {
  layout?: "grid" | "list"
}

export default function FeaturedTVShowSection({
  layout = "grid",
}: FeaturedTVShowSectionProps) {
  // =========== Queries ===========
  const { data, isLoading } = useQuery(popularMediaQueryOptions("tv"))
  // =========== Queries ===========

  return (
    <Section title="Featured TV Show">
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
