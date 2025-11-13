import { useState } from "react"

import { useQuery } from "@tanstack/react-query"

import List from "../components/layout/list"
import Section from "../components/layout/section"
import MediaCard from "../components/media/media-card"
import MediaCardSkeleton from "../components/media/skeletons/media-card-skeleton"
import { Pagination } from "../components/ui/pagination"

import { searchMediaQueryOptions } from "../services/query-options"

type SearchTVShowSectionProps = {
  query: string
}

export default function SearchTVShowSection({
  query,
}: SearchTVShowSectionProps) {
  const [page, setPage] = useState(1)

  // =========== Queries ===========
  const { data, isLoading, isFetching } = useQuery(
    searchMediaQueryOptions("tv", query, page)
  )
  // =========== Queries ===========

  const totalPages = data?.total_pages ?? 1

  return (
    <Section title="TV Show">
      <List layout="grid">
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
      <Pagination
        page={page}
        totalPages={totalPages}
        isFetching={isFetching}
        onPageChange={setPage}
      />
    </Section>
  )
}
