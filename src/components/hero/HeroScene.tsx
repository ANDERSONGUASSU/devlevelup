import { heroCopy } from '../../data/hero'
import { cn } from '../../lib/utils'

interface HeroSceneProps {
  className?: string
}

export function HeroScene({ className }: HeroSceneProps) {
  return (
    <div className={cn('relative w-full max-w-155 lg:hidden', className)}>
      <div className="relative aspect-620/460 overflow-hidden rounded-xl">
        <img
          src="/images/rpg-scene.png"
          alt={heroCopy.sceneAlt}
          className="h-full w-full object-cover"
          loading="eager"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-arcade-scene-overlay"
        />
      </div>
    </div>
  )
}
