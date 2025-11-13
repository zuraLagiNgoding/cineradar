import { Link } from "@tanstack/react-router"

import { ChevronDown, Clapperboard } from "lucide-react"

import { Button } from "../ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu"

export default function Navbar() {
  return (
    <nav className="container flex items-center justify-between py-4">
      <div className="relative">
        <Link to="/">
          <h1 className="text-3xl font-black tracking-tight">
            CINE<span className="text-red-700">RADAR</span>
          </h1>
        </Link>
        <Clapperboard
          className="absolute -right-7.5 bottom-1/2 translate-y-1/2 scale-x-[-1] rotate-20"
          size={28}
        />
      </div>
      <div className="flex items-center gap-2">
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
    </nav>
  )
}
