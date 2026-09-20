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
      <div className="absolute inset-0 bg-arcade-background/60" />
      <div className="absolute inset-0 bg-linear-to-r from-arcade-background via-arcade-background/40 to-transparent" />
    </div>
  )
}
