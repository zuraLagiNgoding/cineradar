import Skeleton from "../../ui/skeleton"

export default function PeopleCardSkeleton() {
  return (
    <div className="group flex h-full flex-none cursor-pointer snap-start flex-col gap-3 select-none">
      <Skeleton className="aspect-square size-48 rounded-full" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-3 w-1/2" />
    </div>
  )
}
