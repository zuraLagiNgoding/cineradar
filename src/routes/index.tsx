import { useQuery } from "@tanstack/react-query"
import { createFileRoute } from "@tanstack/react-router"

import { TMDB_CONFIG } from "../constants/tmdb-config"

import Carousel from "../components/ui/carousel"

import { topRatedMediaQueryOptions } from "../services/query-options"

import type { CarouselSlide } from "../components/ui/carousel"

import { env } from "../env"
import FeaturedMoviesSection from "../sections/featured-movies"
import MostPopularCelebritiesSection from "../sections/most-popular-celebrities"
import TopRatedTVSeriesSection from "../sections/top-rated-tv-series"

export const Route = createFileRoute("/")({
  component: RouteComponent,
})

function RouteComponent() {
  // =========== Queries ===========
  const { data, isLoading } = useQuery(topRatedMediaQueryOptions("movie"))
  // =========== Queries ===========

  const topRatedMovieSlides: CarouselSlide[] = data
    ? data.results.map((movie) => ({
        id: movie.id,
        title: "title" in movie ? movie.title : "",
        description: movie.overview,
        backdrop: movie.backdrop_path
          ? `${env.VITE_APP_IMAGE_BASE_URL}/${TMDB_CONFIG.BACKDROP_SIZE}${movie.backdrop_path}`
          : "",
      }))
    : []

  return (
    <>
      <Carousel slides={topRatedMovieSlides} loading={isLoading} />

      <MostPopularCelebritiesSection />

      <FeaturedMoviesSection layout="list" />

      <TopRatedTVSeriesSection layout="list" />
    </>
  )
}
