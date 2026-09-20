export interface HeroStat {
  value: string
  label: string
}

export const heroStats: HeroStat[] = [
  { value: '+1200', label: 'Pessoas Apoiadas' },
  { value: '+1660', label: 'Projetos Entregues' },
  { value: '+360', label: 'Comunidade' },
]

export const heroCopy = {
  eyebrow: 'Financiamento coletivo',
  titleLines: ['Pequenos Apoios,', 'Grandes Oportunidades'],
  description:
    'A SouJunior acelera a carreira de profissionais de tecnologia em início de carreira através de squads práticas, simulação de ambiente de mercado real e mentorias de alto nível. Seu apoio a partir de R$ 2,00 viabiliza a infraestrutura de servidores, ferramentas e licenças para manter o ecossistema rodando.',
  primaryCta: 'Apoiar a SouJunior',
  secondaryCta: 'Ver Jornada de Evolução',
  sceneAlt: 'Cena de jogo RPG com personagens da comunidade SouJunior',
} as const
