import { heroCopy } from '../../data/hero'
import { cn } from '../../lib/utils'

interface HeroEyebrowProps {
  className?: string
}

export function HeroEyebrow({ className }: HeroEyebrowProps) {
  return (
    <div className={cn('flex items-center gap-2', className)}>
      <span aria-hidden="true" className="h-0.5 w-6 bg-arcade-cyan" />
      <p className="font-sora text-[11px] font-bold uppercase tracking-[0.08em] text-arcade-cyan">
        {heroCopy.eyebrow}
      </p>
      <span aria-hidden="true" className="h-0.5 w-6 bg-arcade-cyan" />
    </div>
  )
}
