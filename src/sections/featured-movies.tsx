import { useState } from "react"

import { useQuery } from "@tanstack/react-query"
import { useNavigate } from "@tanstack/react-router"

import List from "../components/layout/list"
import Section from "../components/layout/section"
import MediaCard from "../components/media/media-card"
import MediaCardSkeleton from "../components/media/skeletons/media-card-skeleton"
import { Button } from "../components/ui/button"
import { Pagination } from "../components/ui/pagination"

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
