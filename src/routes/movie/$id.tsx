import { useQuery } from "@tanstack/react-query"
import { createFileRoute } from "@tanstack/react-router"

import { Star } from "lucide-react"

import {
  mediaCreditsQueryOptions,
  mediaDetailsQueryOptions,
} from "../../services/query-options"

import type { MovieDetails } from "../../lib/types"

import List from "../../components/layout/list"
import Section from "../../components/layout/section"
import CastCard from "../../components/media/cast-card"
import CrewCard from "../../components/media/crew-card"
import CastCardSkeleton from "../../components/media/skeletons/cast-card-skeleton"
import CrewCardSkeleton from "../../components/media/skeletons/crew-card-skeleton"
import FallbackImage from "../../components/ui/fallback-image"
import Skeleton from "../../components/ui/skeleton"
import { TMDB_CONFIG } from "../../constants/tmdb-config"
import { env } from "../../env"

export const Route = createFileRoute("/movie/$id")({
  params: {
    parse: ({ id }) => {
      return {
        id: Number(id),
      }
    },
  },
  component: RouteComponent,
})

function RouteComponent() {
  const { id } = Route.useParams()

  // =========== Queries ===========
  const { data: detailsData, isLoading: isLoadingDetails } = useQuery(
    mediaDetailsQueryOptions("movie", id)
  )

  const { data: creditsData, isLoading: isLoadingCredits } = useQuery(
    mediaCreditsQueryOptions("movie", id)
  )
  // =========== Queries ===========

  const movie = detailsData ? (detailsData as MovieDetails) : null

  const backdropUrl = movie?.backdrop_path
    ? `${env.VITE_APP_IMAGE_BASE_URL}/${TMDB_CONFIG.BACKDROP_SIZE}${movie?.backdrop_path}`
    : null

  const posterUrl = movie?.poster_path
    ? `${env.VITE_APP_IMAGE_BASE_URL}/${TMDB_CONFIG.POSTER_SIZE}${movie?.poster_path}`
    : null

  const rating = movie ? Math.round(movie.vote_average * 10) / 10 : 0

  const date = movie ? movie.release_date : "N/A"
  const year = date !== "N/A" ? new Date(date).getFullYear() : "N/A"

  return (
    <>
      {isLoadingDetails || !movie ? (
        <Skeleton className="h-80 w-svw" />
      ) : (
        <FallbackImage
          src={backdropUrl}
          alt={`${movie.title} poster`}
          className="h-80 w-svw object-cover object-center"
          style={{
            maskImage:
              "linear-gradient(to bottom, black 30%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, black 30%, transparent 100%)",
          }}
          loading="lazy"
          draggable={false}
        />
      )}

      <Section className="z-10 -mt-32 flex-row gap-5 pb-0">
        {isLoadingDetails || !movie ? (
          <>
            <Skeleton className="h-48 w-32 rounded-lg" />
            <div className="flex flex-col gap-3">
              <Skeleton className="h-8 w-48" />
              <div className="flex items-center gap-4">
                <Skeleton className="h-8 w-32 rounded-full" />
                <Skeleton className="h-6 w-16" />
                <Skeleton className="h-6 w-16" />
              </div>
              <div className="flex flex-wrap gap-3">
                {Array.from({ length: 3 }).map((_, index) => (
                  <Skeleton key={index} className="h-6 w-20 rounded-full" />
                ))}
              </div>
            </div>
          </>
        ) : (
          <>
            <FallbackImage
              src={posterUrl}
              alt={`${movie.title} poster`}
              className="h-48 w-auto rounded-lg object-cover"
              loading="lazy"
              draggable={false}
            />
            <div className="flex flex-col gap-3">
              <h2 className="text-4xl font-bold">{movie.title}</h2>
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center gap-2.5 rounded-full bg-linear-to-r from-red-500 to-red-700 px-3.5 py-2">
                  <Star
                    size={16}
                    className="fill-yellow-400 stroke-yellow-400"
                  />
                  <span className="text-lg font-bold">{rating}/10</span>
                </div>
                <p className="text-muted-foreground">{movie.runtime} mins</p>
                <p className="text-muted-foreground">{year}</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {movie.genres.map((genre) => (
                  <div
                    key={genre.id}
                    className="flex items-center justify-center rounded-full bg-neutral-700 px-3 py-1"
                  >
                    {genre.name}
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </Section>

      <Section title="Overview" className="gap-0 pb-0">
        {isLoadingDetails || !movie ? (
          <Skeleton className="h-4 w-full" />
        ) : (
          <p className="text-muted-foreground text-lg">{movie.overview}</p>
        )}
      </Section>

      <Section title="Cast" className="gap-0 pb-0">
        <List layout="list">
          {isLoadingCredits
            ? Array.from({ length: 10 }).map((_, index) => (
                <CastCardSkeleton key={index} />
              ))
            : creditsData &&
              creditsData.cast?.map((cast) => (
                <CastCard key={cast.id} cast={cast} />
              ))}
        </List>
      </Section>

      <Section title="Crew" className="gap-0">
        <List layout="list">
          {isLoadingCredits
            ? Array.from({ length: 10 }).map((_, index) => (
                <CrewCardSkeleton key={index} />
              ))
            : creditsData &&
              creditsData.crew?.map((crew, index) => (
                // There is a problem with crew IDs being non-unique in some cases
                <CrewCard key={index} crew={crew} />
              ))}
        </List>
      </Section>
    </>
  )
}
