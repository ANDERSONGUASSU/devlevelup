import { Fragment } from 'react'
import { heroStats } from '../../data/hero'
import { CountUp } from '../ui/CountUp'
import { cn } from '../../lib/utils'

interface HeroStatsProps {
  className?: string
}

export function HeroStats({ className }: HeroStatsProps) {
  return (
    <div
      className={cn(
        'flex items-center justify-between gap-3 rounded-xl border border-arcade-cyan bg-arcade-white/3 px-3 py-4 shadow-arcade-stats-bar backdrop-blur-md lg:rounded-2xl lg:bg-arcade-stats-bar lg:px-4 lg:py-3',
        className,
      )}
    >
      {heroStats.map((stat, index) => (
        <Fragment key={stat.value}>
          {index > 0 && (
            <span aria-hidden="true" className="h-8 w-px bg-arcade-white/8" />
          )}
          <div className="flex flex-col gap-0.5">
            <span className="font-pixel text-base leading-none text-arcade-cyan lg:text-xl">
              <CountUp value={stat.value} />
            </span>
            <span className="font-roboto-flex text-[10px] text-arcade-white lg:text-xs">
              {stat.label}
            </span>
          </div>
        </Fragment>
      ))}
    </div>
  )
}
