export interface SquadRole {
  label: string
  name: string
  image: string
}

export const squadCopy = {
  badge: '⚔️ SQUAD RPG CO-OP',
  subtitle: 'Squad RPG co-op:',
  title: 'Nossa equipe multidisciplinar',
  description:
    'Como em um verdadeiro jogo de equipe, nossas squads dividem tarefas de ponta a ponta seguindo o padrão ágil profissional do mercado.',
  roles: [
    {
      label: 'QA ENGINEER',
      name: 'QA Engineer',
      image: '/images/avatar-squad/QA.png',
    },
    {
      label: 'DEVELOPER',
      name: 'Developer',
      image: '/images/avatar-squad/developer.png',
    },
    {
      label: 'UX/UI DESIGNER',
      name: 'UX/UI Designer',
      image: '/images/avatar-squad/ux_ui_designer.png',
    },
    {
      label: 'PRODUCT MANAGER',
      name: 'Product Manager',
      image: '/images/avatar-squad/product_manager.png',
    },
  ],
} as const
