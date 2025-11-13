import Skeleton from "../../ui/skeleton"

export default function CastCardSkeleton() {
  return (
    <div className="group flex h-full flex-none cursor-pointer snap-start flex-col items-center gap-3 select-none">
      <Skeleton className="aspect-square size-48 rounded-xl" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-3 w-1/2" />
    </div>
  )
}
