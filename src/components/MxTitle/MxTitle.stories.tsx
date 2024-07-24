import type { Meta, StoryObj } from '@storybook/react'

import { MxTitle } from '.'

const meta = {
  title: 'Components/MxTitle',
  component: MxTitle,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    title: 'Title',
  },
} satisfies Meta<typeof MxTitle>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    primary: true,
  },
}

export const Secondary: Story = {
  args: {
    primary: false,
  },
}
