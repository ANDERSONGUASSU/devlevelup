import { CodeIcon } from '../ui/icons'
import { cn } from '../../lib/utils'

interface FooterBottomProps {
  className?: string
}

export function FooterBottom({ className }: FooterBottomProps) {
  return (
    <div className={cn('flex flex-col gap-6', className)}>
      <hr className="border-arcade-footer-divider" />
      <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <p className="font-sans text-xs text-arcade-footer-text">
          {
            '© 2026 SouJunior. Todos os direitos reservados. Crowdfunding sem fins lucrativos.'
          }
        </p>
        <p className="flex items-center gap-1 font-sans text-xs font-medium text-arcade-footer-text">
          <CodeIcon className="size-3.5 text-arcade-cyan" />
          {'Feito de Juniores para Juniores'}
        </p>
      </div>
    </div>
  )
}
