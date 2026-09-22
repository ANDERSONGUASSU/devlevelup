import type { SquadRole } from '../../data/squad'
import { cn } from '../../lib/utils'

interface SquadCardProps {
  role: SquadRole
  className?: string
}

export function SquadCard({ role, className }: SquadCardProps) {
  return (
    <div className={cn('flex flex-col items-center gap-3', className)}>
      <span className="flex h-[23px] w-[134px] items-center justify-center rounded border border-arcade-cyan-badge-border bg-arcade-cyan-badge font-inter text-[10px] font-semibold uppercase tracking-wider text-arcade-cyan">
        {role.label}
      </span>
      <img
        src={role.image}
        alt={role.name}
        className="size-32 object-contain"
      />
    </div>
  )
}
