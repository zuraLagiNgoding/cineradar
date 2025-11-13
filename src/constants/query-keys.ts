import type { MediaType } from "../lib/types"

export const QUERY_KEYS = {
  media: {
    topRated: (mediaType: MediaType) => [mediaType, "top-rated"] as const,
    popular: (mediaType: MediaType, page: number = 1) =>
      [mediaType, "popular", page] as const,
    upcoming: (mediaType: MediaType) => [mediaType, "upcoming"] as const,
  },
  people: {
    popular: () => ["people", "popular"] as const,
  },
} as const
