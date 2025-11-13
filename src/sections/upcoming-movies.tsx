import { useState } from "react"

import { useQuery } from "@tanstack/react-query"
import { useNavigate } from "@tanstack/react-router"

import List from "../components/layout/list"
import Section from "../components/layout/section"
import MediaCard from "../components/media/media-card"
import MediaCardSkeleton from "../components/media/skeletons/media-card-skeleton"
import { Button } from "../components/ui/button"
import { Pagination } from "../components/ui/pagination"

import { upcomingMovieQueryOptions } from "../services/query-options"

import { cn } from "../lib/utils"

type UpcomingMoviesSectionProps = {
  layout?: "grid" | "list"
  navigation?: boolean
  pagination?: boolean
}

export default function UpcomingMoviesSection({
  layout = "grid",
  navigation = false,
  pagination = false,
}: UpcomingMoviesSectionProps) {
  const navigate = useNavigate()
  const [page, setPage] = useState(1)

  // =========== Queries ===========
  const { data, isLoading, isFetching } = useQuery(
    upcomingMovieQueryOptions(page)
  )
  // =========== Queries ===========

  const totalPages = data?.total_pages ?? 1

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
            aria-label="See All Upcoming Movies"
            onClick={() => navigate({ to: "/movie/upcoming" })}
          >
            See All
          </Button>
        </div>
      )}
    </Section>
  )
}
