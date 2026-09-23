import { heroCopy } from '../../data/hero'
import { BoltIcon } from '../ui/icons'
import { cn } from '../../lib/utils'

interface HeroEyebrowProps {
  className?: string
}

export function HeroEyebrow({ className }: HeroEyebrowProps) {
  return (
    <div
      className={cn(
        'inline-flex w-fit items-center gap-2 rounded-full border border-arcade-cyan bg-arcade-950 px-3 py-1.5',
        className,
      )}
    >
      <BoltIcon className="size-3.5 text-arcade-cyan" />
      <p className="font-sora text-[11px] font-bold uppercase tracking-[0.08em] text-arcade-cyan">
        {heroCopy.eyebrow}
      </p>
    </div>
  )
}
