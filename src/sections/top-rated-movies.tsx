import Section from "../components/layout/section"

export default function TopRatedMoviesSection() {
  return (
    <Section title="Top Rated Movies">
      <div className="grid w-full grid-cols-7 gap-4">
        {Array.from({ length: 12 }, (_, index) => (
          <div key={index} className="h-72 w-full rounded-xl bg-neutral-200" />
        ))}
      </div>
    </Section>
  )
}
