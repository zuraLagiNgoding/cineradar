import Skeleton from "../../ui/skeleton"

export default function MediaCardSkeleton() {
  return (
    <div className="flex h-69 w-full min-w-44 flex-col sm:h-80 sm:min-w-52">
      <Skeleton className="mb-3 flex-1" />

      <div className="flex-none space-y-1">
        <Skeleton className="h-4 w-1/2" />
        <Skeleton className="h-4 w-12" />
      </div>
    </div>
  )
}
