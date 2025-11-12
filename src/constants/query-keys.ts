export const QUERY_KEYS = {
  movie: {
    topRated: () => ["movies", "top-rated"] as const,
  },
} as const
