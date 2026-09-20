import { heroCopy } from '../../data/hero'
import { cn } from '../../lib/utils'

interface HeroDescriptionProps {
  className?: string
}

export function HeroDescription({ className }: HeroDescriptionProps) {
  return (
    <p
      className={cn(
        'font-roboto-flex text-base leading-[1.6] text-arcade-text-secondary',
        className,
      )}
    >
      {heroCopy.description}
    </p>
  )
}
