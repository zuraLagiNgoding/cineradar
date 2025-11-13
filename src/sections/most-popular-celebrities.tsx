import { useQuery } from "@tanstack/react-query"

import Section from "../components/layout/section"
import PeopleCard from "../components/media/people-card"
import MediaCardSkeleton from "../components/media/skeletons/media-card-skeleton"

import { popularPeopleQueryOptions } from "../services/query-options"

import { cn, getMediaLayout } from "../lib/utils"

export default function MostPopularCelebritiesSection() {
  // =========== Queries ===========
  const { data, isLoading } = useQuery(popularPeopleQueryOptions())
  // =========== Queries ===========

  return (
    <Section title="Most Popular Celebrities">
      <div className={cn("pb-4", getMediaLayout("list"))}>
        {isLoading
          ? Array.from({ length: 10 }).map((_, index) => (
              <MediaCardSkeleton key={index} />
            ))
          : data &&
            data.results?.map((person) => (
              <PeopleCard key={person.id} person={person} />
            ))}
      </div>
    </Section>
  )
}
