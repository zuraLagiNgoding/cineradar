export default function MediaCardSkeleton() {
  return (
    <div className="group flex h-[20rem] flex-col">
      <div className="relative mb-3 flex-1 rounded-lg bg-neutral-400/25" />

      <div className="flex-none space-y-1">
        <div className="h-4 w-1/2 rounded-md bg-neutral-400/25" />
        <div className="h-4 w-12 rounded-md bg-neutral-400/25" />
      </div>
    </div>
  )
}
