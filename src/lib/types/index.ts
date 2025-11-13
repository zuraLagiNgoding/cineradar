export type MediaType = "movie" | "tv"

export type BaseMedia = {
  adult: boolean
  backdrop_path: string
  genre_ids: number[]
  id: number
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string

  video: boolean
  vote_average: number
  vote_count: number
}

export type Movie = BaseMedia & {
  original_title: string
  release_date: string
  title: string
}

export type TVSeries = BaseMedia & {
  original_name: string
  name: string
  first_air_date: string
  origin_country: string[]
}

export type Media = Movie | TVSeries

export type Person = {
  adult: boolean
  gender: number
  id: number
  known_for_department: string
  name: string
  popularity: number
  profile_path: string
  known_for: Movie[]
}
