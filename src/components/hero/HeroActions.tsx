import { Button } from '../ui/Button'
import { HeartIcon, PlayIcon } from '../ui/icons'
import { siteConfig } from '../../config'
import { heroCopy } from '../../data/hero'
import { cn } from '../../lib/utils'

interface HeroActionsProps {
  className?: string
}

export function HeroActions({ className }: HeroActionsProps) {
  return (
    <div className={cn('flex flex-wrap items-center gap-4', className)}>
      <Button
        href={siteConfig.links.apoia}
        variant="cta"
        size="lg"
        className="rounded-md px-7 py-3.5 font-inter tracking-[0.04em] shadow-arcade-cta after:hidden"
      >
        <HeartIcon className="size-4" />
        {heroCopy.primaryCta}
      </Button>
      <Button
        href="#jornada"
        variant="secondary"
        size="lg"
        className="rounded-md border-2 px-6 py-3.25 font-inter tracking-[0.04em] after:hidden"
      >
        <PlayIcon className="size-4" />
        {heroCopy.secondaryCta}
      </Button>
    </div>
  )
}
