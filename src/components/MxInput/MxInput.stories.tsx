import { Meta, StoryObj } from '@storybook/react'
import { MxInput } from '.'

const meta = {
  title: 'Components/MxInput',
  component: MxInput,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        story: 'Input Description',
      },
    },
  },
  tags: ['autodocs'],
  args: {},
  argTypes: {
    disabled: Boolean,
  },
} satisfies Meta<typeof MxInput>

export default meta
type Story = StoryObj<typeof meta>

export const Normal: Story = {
  args: {
    state: 'normal',
  },
}

export const Success: Story = {
  args: {
    state: 'success',
  },
}

export const Warning: Story = {
  args: {
    state: 'warning',
  },
}

export const Alert: Story = {
  args: {
    state: 'alert',
  },
}
