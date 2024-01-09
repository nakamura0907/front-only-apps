import { Meta, StoryObj } from '@storybook/react'
import { ForwardRefEditor } from './ForwardRefEditor'

const meta: Meta<typeof ForwardRefEditor> = {
  component: undefined,
}
export default meta

type Story = StoryObj<typeof ForwardRefEditor>

const Wrapper = () => {
  return <ForwardRefEditor markdown="" placeholder="placeholder" />
}

export const Default: Story = {
  render: () => <Wrapper />,
}
