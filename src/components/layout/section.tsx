import type { ComponentProps, Ref } from "react"

import { cn } from "../../lib/utils"

type SectionProps = ComponentProps<"main"> & {
  ref?: Ref<HTMLElement>
  title?: string
}

export default function Section({ className, title, ...props }: SectionProps) {
  return (
    <section className={cn("container py-6", className)} {...props}>
      {title && <h2 className="mb-4 text-2xl font-bold">{title}</h2>}
      {props.children}
    </section>
  )
}
