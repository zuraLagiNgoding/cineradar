import { useState } from "react"

import { useQuery } from "@tanstack/react-query"
import { useNavigate } from "@tanstack/react-router"

import List from "../components/layout/list"
import Section from "../components/layout/section"
import MediaCard from "../components/media/media-card"
import MediaCardSkeleton from "../components/media/skeletons/media-card-skeleton"
import { Button } from "../components/ui/button"
import { Pagination } from "../components/ui/pagination"

import { topRatedMediaQueryOptions } from "../services/query-options"

type TopRatedTVShowSectionProps = {
  layout?: "grid" | "list"
  navigation?: boolean
  pagination?: boolean
}

export default function TopRatedTVShowSection({
  layout = "grid",
  navigation = false,
  pagination = false,
}: TopRatedTVShowSectionProps) {
  const navigate = useNavigate()
  const [page, setPage] = useState(1)

  // =========== Queries ===========
  const { data, isLoading, isFetching } = useQuery(
    topRatedMediaQueryOptions("tv", page)
  )
  // =========== Queries ===========

  const totalPages = data?.total_pages ?? 1

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
            aria-label="See All Top Rated TV Shows"
            onClick={() => navigate({ to: "/tv/top-rated" })}
          >
            See All
          </Button>
        </div>
      )}
    </Section>
  )
}
