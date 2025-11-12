import { Bookmark, Clapperboard, Sun } from "lucide-react"

export default function Navbar() {
  return (
    <nav className="container flex items-center justify-between py-4">
      <div className="relative">
        <h1 className="text-3xl font-black tracking-tight">
          CINE<span className="text-red-700">RADAR</span>
        </h1>
        <Clapperboard
          className="absolute -right-7.5 bottom-1/2 translate-y-1/2 scale-x-[-1] rotate-20"
          size={28}
        />
      </div>
      <div className="flex items-center gap-4">
        <Bookmark size={20} />
        <Sun size={20} />
      </div>
    </nav>
  )
}
