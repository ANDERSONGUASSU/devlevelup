import { FooterBottom } from '../components/footer/FooterBottom'
import { FooterBrand } from '../components/footer/FooterBrand'
import { FooterLinkColumn } from '../components/footer/FooterLinkColumn'
import { FooterSocial } from '../components/footer/FooterSocial'
import { footerColumns } from '../data/footer'
import { cn } from '../lib/utils'

interface FooterProps {
  className?: string
}

export function Footer({ className }: FooterProps) {
  return (
    <footer
      className={cn(
        'bg-arcade-footer px-6 py-12 lg:px-30 lg:py-20 lg:pb-10',
        className,
      )}
    >
      <div className="mx-auto flex w-full max-w-300 flex-col gap-16">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <FooterBrand />
          {footerColumns.map((column) => (
            <FooterLinkColumn key={column.title} column={column} />
          ))}
          <FooterSocial />
        </div>
        <FooterBottom />
      </div>
    </footer>
  )
}
