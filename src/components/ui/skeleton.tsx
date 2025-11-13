import type { ComponentProps } from "react"

import { cn } from "../../lib/utils"

type SkeletonProps = ComponentProps<"div">

export default function Skeleton({ ...props }: SkeletonProps) {
  return (
    <div
      {...props}
      className={cn(
        "animate-pulse rounded-lg bg-linear-to-tr from-transparent to-neutral-400/25",
        props.className
      )}
    />
  )
}
