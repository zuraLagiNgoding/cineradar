import type { MediaType } from "../lib/types"

export const QUERY_KEYS = {
  media: {
    topRated: (mediaType: MediaType, page: number = 1) =>
      [mediaType, "top-rated", page] as const,
    popular: (mediaType: MediaType, page: number = 1) =>
      [mediaType, "popular", page] as const,
    upcoming: (mediaType: MediaType, page: number = 1) =>
      [mediaType, "upcoming", page] as const,
    onTheAir: (mediaType: MediaType, page: number = 1) =>
      [mediaType, "on-the-air", page] as const,
    search: (mediaType: MediaType, query: string, page: number = 1) =>
      [mediaType, "search", query, page] as const,
    details: (mediaType: MediaType, id: number) =>
      [mediaType, "detail", id] as const,
    credits: (mediaType: MediaType, id: number) =>
      [mediaType, "credits", id] as const,
  },
  people: {
    popular: () => ["people", "popular"] as const,
  },
} as const
