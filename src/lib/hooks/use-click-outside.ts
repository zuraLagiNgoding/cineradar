import { useEffect, useRef } from "react"

import type { RefObject } from "react"

type ClickOutsideCallback = (event: MouseEvent | TouchEvent) => void

export default function useClickOutside<T extends HTMLElement>(
  callback: ClickOutsideCallback
): RefObject<T | null> {
  const ref = useRef<T>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent | TouchEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback(event)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    document.addEventListener("touchstart", handleClickOutside)

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
      document.removeEventListener("touchstart", handleClickOutside)
    }
  }, [callback])

  return ref
}
