import type { ComponentProps } from "react"

import { useDraggableScroll } from "../../lib/hooks/use-draggable-scroll"
import { cn } from "../../lib/utils"

interface ListProps extends ComponentProps<"div"> {
  layout: "grid" | "list"
}

export default function List({ layout, ...props }: ListProps) {
  const draggableScroll = useDraggableScroll()

  return (
    <div
      {...props}
      ref={draggableScroll.ref}
      onPointerDown={draggableScroll.onPointerDown}
      onPointerMove={draggableScroll.onPointerMove}
      onPointerUp={draggableScroll.onPointerUp}
      className={cn(
        "pb-4",
        layout === "grid"
          ? "grid w-full grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7"
          : "flex w-full gap-2 overflow-x-auto scroll-smooth",
        props.className
      )}
    ></div>
  )
}
