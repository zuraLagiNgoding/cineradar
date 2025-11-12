import { queryOptions } from "@tanstack/react-query"

import { QUERY_KEYS } from "../constants/query-keys"

import { getAllTopRatedMovies } from "."

export const topRatedMovieQueryOptions = () => {
  return queryOptions({
    queryKey: QUERY_KEYS.movie.topRated(),
    queryFn: getAllTopRatedMovies,
  })
}
