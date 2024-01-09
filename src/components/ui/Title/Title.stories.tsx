import { Meta, StoryObj } from '@storybook/react'
import { Title } from './Title'

const meta: Meta<typeof Title> = {
  component: undefined,
}
export default meta

type Story = StoryObj<typeof Title>

export const Main: Story = {
  render: () => <Title>My Title</Title>,
}
