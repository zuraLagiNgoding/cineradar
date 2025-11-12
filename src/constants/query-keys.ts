import type { MediaType } from "../lib/types"

export const QUERY_KEYS = {
  movie: {
    topRated: (mediaType: MediaType) =>
      ["movies", "top-rated", mediaType] as const,
  },
} as const
