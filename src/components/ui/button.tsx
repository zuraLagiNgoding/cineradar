import { cn } from "../../lib/utils"

type ButtonVariant = "default" | "outline" | "ghost"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
}

export function Button({
  variant = "default",
  className,
  ...props
}: ButtonProps) {
  const variants: Record<ButtonVariant, string> = {
    default:
      "bg-neutral-500/30 hover:bg-red-200/15 text-red-400 disabled:bg-neutral-700/40 disabled:text-neutral-500 disabled:cursor-not-allowed",
    outline:
      "border border-red-400 text-red-400 hover:bg-red-200/15 bg-transparent disabled:border-neutral-700 disabled:text-neutral-500 disabled:hover:bg-transparent disabled:cursor-not-allowed",
    ghost:
      "text-red-400 hover:bg-red-200/10 disabled:text-neutral-500 disabled:hover:bg-transparent disabled:cursor-not-allowed",
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
