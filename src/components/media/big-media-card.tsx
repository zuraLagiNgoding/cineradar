import { Link } from "@tanstack/react-router"

import { Star } from "lucide-react"

import type { Media } from "../../lib/types"

import { TMDB_CONFIG } from "../../constants/tmdb-config"
import { env } from "../../env"
import { cn } from "../../lib/utils"

interface BigMediaCardProps {
  media: Media
  isInWatchlist?: boolean
  className?: string
}

export default function BigMediaCard({ media, className }: BigMediaCardProps) {
  const mediaType = "title" in media ? "movie" : "tv"

  const backdropUrl = media.backdrop_path
    ? `${env.VITE_APP_IMAGE_BASE_URL}/${TMDB_CONFIG.BACKDROP_SIZE}${media.backdrop_path}`
    : "/placeholder.svg"

  const rating = Math.round(media.vote_average * 10) / 10
  const date =
    "release_date" in media
      ? media.release_date
      : "first_air_date" in media
        ? media.first_air_date
        : "N/A"
  const year = date !== "N/A" ? new Date(date).getFullYear() : "N/A"
  const title =
    "title" in media ? media.title : "name" in media ? media.name : "Untitled"

  return (
    <Link
      to={`/${mediaType}/$id`}
      params={{
        id: media.id,
      }}
      className={cn(
        "group relative flex h-60 min-w-40 flex-none cursor-pointer snap-start flex-col select-none sm:min-w-52 lg:h-80",
        className
      )}
    >
      <div className="bg-card relative flex-1 overflow-hidden rounded-lg">
        <div className="size-full bg-linear-to-tr from-transparent to-neutral-400/25">
          <img
            src={backdropUrl || "/placeholder.svg"}
            alt={`${title} poster`}
            className="size-full object-cover transition-transform duration-300 group-hover:scale-110"
            loading="lazy"
            draggable={false}
          />
        </div>

        <div className="text-foreground absolute top-2 right-2 flex items-center gap-1 rounded-full bg-linear-to-r from-transparent to-red-700 px-3 py-1 text-sm font-bold">
          <Star className="size-4 fill-current" />
          {rating}
        </div>
      </div>

      <div className="absolute flex h-full w-full flex-none flex-col items-center justify-center bg-neutral-900/35 opacity-0 transition group-hover:opacity-100">
        <h3 className="text-foreground group-hover:text-primary line-clamp-1 text-lg font-semibold transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground">{year}</p>
      </div>
    </Link>
  )
}
