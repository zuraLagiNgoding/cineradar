export type CursorResponse<T> = {
  page: number
  total_pages: number
  total_results: number
  results: T[]
}
