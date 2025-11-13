import type { Person } from "../../lib/types"

import { TMDB_CONFIG } from "../../constants/tmdb-config"
import { env } from "../../env"

interface PeopleCardProps {
  person: Person
}

export default function PeopleCard({ person }: PeopleCardProps) {
  return (
    <div className="group flex h-full flex-none cursor-pointer snap-start flex-col text-left select-none">
      <div className="relative mb-3 aspect-square size-48 overflow-hidden rounded-full bg-linear-to-tr from-transparent to-neutral-400/25">
        <img
          src={
            person.profile_path
              ? `${env.VITE_APP_IMAGE_BASE_URL}/${TMDB_CONFIG.PROFILE_SIZE}${person.profile_path}`
              : "/placeholder.svg"
          }
          alt={`${person.name} profile`}
          className="h-full w-full rounded-full object-cover transition-all duration-300 group-hover:scale-110 group-hover:opacity-75"
          draggable={false}
          loading="lazy"
        />
      </div>
      <div className="flex items-center gap-2">
        <h4 className="text-foreground group-hover:text-primary line-clamp-2 text-sm font-semibold transition-colors">
          {person.name}
        </h4>
        <div className="rounded-full bg-linear-to-r from-transparent to-red-700 px-3 py-0.5 text-xs">
          {person.popularity}
        </div>
      </div>
      {person.known_for_department && (
        <p className="text-muted-foreground mt-1 text-xs">
          {person.known_for_department}
        </p>
      )}
    </div>
  )
}
