import Skeleton from "../../ui/skeleton"

export default function MediaCardSkeleton() {
  return (
    <div className="group flex h-80 min-w-52 flex-col">
      <Skeleton className="mb-3 flex-1" />

      <div className="flex-none space-y-1">
        <Skeleton className="h-4 w-1/2" />
        <Skeleton className="h-4 w-12" />
      </div>
    </div>
  )
}
