import { useRef } from "react"

export function useDraggableScroll() {
  const ref = useRef<HTMLDivElement>(null)
  const pos = useRef<{ x: number; scroll: number } | null>(null)

  const onPointerDown = (e: React.PointerEvent) => {
    if (ref.current && e.target === ref.current) {
      ref.current.setPointerCapture(e.pointerId)
    }
    pos.current = {
      x: e.clientX,
      scroll: ref.current?.scrollLeft || 0,
    }
  }

  const onPointerMove = (e: React.PointerEvent) => {
    if (!pos.current || !ref.current) return
    const dx = e.clientX - pos.current.x
    ref.current.scrollLeft = pos.current.scroll - dx
  }

  const onPointerUp = () => {
    pos.current = null
  }

  return { ref, onPointerDown, onPointerMove, onPointerUp }
}
