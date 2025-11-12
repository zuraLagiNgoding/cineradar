import { useQuery } from "@tanstack/react-query"

import Section from "../components/layout/section"
import MediaCard from "../components/media/media-card"
import MediaCardSkeleton from "../components/media/skeletons/media-card"

import { topRatedMovieQueryOptions } from "../services/query-options"

export default function TopRatedMoviesSection() {
  // =========== Queries ===========
  const { data, isLoading } = useQuery(topRatedMovieQueryOptions())
  // =========== Queries ===========

  return (
    <Section title="Top Rated Movies">
      <div className="grid w-full grid-cols-7 gap-4">
        {isLoading
          ? Array.from({ length: 10 }).map((_, index) => (
              <MediaCardSkeleton key={index} />
            ))
          : data &&
            data.results?.map((movie) => (
              <MediaCard key={movie.id} media={movie} />
            ))}
      </div>
    </Section>
  )
}
