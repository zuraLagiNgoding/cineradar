import { useQuery } from "@tanstack/react-query"

import { TMDB_CONFIG } from "../constants/tmdb-config"

import List from "../components/layout/list"
import Section from "../components/layout/section"
import ProfileCard from "../components/media/people-card"
import ProfileCardSkeleton from "../components/media/skeletons/profile-card-skeleton"

import { popularPeopleQueryOptions } from "../services/query-options"

import { env } from "../env"

export default function MostPopularCelebritiesSection() {
  // =========== Queries ===========
  const { data, isLoading } = useQuery(popularPeopleQueryOptions())
  // =========== Queries ===========

  return (
    <Section title="Most Popular Celebrities">
      <List layout="list">
        {isLoading
          ? Array.from({ length: 10 }).map((_, index) => (
              <ProfileCardSkeleton key={index} />
            ))
          : data &&
            data.results?.map((person) => (
              <ProfileCard
                key={person.id}
                imgSrc={`${env.VITE_APP_IMAGE_BASE_URL}/${TMDB_CONFIG.PROFILE_SIZE}${person.profile_path}}`}
                title={person.name}
                subtitle={person.known_for_department}
                badgeContent={`${person.popularity}`}
              />
            ))}
      </List>
    </Section>
  )
}
