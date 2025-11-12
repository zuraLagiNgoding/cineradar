import Autoplay from "embla-carousel-autoplay"
import useEmblaCarousel from "embla-carousel-react"

import Section from "../layout/section"

export type CarouselProps = {
  slides: {
    id: number
    title: string
    description?: string
    color: string
  }[]
}

export default function Carousel({ slides }: CarouselProps) {
  const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()])

  return (
    <Section className="overflow-hidden" ref={emblaRef}>
      <div className="flex">
        {slides.map((slide) => (
          <div
            key={slide.id}
            className={`flex h-[300px] min-w-full items-center justify-center text-2xl font-semibold text-white ${slide.color}`}
          >
            {slide.title}
          </div>
        ))}
      </div>
    </Section>
  )
}
