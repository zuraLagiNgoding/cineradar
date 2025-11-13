import { useEffect, useState } from "react"

import { Image } from "lucide-react"

import { cn } from "../../lib/utils"

interface FallbackImageProps
  extends Omit<React.ImgHTMLAttributes<HTMLImageElement>, "src"> {
  src?: string | null
  fallbackIconSize?: number
  fallbackClassName?: string
}

export default function FallbackImage({
  src,
  alt = "Image",
  className,
  fallbackIconSize = 48,
  fallbackClassName,
  ...props
}: FallbackImageProps) {
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    if (src) {
      setHasError(false)
    }
  }, [src])

  if (!src || hasError) {
    return (
      <div
        className={cn(
          "flex items-center justify-center rounded-md border-2 border-dashed border-gray-300 bg-gray-100",
          className
        )}
        {...props}
      >
        <Image
          size={fallbackIconSize}
          className={cn("text-gray-400", fallbackClassName)}
        />
      </div>
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      className={cn("h-full w-full object-cover", className)}
      onError={() => setHasError(true)}
      {...props}
    />
  )
}
