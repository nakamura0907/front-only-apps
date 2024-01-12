import { Meta, StoryObj } from '@storybook/react'
import { AppLayout } from './AppLayout'

const meta: Meta<typeof AppLayout> = {
  component: AppLayout,
}

export default meta

type Story = StoryObj<typeof AppLayout>

export const Default: Story = {
  args: {
    children: 'Main Content',
  },
  render: (args) => <AppLayout {...args} />,
}
