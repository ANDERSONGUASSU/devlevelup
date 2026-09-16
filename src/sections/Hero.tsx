import { Button } from '../components/ui/Button'
import { siteConfig } from '../config'
import { cn } from '../lib/utils'

interface HeroProps {
  className?: string
}

export function Hero({ className }: HeroProps) {
  return (
    <section
      className={cn(
        'relative flex min-h-[70vh] flex-col items-center justify-center gap-8 px-4 py-20 text-center',
        className,
      )}
    >
      <p className="font-display text-xs uppercase tracking-[0.35em] text-arcade-secondary">
        {'Hackathon SouJunior • 16 bits'}
      </p>

      <div className="space-y-4">
        <h1 className="font-display text-4xl uppercase leading-tight text-arcade-ghost sm:text-5xl lg:text-6xl">
          {siteConfig.name}
        </h1>
        <p className="mx-auto max-w-xl font-sans text-base text-arcade-muted sm:text-lg">
          {siteConfig.description}
        </p>
      </div>

      <div className="flex flex-col items-center gap-3 sm:flex-row">
        <Button size="lg">{'Apoiar'}</Button>
        <Button size="lg" variant="ghost">
          {'Saiba mais'}
        </Button>
      </div>
    </section>
  )
}
