import type { Media, MediaType } from "../lib/types"
import type { CursorResponse } from "../lib/types/api"

import { api } from "../lib/api"

export const getAllTopRatedMedia = (mediaType: MediaType) => {
  return api.get(`${mediaType}/top_rated`).json<CursorResponse<Media>>()
}
