import { useQuery } from "@tanstack/react-query"
import Section from "../components/layout/section"
import { topRatedMovieQueryOptions } from "../services/query-options"
import MediaCardSkeleton from "../components/media/skeletons/media-card-skeleton"
import MediaCard from "../components/media/media-card"

export default function TopRatedTVSeriesSection() {
  // =========== Queries ===========
  const { data, isLoading } = useQuery(topRatedMovieQueryOptions("tv"))
  // =========== Queries ===========

  return (
    <Section title="Top Rated TV Series">
      <div className="grid w-full grid-cols-7 gap-4">
        {isLoading
          ? Array.from({ length: 10 }).map((_, index) => (
              <MediaCardSkeleton key={index} />
            ))
          : data &&
            data.results?.map((media) => (
              <MediaCard key={media.id} media={media} />
            ))}
      </div>
    </Section>
  )
}
