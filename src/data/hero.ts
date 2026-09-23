export interface HeroStat {
  value: string
  label: string
}

export const heroStats: HeroStat[] = [
  { value: '+1200', label: 'Apoiadores' },
  { value: '+1660', label: 'Parceiros' },
  { value: '+360', label: 'Projetos Entregues' },
]

export const heroCopy = {
  eyebrow: 'Financiamento coletivo',
  titleLines: ['Pequenos Apoios,', 'Grandes Oportunidades'],
  description:
    'A SouJunior acelera a carreira de profissionais de tecnologia em início de carreira através de squads práticas, simulação de mercado e mentorias. Seu apoio a partir de R$ 2,00 viabiliza a infraestrutura de servidores e ferramentas para manter o ecossistema rodando.',
  primaryCta: 'Apoiar a partir de R$ 2,00',
  secondaryCta: 'Ver Jornada de Evolução',
  sceneAlt: 'Cena de jogo RPG com personagens da comunidade SouJunior',
} as const
