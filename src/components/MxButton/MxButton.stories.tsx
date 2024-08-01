import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'

import { MxButton } from '.'
import { VariantsArrKeys } from '../../enums'

const meta = {
  title: 'Components/MxButton',
  component: MxButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    label: 'Button',
    onClick: fn(),
  },
  argTypes: {
    disable: Boolean,
    label: String,
    size: {
      options: ['small', 'medium', 'large'],
    },
    variant: {
      options: VariantsArrKeys,
    },

  }
} satisfies Meta<typeof MxButton>

export default meta
type Story = StoryObj<typeof meta>

export const Enable: Story = {
  args: {
    disable: false,
  },
}

export const Disable: Story = {
  args: {
    disable: true,
  },
}

export const Large: Story = {
  args: {
    size: 'large',
  },
}

export const Small: Story = {
  args: {
    size: 'small',
  },
}

export const Primary: Story = {
  args: {
    variant: 'primary',
  },
}
export const Secondary: Story = {
  args: {
    variant: 'secondary',
  },
}
export const Warning: Story = {
  args: {
    variant: 'warning',
  },
}
export const Alert: Story = {
  args: {
    variant: 'alert',
  },
}
