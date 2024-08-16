import { Meta, StoryObj } from '@storybook/react'
import { MxTreeCard } from '.'
import { Category } from '../../types'

const demoData: Category[] = [
  {
    active: false,
    color: '#5a189a',
    name: 'Ahorro',
    total: 200,
    spend: 200,
    rest: 0,
    childs: [],
    tickets: [
      {
        description: 'Abono de ahorro',
        spend: 200,
      },
    ],
  },
  {
    active: false,
    color: '#7b2cbf',
    name: 'Basicos',
    total: 1300,
    spend: 1029,
    rest: 271,
    childs: [
      {
        active: false,
        color: '#ff8500',
        name: 'Renta',
        total: 750,
        spend: 750,
        rest: 0,
        childs: [],
        tickets: [
          {
            description: 'Pego de renga',
            spend: 750,
          },
        ],
      },
      {
        active: false,
        color: '#ff9100',
        name: 'Servicios',
        total: 250,
        spend: 123,
        rest: 127,
        childs: [],
        tickets: [
          {
            description: 'Luz',
            spend: 49,
          },
          {
            description: 'Internet',
            spend: 67,
          },
          {
            description: 'Crunchi',
            spend: 7,
          },
        ],
      },
      {
        active: false,
        color: '#ff9e00',
        name: 'Super',
        total: 300,
        spend: 156,
        rest: 144,
        childs: [],
        tickets: [
          {
            description: 'Mercado',
            spend: 24,
          },
          {
            description: 'Super',
            spend: 12,
          },
          {
            description: 'Mercado',
            spend: 34,
          },
          {
            description: 'Super',
            spend: 16,
          },
          {
            description: 'Cosas',
            spend: 7,
          },
          {
            description: 'Super',
            spend: 23,
          },
          {
            description: 'Mercado',
            spend: 40,
          },
        ],
      },
    ],
    tickets: [],
  },
  {
    active: false,
    color: '#9d4edd',
    name: 'Diario',
    total: 145,
    spend: 72,
    rest: 73,
    childs: [
      {
        active: false,
        color: '#888',
        name: 'hormiga',
        total: 145,
        spend: 72,
        rest: 73,
        childs: [],
        tickets: [
          {
            description: 'Semana 1',
            spend: 24,
          },
          {
            description: 'Semana 2',
            spend: 38,
          },
          {
            description: 'Semana 3',
            spend: 10,
          },
        ],
      },
    ],
    tickets: [],
  },
]

const meta = {
  title: 'Components/MxTreeCard',
  component: MxTreeCard,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        story: 'MxTreeStory description',
      },
    },
  },
  tags: ['autodocs'],
  args: { data: demoData },
} satisfies Meta<typeof MxTreeCard>

export default meta

type Story = StoryObj<typeof meta>

export const Complete: Story = {
  args: {},
}
