import { queryOptions } from "@tanstack/react-query"

import { QUERY_KEYS } from "../constants/query-keys"

import { getAllTopRatedMedia } from "."

export const topRatedMovieQueryOptions = (mediaType: "movie" | "tv") => {
  return queryOptions({
    queryKey: QUERY_KEYS.movie.topRated(mediaType),
    queryFn: () => getAllTopRatedMedia(mediaType),
  })
}
