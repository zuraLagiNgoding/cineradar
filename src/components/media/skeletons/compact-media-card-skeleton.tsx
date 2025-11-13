import Skeleton from "../../ui/skeleton"

export default function CompactMediaCardSkeleton() {
  return (
    <div className="flex gap-2">
      <Skeleton className="h-20 w-14 rounded" />

      <div className="flex grow flex-col gap-1">
        <Skeleton className="h-4 w-2/3" />
        <Skeleton className="h-3 w-1/3" />
        <Skeleton className="h-3 w-1/4" />
      </div>
    </div>
  )
}
