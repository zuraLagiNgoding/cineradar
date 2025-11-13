import { useEffect, useState } from "react"

import Autoplay from "embla-carousel-autoplay"
import useEmblaCarousel from "embla-carousel-react"

import Section from "../layout/section"
import Skeleton from "./skeleton"

export type CarouselSlide = {
  id: number
  title: string
  description?: string
  backdrop?: string
}

type CarouselProps = {
  slides: CarouselSlide[]
  loading?: boolean
}

export default function Carousel({ slides, loading = false }: CarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()])
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])

  useEffect(() => {
    if (!emblaApi) return

    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap())
    const onReInit = () => {
      setScrollSnaps(emblaApi.scrollSnapList())
      setSelectedIndex(emblaApi.selectedScrollSnap())
    }

    onReInit()

    emblaApi.on("select", onSelect)
    emblaApi.on("reInit", onReInit)

    return () => {
      emblaApi.off("select", onSelect)
      emblaApi.off("reInit", onReInit)
    }
  }, [emblaApi])

  return (
    <Section
      className="relative overflow-hidden rounded-4xl py-0 shadow-lg shadow-red-950/15"
      ref={emblaRef}
    >
      {loading ? (
        <Skeleton className="h-52 min-w-full flex-none sm:h-120" />
      ) : (
        <>
          {/* Slides */}
          <div className="flex">
            {slides.map((slide) => (
              <div
                key={slide.id}
                className="relative flex h-52 min-w-full flex-col justify-center text-white select-none sm:h-120"
              >
                {/* Backdrop */}
                {slide.backdrop && (
                  <img
                    src={slide.backdrop}
                    alt={slide.title}
                    className="absolute inset-0 size-full object-cover"
                  />
                )}

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/50 to-transparent" />

                {/* Text content */}
                <div className="relative z-10 px-4 py-8 sm:px-8 sm:py-0">
                  <h2 className="max-w-[80%] text-2xl leading-tight font-bold sm:max-w-[50%] sm:text-3xl lg:text-5xl">
                    {slide.title}
                  </h2>
                  <p className="mt-2 line-clamp-3 max-w-[90%] text-xs text-neutral-300 sm:line-clamp-2 sm:max-w-[50%] sm:text-sm 2xl:text-base">
                    {slide.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Dots */}
          <div className="absolute bottom-6 left-1/2 z-30 flex -translate-x-1/2 gap-1.5 sm:bottom-12 sm:gap-2">
            {scrollSnaps.map((_, index) => (
              <button
                aria-label={`Slide ${index + 1}`}
                key={index}
                onClick={() => emblaApi?.scrollTo(index)}
                className={`h-1.5 rounded-full transition-all duration-300 sm:h-2 ${
                  index === selectedIndex
                    ? "w-5 bg-red-500 sm:w-6"
                    : "w-1.5 bg-neutral-400/70 sm:w-2"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </Section>
  )
}
