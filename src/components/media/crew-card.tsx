import type { Crew } from "../../lib/types"

import { TMDB_CONFIG } from "../../constants/tmdb-config"
import { env } from "../../env"

interface CrewCardProps {
  crew: Crew
}

export default function CrewCard({ crew }: CrewCardProps) {
  return (
    <div className="group flex h-full flex-none cursor-pointer snap-start flex-col gap-2 text-left select-none">
      <div className="relative aspect-square size-48 overflow-hidden rounded-xl bg-linear-to-tr from-transparent to-neutral-400/25">
        <img
          src={
            crew.profile_path
              ? `${env.VITE_APP_IMAGE_BASE_URL}/${TMDB_CONFIG.PROFILE_SIZE}${crew.profile_path}`
              : "/placeholder.svg"
          }
          alt={`${crew.name} profile`}
          className="h-full w-full object-cover transition-all duration-300 group-hover:scale-110 group-hover:opacity-75"
          draggable={false}
          loading="lazy"
        />
      </div>
      <div className="flex flex-col items-center">
        <h4 className="text-foreground line-clamp-2 text-lg font-bold">
          {crew.name}
        </h4>
        <p className="text-muted-foreground text-sm">{crew.job}</p>
      </div>
    </div>
  )
}
