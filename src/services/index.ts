import type { Media, MediaType, Movie, Person, TV } from "../lib/types"
import type { CursorResponse } from "../lib/types/api"

import { api } from "../lib/api"

export const getAllTopRatedMediaByType = (
  mediaType: MediaType,
  page: number
) => {
  return api
    .get(`${mediaType}/top_rated`, { searchParams: { page } })
    .json<CursorResponse<Media>>()
}

export const getAllPopularMediaByType = (
  mediaType: MediaType,
  page: number
) => {
  return api
    .get(`${mediaType}/popular`, { searchParams: { page } })
    .json<CursorResponse<Media>>()
}

export const getMediaDetailsByType = (mediaType: MediaType, id: number) => {
  return api.get(`${mediaType}/${id}`).json<Media>()
}

export const getAllUpcomingMovies = (page: number) => {
  return api
    .get(`movie/upcoming`, { searchParams: { page } })
    .json<CursorResponse<Movie>>()
}

export const getAllOnTheAirTVShows = (page: number) => {
  return api
    .get(`tv/on_the_air`, { searchParams: { page } })
    .json<CursorResponse<TV>>()
}

export const getAllPopularPeople = () => {
  return api.get(`person/popular`).json<CursorResponse<Person>>()
}

export const addWatchlist = () => {
  return api.get(`person/popular`).json<CursorResponse<Person>>()
}

export const searchMedia = (
  mediaType: MediaType,
  query: string,
  page: number
) => {
  return api
    .get(`search/${mediaType}`, { searchParams: { query, page } })
    .json<CursorResponse<Media>>()
}
