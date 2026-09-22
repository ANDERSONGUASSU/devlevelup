export interface SquadRole {
  label: string
  name: string
  description: string
  image: string
}

export const squadCopy = {
  badge: '⚡ NOSSAS SQUADS',
  title: 'Um time completo, como no mercado real',
  description:
    'Squads multidisciplinares ativas com PM, UX/UI, Dev e QA simulando o ambiente de mercado real.',
  roles: [
    {
      label: 'QA ENGINEER',
      name: 'QA Engineer',
      description: 'Garante a qualidade e cobre os cenários de teste.',
      image: '/images/avatar-squad/QA.png',
    },
    {
      label: 'DEVELOPER',
      name: 'Developer',
      description: 'Constrói as features e mantém a base de código.',
      image: '/images/avatar-squad/developer.png',
    },
    {
      label: 'UX/UI DESIGNER',
      name: 'UX/UI Designer',
      description: 'Desenha a experiência e a interface do produto.',
      image: '/images/avatar-squad/ux_ui_designer.png',
    },
    {
      label: 'PRODUCT MANAGER',
      name: 'Product Manager',
      description: 'Prioriza o roadmap e conecta o time ao objetivo.',
      image: '/images/avatar-squad/product_manager.png',
    },
  ],
} as const
