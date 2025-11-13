import type { ComponentProps, Ref } from "react"

import { cn } from "../../lib/utils"

type SectionProps = ComponentProps<"main"> & {
  ref?: Ref<HTMLElement>
  title?: string
}

export default function Section({ className, title, ...props }: SectionProps) {
  return (
    <section
      className={cn(
        "container flex max-w-[23rem] flex-1 flex-col gap-3 px-2 py-6 sm:max-w-[40rem] md:max-w-[48rem] lg:max-w-[64rem] xl:max-w-[80rem] 2xl:max-w-[96rem]",
        className
      )}
      {...props}
    >
      {title && <h2 className="mb-4 text-2xl font-bold">{title}</h2>}
      {props.children}
    </section>
  )
}
