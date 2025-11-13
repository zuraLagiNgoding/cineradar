import { useState } from "react"

import { useQuery } from "@tanstack/react-query"
import { Link, useSearch } from "@tanstack/react-router"

import { ChevronDown, Clapperboard, SearchIcon } from "lucide-react"

import { searchMediaQueryOptions } from "../../services/query-options"

import useClickOutside from "../../lib/hooks/use-click-outside"
import CompactMediaCard from "../media/compact-media-card"
import CompactMediaCardSkeleton from "../media/skeletons/compact-media-card-skeleton"
import { Button } from "../ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu"

function Search() {
  const { query } = useSearch({ strict: false })

  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState(query ?? "")

  const ref = useClickOutside<HTMLDivElement>(() => {
    setIsDropdownOpen(false)
  })

  // =========== Queries ===========
  const { data: moviesData, isLoading: moviesIsLoading } = useQuery(
    searchMediaQueryOptions("movie", searchQuery, 1)
  )

  const { data: tvData, isLoading: tvIsLoading } = useQuery(
    searchMediaQueryOptions("tv", searchQuery, 1)
  )
  // =========== Queries ===========

  return (
    <div ref={ref} className="relative z-50 w-80">
      <form action="/search" className="relative rounded-lg bg-neutral-800">
        <input
          type="search"
          placeholder="Search"
          className="h-8 w-full px-4 py-1"
          id="query"
          name="query"
          value={searchQuery}
          onInput={(e) => setSearchQuery(e.currentTarget.value)}
          onFocus={() => setIsDropdownOpen(true)}
        />
        <SearchIcon
          size={20}
          className="absolute top-1/2 right-3 -translate-y-1/2"
        />
      </form>

      {isDropdownOpen && (
        <div className="absolute -bottom-2 flex max-h-[50svh] w-full translate-y-full flex-col gap-4 overflow-scroll rounded-lg bg-neutral-800 px-4 py-2 shadow">
          {searchQuery.length < 1 ? (
            <p>No results found</p>
          ) : (
            <>
              <div className="flex flex-col gap-4">
                <h2 className="text-xl font-bold">Movies</h2>
                <div className="flex flex-col gap-2">
                  {moviesIsLoading
                    ? Array.from({ length: 5 }).map((_, index) => (
                        <CompactMediaCardSkeleton key={index} />
                      ))
                    : (moviesData?.results ?? [])
                        .slice(0, 5)
                        .map((movie) => (
                          <CompactMediaCard key={movie.id} media={movie} />
                        ))}
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <h2 className="text-xl font-bold">TV Show</h2>
                <div className="flex flex-col gap-2">
                  {tvIsLoading
                    ? Array.from({ length: 5 }).map((_, index) => (
                        <CompactMediaCardSkeleton key={index} />
                      ))
                    : (tvData?.results ?? [])
                        .slice(0, 5)
                        .map((tv) => (
                          <CompactMediaCard key={tv.id} media={tv} />
                        ))}
                </div>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  )
}

export default function Navbar() {
  return (
    <nav className="container mx-auto flex flex-col items-center justify-between gap-2 px-2 py-4 md:flex-row">
      <div className="relative mr-5 sm:mr-0">
        <Link to="/">
          <h1 className="text-2xl font-black tracking-tight lg:text-3xl">
            CINE<span className="text-red-700">RADAR</span>
          </h1>
        </Link>
        <Clapperboard
          className="absolute -right-7.5 bottom-1/2 translate-y-1/2 scale-x-[-1] rotate-20"
          size={28}
        />
      </div>
      <div className="flex flex-col items-center gap-2 sm:flex-row">
        <Search />
        <div className="flex">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" aria-label="Movie Nav Dropdown">
                Movie
                <ChevronDown className="size-3" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  <Link to="/movie/featured">Featured</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/movie/top-rated">Top Rated</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/movie/upcoming">Upcoming</Link>
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" aria-label="TV Show Nav Dropdown">
                TV Show
                <ChevronDown className="size-3" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  <Link to="/tv/featured">Featured</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/tv/on-the-air">On The Air</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/tv/top-rated">Top Rated</Link>
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  )
}
