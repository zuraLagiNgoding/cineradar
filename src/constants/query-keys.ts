import type { MediaType } from "../lib/types"

export const QUERY_KEYS = {
  media: {
    topRated: (mediaType: MediaType) => [mediaType, "top-rated"] as const,
    popular: (mediaType: MediaType) => [mediaType, "popular"] as const,
  },
  people: {
    popular: () => ["people", "popular"] as const,
  },
} as const
