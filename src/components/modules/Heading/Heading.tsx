import { Space, Title, type TitleProps } from '@/components/ui'

type Order = NonNullable<TitleProps['order']>
type HeadingSpaceMap = { [key in Order]: { bottom: string; top: string } }

// Titleのorderに応じた、上下のスペース
const headingSpaceMap = {
  1: { bottom: '24px', top: '64px' },
  2: { bottom: '24px', top: '64px' },
  3: { bottom: '24px', top: '40px' },
  4: { bottom: '16px', top: '40px' },
  5: { bottom: '16px', top: '40px' },
  6: { bottom: '16px', top: '24px' },
} as const satisfies HeadingSpaceMap

const defaultOrder: Order = 1

/**
 * Titleコンポーネントの上下にSpaceコンポーネントを追加した、
 * 見出し用のコンポーネント
 */
export const Heading = (props: TitleProps) => {
  const { children, order, ...rest } = props

  const { bottom, top } = headingSpaceMap[order ?? defaultOrder]
  return (
    <>
      <Space h={top} />
      <Title order={order} {...rest}>
        {children}
      </Title>
      <Space h={bottom} />
    </>
  )
}
