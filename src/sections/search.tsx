import { useQuery } from "@tanstack/react-query"
import { useNavigate } from "@tanstack/react-router"

import List from "../components/layout/list"
import Section from "../components/layout/section"
import MediaCard from "../components/media/media-card"
import MediaCardSkeleton from "../components/media/skeletons/media-card-skeleton"
import { Button } from "../components/ui/button"

import { searchMediaQueryOptions } from "../services/query-options"

type SearchSectionProps = {
  query: string
}

export default function SearchSection({ query }: SearchSectionProps) {
  const navigate = useNavigate()

  // =========== Queries ===========
  const { data: moviesData, isLoading: moviesIsLoading } = useQuery(
    searchMediaQueryOptions("movie", query, 1)
  )

  const { data: tvData, isLoading: tvIsLoading } = useQuery(
    searchMediaQueryOptions("tv", query, 1)
  )
  // =========== Queries ===========

  return (
    <>
      <Section title="Movies">
        <List layout="grid">
          {moviesIsLoading
            ? Array.from({ length: 10 }).map((_, index) => (
                <MediaCardSkeleton key={index} />
              ))
            : moviesData &&
              moviesData.results?.map((media) => (
                <MediaCard key={media.id} media={media} />
              ))}
        </List>

        <div className="mt-2 flex justify-center">
          <Button
            className="w-sm"
            aria-label="See All"
            onClick={() =>
              navigate({ to: "/search/movies", search: { query } })
            }
          >
            See All
          </Button>
        </div>
      </Section>

      <Section title="TV Show">
        <List layout="grid">
          {tvIsLoading
            ? Array.from({ length: 10 }).map((_, index) => (
                <MediaCardSkeleton key={index} />
              ))
            : tvData &&
              tvData.results?.map((media) => (
                <MediaCard key={media.id} media={media} />
              ))}
        </List>

        <div className="mt-2 flex justify-center">
          <Button
            className="w-sm"
            aria-label="See All"
            onClick={() => navigate({ to: "/search/tv", search: { query } })}
          >
            See All
          </Button>
        </div>
      </Section>
    </>
  )
}
