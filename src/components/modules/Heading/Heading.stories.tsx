import { Meta, StoryObj } from '@storybook/react'
import { Heading } from './Heading'

const meta: Meta<typeof Heading> = {
  argTypes: {
    order: {
      control: {
        type: 'select',
      },
      options: [1, 2, 3, 4, 5, 6],
    },
  },
  component: Heading,
}
export default meta

type Story = StoryObj<typeof Heading>

export const Default: Story = {
  args: {
    children: 'Heading',
  },
  render: (args) => (
    <>
      <p>Top</p>
      <Heading {...args} />
      <p>Bottom</p>
    </>
  ),
}
