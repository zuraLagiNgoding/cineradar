export const TMDB_CONFIG = {
  POSTER_SIZE: "w342",
  BACKDROP_SIZE: "w1280",
  PROFILE_SIZE: "w185",
} as const

export const TMDB_ENDPOINTS = {
  TRENDING_MOVIES: "/trending/movie/week",
  POPULAR_MOVIES: "/movie/popular",
  TOP_RATED_MOVIES: "/movie/top_rated",
  UPCOMING_MOVIES: "/movie/upcoming",
  POPULAR_TV: "/tv/popular",
  TOP_RATED_TV: "/tv/top_rated",
  ON_AIR_TV: "/tv/on_the_air",
  AIRING_TODAY_TV: "/tv/airing_today",
  POPULAR_PEOPLE: "/person/popular",
  SEARCH_MULTI: "/search/multi",
} as const
