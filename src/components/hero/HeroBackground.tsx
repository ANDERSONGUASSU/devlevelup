import { cn } from '../../lib/utils'

interface HeroBackgroundProps {
  className?: string
}

export function HeroBackground({ className }: HeroBackgroundProps) {
  return (
    <div
      aria-hidden="true"
      className={cn('absolute inset-0 hidden lg:block', className)}
    >
      <img
        src="/images/rpg-scene.png"
        alt=""
        className="absolute inset-0 h-full w-full object-cover object-right"
        loading="eager"
      />
      <div className="absolute inset-0 bg-hero-scrim" />
    </div>
  )
}
