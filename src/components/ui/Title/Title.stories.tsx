import { Meta, StoryObj } from '@storybook/react'
import { Title } from './Title'

const meta: Meta<typeof Title> = {
  argTypes: {
    order: {
      control: {
        type: 'select',
      },
      options: [1, 2, 3, 4, 5, 6],
    },
  },
  component: Title,
}
export default meta

type Story = StoryObj<typeof Title>

export const Default: Story = {
  args: {
    children: 'Title',
  },
  render: (args) => (
    <>
      <p>Top</p>
      <Title {...args} />
      <p>Bottom</p>
    </>
  ),
}
