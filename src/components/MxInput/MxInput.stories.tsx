import { Meta, StoryObj } from '@storybook/react'
import { MxInput } from '.'
import { InputTypesArrKeys, StatesArrKeys } from '../../enums'

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
    type: {
      options: InputTypesArrKeys,
      control: 'radio',
      table: {
        type: {
          summary: 'string',
          detail: InputTypesArrKeys.reduce(
            (acc: string, sizeKey: string) => `${acc}${sizeKey} \t|\n`,
            ''
          ),
        },
      },
    },
    state: {
      options: StatesArrKeys,
      control: 'radio',
      table: {
        type: {
          summary: 'string',
          detail: StatesArrKeys.reduce(
            (acc: string, sizeKey: string) => `${acc}${sizeKey} \t|\n`,
            ''
          ),
        },
      },
    },
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
