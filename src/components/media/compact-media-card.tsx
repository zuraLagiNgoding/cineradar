import { Link } from "@tanstack/react-router"

import { Star } from "lucide-react"

import type { Media } from "../../lib/types"

import { TMDB_CONFIG } from "../../constants/tmdb-config"
import { env } from "../../env"
import { cn } from "../../lib/utils"
import FallbackImage from "../ui/fallback-image"

interface CompactMediaCardProps {
  media: Media
  className?: string
}

export default function CompactMediaCard({
  media,
  className,
}: CompactMediaCardProps) {
  const mediaType = "title" in media ? "movie" : "tv"

  const posterUrl = media.poster_path
    ? `${env.VITE_APP_IMAGE_BASE_URL}/${TMDB_CONFIG.BACKDROP_SIZE}${media.poster_path}`
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
      className={cn("group flex gap-2", className)}
    >
      <FallbackImage
        src={posterUrl}
        alt={`${title} poster`}
        className="h-20 w-auto rounded object-cover object-center transition-transform duration-300 group-hover:scale-110"
        loading="lazy"
        draggable={false}
      />
      <div className="flex flex-col">
        <h3 className="line-clamp-1 text-lg font-bold break-all">{title}</h3>
        <div className="flex items-center gap-1 text-sm text-red-700">
          <Star className="size-4" />
          <span className="font-semibold">{rating}</span>
        </div>
        <p className="text-sm">{year}</p>
      </div>
    </Link>
  )
}
