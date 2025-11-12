import { useQuery } from "@tanstack/react-query"

import Section from "../components/layout/section"
import MediaCard from "../components/media/media-card"

import { topRatedMovieQueryOptions } from "../services/query-options"

export default function TopRatedMoviesSection() {
  // =========== Queries ===========
  const { data } = useQuery(topRatedMovieQueryOptions())
  // =========== Queries ===========

  return (
    <Section title="Top Rated Movies">
      <div className="grid w-full grid-cols-7 gap-4">
        {data &&
          data.results?.map((movie) => (
            <MediaCard key={movie.id} media={movie} />
          ))}
      </div>
    </Section>
  )
}
