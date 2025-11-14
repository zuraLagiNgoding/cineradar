import { cn } from "../../lib/utils"
import FallbackImage from "../ui/fallback-image"

interface ProfileCardProps {
  imgSrc?: string
  title: string
  subtitle?: string
  badgeContent?: string
  className?: string
  titleClassName?: string
  subtitleClassName?: string

  rounded?: "full" | "md" | "lg"
}

export default function ProfileCard({
  imgSrc,
  title,
  subtitle,
  badgeContent,
  rounded = "full",
  className,
  titleClassName,
  subtitleClassName,
}: ProfileCardProps) {
  return (
    <div
      className={cn(
        "group flex h-full flex-none cursor-pointer snap-start flex-col text-left select-none",
        className
      )}
    >
      <div
        className={cn(
          "relative mb-3 aspect-square size-48 overflow-hidden bg-linear-to-tr from-transparent to-neutral-400/25",
          {
            "rounded-full": rounded === "full",
            "rounded-xl": rounded === "lg",
            "rounded-md": rounded === "md",
          }
        )}
      >
        <FallbackImage
          src={imgSrc ? imgSrc : null}
          alt={`${title} profile`}
          className="h-full w-full object-cover transition-all duration-300 group-hover:scale-110 group-hover:opacity-75"
          draggable={false}
          loading="lazy"
        />
      </div>
      <div className="flex items-center gap-2">
        <h4
          className={cn(
            "text-foreground group-hover:text-primary line-clamp-2 max-w-40 text-sm font-semibold transition-colors",
            titleClassName
          )}
        >
          {title}
        </h4>
        {badgeContent && (
          <div className="rounded-full bg-linear-to-r from-transparent to-red-700 px-3 py-0.5 text-xs">
            {badgeContent}
          </div>
        )}
      </div>
      {subtitle && (
        <p
          className={cn(
            "text-muted-foreground mt-1 text-xs",
            subtitleClassName
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
