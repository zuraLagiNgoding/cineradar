import { queryOptions } from "@tanstack/react-query"

import { QUERY_KEYS } from "../constants/query-keys"

import type { MediaType } from "../lib/types"

import {
  getAllOnTheAirTVShows,
  getAllPopularMediaByType,
  getAllPopularPeople,
  getAllTopRatedMediaByType,
  getAllUpcomingMovies,
  getMediaCredits,
  getMediaDetails,
  searchMedia,
} from "."

export const topRatedMediaQueryOptions = (
  mediaType: "movie" | "tv",
  page: number = 1
) => {
  return queryOptions({
    queryKey: QUERY_KEYS.media.topRated(mediaType, page),
    queryFn: () => getAllTopRatedMediaByType(mediaType, page),
  })
}

export const popularMediaQueryOptions = (
  mediaType: "movie" | "tv",
  page: number = 1
) => {
  return queryOptions({
    queryKey: QUERY_KEYS.media.popular(mediaType, page),
    queryFn: () => getAllPopularMediaByType(mediaType, page),
  })
}

export const upcomingMovieQueryOptions = (page: number = 1) => {
  return queryOptions({
    queryKey: QUERY_KEYS.media.upcoming("movie", page),
    queryFn: () => getAllUpcomingMovies(page),
  })
}

export const onTheAirTVShowQueryOptions = (page: number = 1) => {
  return queryOptions({
    queryKey: QUERY_KEYS.media.onTheAir("tv", page),
    queryFn: () => getAllOnTheAirTVShows(page),
  })
}

export const popularPeopleQueryOptions = () => {
  return queryOptions({
    queryKey: QUERY_KEYS.people.popular(),
    queryFn: getAllPopularPeople,
  })
}

export const searchMediaQueryOptions = (
  mediaType: MediaType,
  query: string,
  page: number = 1
) => {
  return queryOptions({
    queryKey: QUERY_KEYS.media.search(mediaType, query, page),
    queryFn: () => searchMedia(mediaType, query, page),
  })
}

export const mediaDetailsQueryOptions = (mediaType: MediaType, id: number) => {
  return queryOptions({
    queryKey: QUERY_KEYS.media.details(mediaType, id),
    queryFn: () => getMediaDetails(mediaType, id),
  })
}

export const mediaCreditsQueryOptions = (mediaType: MediaType, id: number) => {
  return queryOptions({
    queryKey: QUERY_KEYS.media.credits(mediaType, id),
    queryFn: () => getMediaCredits(mediaType, id),
  })
}
