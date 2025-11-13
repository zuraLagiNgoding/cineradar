import { cn } from "../../lib/utils"

type ButtonVariant = "default" | "outline"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
}

export function Button({
  variant = "default",
  className,
  ...props
}: ButtonProps) {
  const variants: Record<ButtonVariant, string> = {
    default: "bg-neutral-500/30 hover:bg-red-200/15 text-red-400",
    outline:
      "border border-red-400 text-red-400 hover:bg-red-200/15 bg-transparent",
  }

  return (
    <button
      className={cn(
        "cursor-pointer rounded-full px-4 py-2 text-sm font-semibold tracking-wider transition-colors",
        variants[variant],
        className
      )}
      {...props}
    />
  )
}
