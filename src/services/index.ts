import type { Movie } from "../lib/types"
import type { CursorResponse } from "../lib/types/api"

import { api } from "../lib/api"

export const getAllTopRatedMovies = () => {
  return api.get("movie/top_rated").json<CursorResponse<Movie>>()
}
