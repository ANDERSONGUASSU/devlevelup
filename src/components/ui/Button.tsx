import type { ButtonHTMLAttributes } from 'react'
import { cn } from '../../lib/utils'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
}

export function Button({
  className,
  variant = 'primary',
  size = 'md',
  ...props
}: ButtonProps) {
  return (
    <button
      type="button"
      className={cn(
        'inline-flex items-center justify-center gap-2 font-display uppercase tracking-wider transition-colors after:block after:h-0.5 focus:outline-none',
        variantClasses[variant],
        sizeClasses[size],
        className,
      )}
      {...props}
    />
  )
}

const variantClasses: Record<NonNullable<ButtonProps['variant']>, string> = {
  primary: 'bg-arcade-primary text-arcade-950 hover:bg-arcade-secondary',
  secondary:
    'border border-arcade-secondary text-arcade-secondary hover:bg-arcade-secondary hover:text-arcade-950',
  ghost: 'text-arcade-muted hover:text-arcade-ghost',
}

const sizeClasses: Record<NonNullable<ButtonProps['size']>, string> = {
  sm: 'px-2 py-1 text-[10px]',
  md: 'px-4 py-2 text-xs',
  lg: 'px-6 py-3 text-sm',
}
