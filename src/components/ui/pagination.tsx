import { Button } from "./button"

type PaginationProps = {
  page: number
  totalPages: number
  isFetching?: boolean
  onPageChange: (page: number) => void
}

export function Pagination({
  page,
  totalPages,
  isFetching = false,
  onPageChange,
}: PaginationProps) {
  const handlePrev = () => {
    if (page > 1) onPageChange(page - 1)
  }

  const handleNext = () => {
    if (page < totalPages) onPageChange(page + 1)
  }

  return (
    <div className="mt-6 flex items-center justify-center gap-3">
      <Button
        variant="outline"
        disabled={page === 1 || isFetching}
        onClick={handlePrev}
      >
        Prev
      </Button>

      <span className="text-sm text-neutral-400">
        Page {page} of {totalPages}
      </span>

      <Button
        variant="outline"
        disabled={page === totalPages || isFetching}
        onClick={handleNext}
      >
        Next
      </Button>
    </div>
  )
}
