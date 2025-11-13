import { useQuery } from "@tanstack/react-query"

import List from "../components/layout/list"
import Section from "../components/layout/section"
import PeopleCard from "../components/media/people-card"
import PeopleCardSkeleton from "../components/media/skeletons/people-card-skeleton"

import { popularPeopleQueryOptions } from "../services/query-options"

export default function MostPopularCelebritiesSection() {
  // =========== Queries ===========
  const { data, isLoading } = useQuery(popularPeopleQueryOptions())
  // =========== Queries ===========

  return (
    <Section title="Most Popular Celebrities">
      <List layout="list">
        {isLoading
          ? Array.from({ length: 10 }).map((_, index) => (
              <PeopleCardSkeleton key={index} />
            ))
          : data &&
            data.results?.map((person) => (
              <PeopleCard key={person.id} person={person} />
            ))}
      </List>
    </Section>
  )
}
