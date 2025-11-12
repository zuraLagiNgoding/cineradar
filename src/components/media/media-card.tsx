import type { Media } from "../../lib/types"

import { TMDB_CONFIG } from "../../constants/tmdb-config"
import { env } from "../../env"

interface MediaCardProps {
  media: Media
  isInWatchlist?: boolean
}

export default function MediaCard({ media, isInWatchlist }: MediaCardProps) {
  const posterUrl = media.poster_path
    ? `${env.VITE_APP_IMAGE_BASE_URL}/${TMDB_CONFIG.POSTER_SIZE}${media.poster_path}`
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
    <div className="group flex h-80 cursor-pointer flex-col">
      <div className="bg-card relative mb-3 flex-1 overflow-hidden rounded-lg">
        <img
          src={posterUrl || "/placeholder.svg"}
          alt={`${title} poster`}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
          draggable={false}
        />

        <div className="text-foreground absolute top-2 right-2 flex items-center gap-1 rounded-full bg-linear-to-r from-transparent to-red-700 px-3 py-1 text-sm font-bold">
          <span>★</span>
          {rating}
        </div>

        {isInWatchlist && (
          <div className="text-foreground absolute bottom-2 left-2 flex items-center gap-1 rounded-full bg-transparent px-2 py-1 text-xs font-semibold">
            <span>♥</span> Saved
          </div>
        )}
      </div>

      <div className="flex-none space-y-1">
        <h3 className="text-foreground group-hover:text-primary line-clamp-2 text-sm font-semibold transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground text-xs">{year}</p>
      </div>
    </div>
  )
}
