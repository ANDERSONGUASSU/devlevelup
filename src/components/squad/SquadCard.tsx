import type { SquadRole } from '../../data/squad'
import { cn } from '../../lib/utils'

interface SquadCardProps {
  role: SquadRole
  className?: string
}

export function SquadCard({ role, className }: SquadCardProps) {
  return (
    <article
      className={cn(
        'flex flex-col items-center gap-5 rounded-2xl border border-arcade-card-border bg-arcade-comparison-card p-6',
        className,
      )}
    >
      <div className="relative">
        <div className="rounded-xl bg-arcade-level-frame p-2">
          <img
            src={role.image}
            alt={role.name}
            className="size-36 rounded-lg object-cover"
          />
        </div>
        <span className="absolute -bottom-3 left-1/2 flex h-[23px] w-[134px] -translate-x-1/2 items-center justify-center rounded border border-arcade-cyan-badge-border bg-arcade-cyan-badge font-inter text-[10px] font-semibold uppercase tracking-wider text-arcade-cyan">
          {role.label}
        </span>
      </div>
      <p className="font-inter text-sm font-medium leading-5 text-arcade-footer-text">
        {role.description}
      </p>
    </article>
  )
}
