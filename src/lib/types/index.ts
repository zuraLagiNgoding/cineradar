/* GENRE */

export type Genre = {
  id: number
  name: string
}

/* COMPANY */

export type Company = {
  id: number
  logo_path: string | null
  name: string
  origin_country: string
}

/* COUNTRY */

export type ProductionCountry = {
  iso_3166_1: string
  name: string
}

/* LANGUAGE */

export type Language = {
  iso_639_1: string
  english_name: string
  name: string
}

/* CREDITS */

export type Cast = {
  adult: boolean
  gender: number
  id: number
  known_for_department: string
  name: string
  original_name: string
  popularity: number
  profile_path: string | null
  cast_id: number
  character: string
  credit_id: string
  order: number
}

export type Crew = {
  adult: boolean
  gender: number
  id: number
  known_for_department: string
  name: string
  original_name: string
  popularity: number
  profile_path: string | null
  credit_id: string
  department: string
  job: string
}

export type Credits = {
  id: number
  cast: Cast[]
  crew: Crew[]
}

/* MOVIE */

export type Movie = {
  adult: boolean
  backdrop_path: string
  genre_ids: Genre["id"][]
  id: number
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  release_date: string
  title: string
  video: boolean
  vote_average: number
  vote_count: number
}

export type MovieDetails = Omit<Movie, "genre_ids"> & {
  belongs_to_collection: string
  budget: number
  genres: Genre[]
  homepage: string
  imdb_id: string
  production_companies: Company[]
  production_countries: ProductionCountry[]
  revenue: number
  runtime: number
  spoken_languages: Language[]
  status: string
  tagline: string
}

/* PERSON */

export type Person = {
  adult: boolean
  gender: number
  id: number
  known_for: (Movie | TV)[]
  known_for_department: string
  name: string
  popularity: number
  profile_path: string
}

export type PersonDetails = Person & {
  also_known_as: string[]
  biography: string
  birthday: string
  deathday: string | null
  homepage: string | null
  imdb_id: string
  place_of_birth: string
}

/* CREATOR */

export type Creator = {
  id: number
  credit_id: string
  name: string
  gender: number
  profile_path: string
}

/* NETWORK */

export type Network = {
  id: number
  logo_path: string | null
  name: string
  origin_country: string
}

/* TV EPISODE */

export type TVEpisode = {
  id: number
  name: string
  overview: string
  vote_average: number
  vote_count: number
  air_date: string
  episode_number: number
  production_code: string
  runtime: number
  season_number: number
  show_id: number
  still_path: string
}

/* TV SEASON */

export type TVSeason = {
  air_date: string
  episode_count: number
  id: number
  name: string
  overview: string
  poster_path: string
  season_number: number
  vote_average: number
}

/* TV */

export type TV = {
  backdrop_path: string
  first_air_date: string
  genre_ids: number[]
  id: number
  name: string
  origin_country: string[]
  original_language: string
  original_name: string
  overview: string
  popularity: number
  poster_path: string
  vote_average: number
  vote_count: number
}

export type TVDetails = Omit<TV, "genre_ids"> & {
  adult: boolean
  created_by: Creator[]
  episode_run_time: number[]
  genres: Genre[]
  homepage: string
  in_production: boolean
  languages: string[]
  last_air_date: string
  last_episode_to_air: TVEpisode
  networks: Network[]
  number_of_episodes: number
  number_of_seasons: number
  production_companies: Company[]
  production_countries: ProductionCountry[]
  seasons: TVSeason[]
  spoken_languages: Language[]
  status: string
  tagline: string
  type: string
}

/* OTHERS */

export type Media = Movie | TV

export type MediaDetails = MovieDetails | TVDetails

export type MediaType = "movie" | "tv"
