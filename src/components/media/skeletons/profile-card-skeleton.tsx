import { cn } from "../../../lib/utils"
import Skeleton from "../../ui/skeleton"

interface ProfileCardSkeletonProps {
  rounded?: "full" | "md" | "lg"
  align?: "left" | "center"

  className?: string
}

export default function ProfileCardSkeleton({
  rounded = "full",
  align = "left",
  className,
}: ProfileCardSkeletonProps) {
  return (
    <div
      className={cn(
        "flex h-full flex-none cursor-pointer snap-start flex-col items-center gap-3 select-none",
        align === "center" && "items-center",
        className
      )}
    >
      <Skeleton
        className={cn("aspect-square size-48", {
          "rounded-full": rounded === "full",
          "rounded-xl": rounded === "lg",
          "rounded-md": rounded === "md",
        })}
      />

      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-3 w-1/2" />
    </div>
  )
}
