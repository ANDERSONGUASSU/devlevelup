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
        'flex flex-col items-center gap-4 rounded-2xl border border-arcade-card-border bg-arcade-comparison-card p-6',
        className,
      )}
    >
      <span className="flex h-[23px] w-[134px] items-center justify-center rounded border border-arcade-cyan-badge-border bg-arcade-cyan-badge font-inter text-[10px] font-semibold uppercase tracking-wider text-arcade-cyan">
        {role.label}
      </span>
      <div className="flex flex-col items-center">
        <img
          src={role.image}
          alt={role.name}
          className="size-32 object-contain"
        />
        <img
          src="/images/avatar-squad/pixel_plataform.png"
          alt=""
          aria-hidden="true"
          className="-mt-2 h-10 w-44 object-cover object-top"
        />
      </div>
    </article>
  )
}
