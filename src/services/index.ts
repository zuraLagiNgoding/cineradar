import type { Media, MediaType, Movie, Person } from "../lib/types"
import type { CursorResponse } from "../lib/types/api"

import { api } from "../lib/api"

export const getAllTopRatedMediaByType = (mediaType: MediaType) => {
  return api.get(`${mediaType}/top_rated`).json<CursorResponse<Media>>()
}

export const getAllPopularMediaByType = (mediaType: MediaType) => {
  return api.get(`${mediaType}/popular`).json<CursorResponse<Media>>()
}

export const getMediaDetailsByType = (mediaType: MediaType, id: number) => {
  return api.get(`${mediaType}/${id}`).json<Media>()
}

export const getAllUpcomingMovies = () => {
  return api.get(`movie/upcoming`).json<CursorResponse<Movie>>()
}

export const getAllPopularPeople = () => {
  return api.get(`person/popular`).json<CursorResponse<Person>>()
}
