import { siteConfig } from '../config'

export interface FooterLink {
  label: string
  href: string
}

export interface SocialLink extends FooterLink {
  icon: 'discord' | 'whatsapp' | 'github'
}

export interface FooterColumn {
  title: string
  links: FooterLink[]
}

export const footerColumns: FooterColumn[] = [
  {
    title: 'Comunidade',
    links: [
      { label: 'Quem Somos', href: '#quem-somos' },
      { label: 'Nossas Squads', href: '#squads' },
      { label: 'Projetos', href: '#projetos' },
      { label: 'Regulamentos', href: '#regulamentos' },
    ],
  },
  {
    title: 'Transparência',
    links: [
      { label: 'Relatório de Custos', href: '#relatorio-de-custos' },
      { label: 'Métricas de Impacto', href: '#metricas' },
      { label: 'Perguntas Frequentes', href: '#perguntas-frequentes' },
      { label: 'Termos de Uso', href: '#termos-de-uso' },
    ],
  },
]

export const socialLinks: SocialLink[] = [
  { label: 'Discord', href: siteConfig.links.discord, icon: 'discord' },
  { label: 'WhatsApp', href: siteConfig.links.whatsapp, icon: 'whatsapp' },
  { label: 'GitHub', href: siteConfig.links.github, icon: 'github' },
]
