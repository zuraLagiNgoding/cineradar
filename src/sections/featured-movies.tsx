import { useState } from "react"

import { useQuery } from "@tanstack/react-query"
import { useNavigate } from "@tanstack/react-router"

import List from "../components/layout/list"
import Section from "../components/layout/section"
import BigMediaCard from "../components/media/big-media-card"
import MediaCard from "../components/media/media-card"
import MediaCardSkeleton from "../components/media/skeletons/media-card-skeleton"
import { Button } from "../components/ui/button"
import { Pagination } from "../components/ui/pagination"
import Skeleton from "../components/ui/skeleton"

import { popularMediaQueryOptions } from "../services/query-options"

type FeaturedMoviesSectionProps = {
  layout?: "grid" | "list"
  navigation?: boolean
  pagination?: boolean
}

export default function FeaturedMoviesSection({
  layout = "grid",
  navigation = false,
  pagination = false,
}: FeaturedMoviesSectionProps) {
  const navigate = useNavigate()
  const [page, setPage] = useState(1)

  // =========== Queries ===========
  const { data, isLoading, isFetching } = useQuery(
    popularMediaQueryOptions("movie", page)
  )
  // =========== Queries ===========

  const totalPages = data?.total_pages ?? 1

  return (
    <Section title="Featured Movies">
      <div className="grid gap-4 sm:grid-cols-2">
        {isLoading
          ? Array.from({ length: 2 }).map((_, index) => (
              <Skeleton className="h-60 w-full flex-1 lg:h-80" key={index} />
            ))
          : data &&
            data.results
              ?.slice(0, 2)
              .map((media) => (
                <BigMediaCard key={media.id} media={media} className="w-full" />
              ))}
      </div>

      <List layout={layout}>
        {isLoading
          ? Array.from({ length: 10 }).map((_, index) => (
              <MediaCardSkeleton key={index} />
            ))
          : data &&
            data.results
              ?.slice(2)
              .map((media) => <MediaCard key={media.id} media={media} />)}
      </List>

      {/* Pagination Controls */}
      {pagination && (
        <Pagination
          page={page}
          totalPages={totalPages}
          isFetching={isFetching}
          onPageChange={setPage}
        />
      )}

      {navigation && (
        <div className="mt-2 flex justify-center">
          <Button
            className="w-sm"
            aria-label="See All Featured Movies"
            onClick={() => navigate({ to: "/movie/featured" })}
          >
            See All
          </Button>
        </div>
      )}
    </Section>
  )
}
