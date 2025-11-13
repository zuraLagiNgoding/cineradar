import { Link } from "@tanstack/react-router"

import { Star } from "lucide-react"

import type { Media } from "../../lib/types"

import { TMDB_CONFIG } from "../../constants/tmdb-config"
import { env } from "../../env"
import { cn } from "../../lib/utils"
import FallbackImage from "../ui/fallback-image"

interface MediaCardProps {
  media: Media
  isInWatchlist?: boolean
  className?: string
}

export default function MediaCard({ media, className }: MediaCardProps) {
  const mediaType = "title" in media ? "movie" : "tv"

  const posterUrl = media.poster_path
    ? `${env.VITE_APP_IMAGE_BASE_URL}/${TMDB_CONFIG.POSTER_SIZE}${media.poster_path}`
    : null

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
        "group flex h-70 max-w-52 flex-none cursor-pointer snap-start flex-col select-none sm:h-80 sm:min-w-40",
        className
      )}
    >
      <div className="bg-card relative mb-3 flex-1 overflow-hidden rounded-lg">
        <div className="size-full bg-linear-to-tr from-transparent to-neutral-400/25">
          <FallbackImage
            src={posterUrl}
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

      <div className="flex-none space-y-1">
        <h3 className="text-foreground group-hover:text-primary line-clamp-1 text-sm font-semibold transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground text-xs">{year}</p>
      </div>
    </Link>
  )
}
