import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'

import { MxButton } from '.'
import { SizesArrKeys, VariantsArrKeys } from '../../enums'

const meta = {
  title: 'Components/MxButton',
  component: MxButton,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        story: 'Another description on the story, overriding the comments',
      },
    },
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
      options: SizesArrKeys,
      control: 'radio',
      table: {
        type: {
          summary: 'string',
          detail: SizesArrKeys.reduce(
            (acc: string, sizeKey: string) => `${acc}${sizeKey} \t|\n`,
            ''
          ),
        },
      },
    },
    variant: {
      options: VariantsArrKeys,
      control: 'radio',
      table: {
        type: {
          summary: 'string',
          detail: VariantsArrKeys.reduce(
            (acc: string, variantKey: string) => `${acc}${variantKey} |\n`,
            ''
          ),
        },
      },
    },
  },
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
