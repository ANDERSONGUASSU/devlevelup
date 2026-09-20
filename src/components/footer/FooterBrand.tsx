import { SouJuniorLogo } from '../ui/icons'
import { cn } from '../../lib/utils'

interface FooterBrandProps {
  className?: string
}

export function FooterBrand({ className }: FooterBrandProps) {
  return (
    <div className={cn('flex flex-col gap-6', className)}>
      <SouJuniorLogo className="h-5 w-33.5 text-arcade-white" />
      <p className="font-sans text-sm leading-[1.57] text-arcade-footer-text">
        {
          'Aceleração profissional de juniores na tecnologia por meio de projetos reais e squads colaborativas.'
        }
      </p>
      <span className="inline-flex w-fit items-center rounded-full border border-arcade-cyan px-2.5 py-1">
        <span className="font-inter text-xs font-bold text-arcade-cyan">
          {'[ECOSSISTEMA OPEN-SOURCE]'}
        </span>
      </span>
    </div>
  )
}
