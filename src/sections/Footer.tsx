import {
  ArrowRightIcon,
  CodeIcon,
  DiscordIcon,
  GitHubIcon,
  SouJuniorLogo,
  WhatsAppIcon,
} from '../components/ui/icons'
import { siteConfig } from '../config'
import { footerColumns, socialLinks } from '../data/footer'
import { cn } from '../lib/utils'

interface FooterProps {
  className?: string
}

const socialIcons = {
  discord: DiscordIcon,
  whatsapp: WhatsAppIcon,
  github: GitHubIcon,
} as const

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
          <div className="flex flex-col gap-6">
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

          {footerColumns.map((column) => (
            <div key={column.title} className="flex flex-col gap-5">
              <h3 className="font-sans text-base font-semibold text-arcade-footer-heading">
                {column.title}
              </h3>
              <ul className="flex flex-col gap-3.5">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="font-sans text-sm font-medium text-arcade-footer-text transition-colors hover:text-arcade-cyan"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              <h3 className="font-sans text-base font-semibold text-arcade-footer-heading">
                {'Canais Oficiais'}
              </h3>
              <ul className="flex flex-col gap-4">
                {socialLinks.map((link) => {
                  const Icon = socialIcons[link.icon]
                  return (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="flex items-center gap-2 font-sans text-sm font-medium text-arcade-footer-text transition-colors hover:text-arcade-cyan"
                      >
                        <Icon className="size-3.5" />
                        {link.label}
                      </a>
                    </li>
                  )
                })}
              </ul>
            </div>
            <a
              href={siteConfig.links.apoia}
              className="inline-flex w-fit items-center justify-center gap-2 rounded-lg bg-arcade-cyan px-5 py-3 font-sans text-sm font-bold text-arcade-cta-text shadow-arcade-cta-cyan transition-colors hover:bg-arcade-cyan/90"
            >
              {'Apoie R$ 2,00+ no Apoia.se'}
              <ArrowRightIcon className="size-3.5" />
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-6">
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
      </div>
    </footer>
  )
}
