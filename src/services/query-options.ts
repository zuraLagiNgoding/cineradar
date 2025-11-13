import { infiniteQueryOptions, queryOptions } from "@tanstack/react-query"

import { QUERY_KEYS } from "../constants/query-keys"

import {
  getAllPopularMediaByType,
  getAllPopularPeople,
  getAllTopRatedMediaByType,
  getAllUpcomingMovies,
} from "."

export const topRatedMediaQueryOptions = (mediaType: "movie" | "tv") => {
  return queryOptions({
    queryKey: QUERY_KEYS.media.topRated(mediaType),
    queryFn: () => getAllTopRatedMediaByType(mediaType),
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

export const popularMediaInfiniteQueryOptions = (mediaType: "movie" | "tv") => {
  return infiniteQueryOptions({
    queryKey: QUERY_KEYS.media.popular(mediaType),
    queryFn: async ({ pageParam = 1 }) => {
      const res = await getAllPopularMediaByType(mediaType, pageParam)
      return res
    },
    getNextPageParam: (lastPage) => {
      if (lastPage.page < lastPage.total_pages) {
        return lastPage.page + 1
      }
      return undefined
    },
    initialPageParam: 1,
  })
}

export const upcomingMovieQueryOptions = () => {
  return queryOptions({
    queryKey: QUERY_KEYS.media.upcoming("movie"),
    queryFn: getAllUpcomingMovies,
  })
}

export const popularPeopleQueryOptions = () => {
  return queryOptions({
    queryKey: QUERY_KEYS.people.popular(),
    queryFn: getAllPopularPeople,
  })
}
