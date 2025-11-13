import { queryOptions } from "@tanstack/react-query"

import { QUERY_KEYS } from "../constants/query-keys"

import { getAllPopularMediaByType, getAllTopRatedMediaByType } from "."

export const topRatedMediaQueryOptions = (mediaType: "movie" | "tv") => {
  return queryOptions({
    queryKey: QUERY_KEYS.media.topRated(mediaType),
    queryFn: () => getAllTopRatedMediaByType(mediaType),
  })
}

export const popularMediaQueryOptions = (mediaType: "movie" | "tv") => {
  return queryOptions({
    queryKey: QUERY_KEYS.media.popular(mediaType),
    queryFn: () => getAllPopularMediaByType(mediaType),
  })
}
