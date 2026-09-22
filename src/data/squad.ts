export interface SquadRole {
  label: string
  name: string
  frames: readonly string[]
  position: { x: number; y: number }
}

export const squadCopy = {
  badge: '⚔️ SQUAD RPG CO-OP',
  subtitle: 'Squad RPG co-op:',
  title: 'Nossa equipe multidisciplinar',
  description:
    'Como em um verdadeiro jogo de equipe, nossas squads dividem tarefas de ponta a ponta seguindo o padrão ágil profissional do mercado.',
  roles: [
    {
      label: 'PRODUCT MANAGER',
      name: 'Product Manager',
      position: { x: 18, y: 60 },
      frames: [
        '/images/avatar-squad/product_manager/squad-pm-idle 1.png',
        '/images/avatar-squad/product_manager/squad-pm-idle 1-1.png',
        '/images/avatar-squad/product_manager/squad-pm-idle 1-2.png',
        '/images/avatar-squad/product_manager/squad-pm-idle 1-3.png',
      ],
    },
    {
      label: 'UX/UI DESIGNER',
      name: 'UX/UI Designer',
      position: { x: 40, y: 50 },
      frames: [
        '/images/avatar-squad/ux_ui_designer/squad-ux-ui-idle 1.png',
        '/images/avatar-squad/ux_ui_designer/squad-ux-ui-idle 1-1.png',
        '/images/avatar-squad/ux_ui_designer/squad-ux-ui-idle 1-2.png',
        '/images/avatar-squad/ux_ui_designer/squad-ux-ui-idle 1-3.png',
      ],
    },
    {
      label: 'DEVELOPER',
      name: 'Developer',
      position: { x: 61, y: 40 },
      frames: [
        '/images/avatar-squad/developer/squad-dev-idle 1.png',
        '/images/avatar-squad/developer/squad-dev-idle 1-1.png',
        '/images/avatar-squad/developer/squad-dev-idle 1-2.png',
        '/images/avatar-squad/developer/squad-dev-idle 1-3.png',
      ],
    },
    {
      label: 'QA ENGINEER',
      name: 'QA Engineer',
      position: { x: 83, y: 30 },
      frames: [
        '/images/avatar-squad/qa/squad-qa-idle 1.png',
        '/images/avatar-squad/qa/squad-qa-idle 1-1.png',
        '/images/avatar-squad/qa/squad-qa-idle 1-2.png',
        '/images/avatar-squad/qa/squad-qa-idle 1-3.png',
      ],
    },
  ],
} as const
