import { SquadCard } from '../components/squad/SquadCard'
import { SectionHeader } from '../components/ui/SectionHeader'
import { squadCopy } from '../data/squad'
import { cn } from '../lib/utils'

interface SquadProps {
  className?: string
}

export function Squad({ className }: SquadProps) {
  return (
    <section
      id="squads"
      className={cn(
        'relative flex flex-col items-center gap-14 overflow-hidden bg-arcade-footer px-6 py-16 lg:px-20 lg:py-24',
        className,
      )}
    >
      <div
        aria-hidden="true"
        className="absolute -left-40 top-40 size-[500px] rounded-full bg-arcade-cyan opacity-10 blur-[75px]"
      />
      <div
        aria-hidden="true"
        className="absolute -right-40 top-64 size-[500px] rounded-full bg-arcade-purple-glow opacity-10 blur-[75px]"
      />
      <img
        src="/images/grid-texture.svg"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover"
      />

      <SectionHeader
        badge={squadCopy.badge}
        subtitle={squadCopy.subtitle}
        title={squadCopy.title}
        description={squadCopy.description}
      />

      <div className="relative grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {squadCopy.roles.map((role) => (
          <SquadCard key={role.label} role={role} />
        ))}
      </div>

      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-1 bg-arcade-cyan opacity-40"
      />
    </section>
  )
}
