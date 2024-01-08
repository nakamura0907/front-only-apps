import { Space } from '@/components/ui/Space'
import { BaseTitle, TitleProps } from '@/components/ui/Title/BaseTitle'
import { defaultValue, titleSpaceMap } from '@/components/ui/Title/constants'

export const Title = (props: TitleProps) => {
  const { children, order, ...rest } = props

  const { bottom, top } = titleSpaceMap[order ?? defaultValue]
  return (
    <>
      <Space h={top} />
      <BaseTitle order={order} {...rest}>
        {children}
      </BaseTitle>
      <Space h={bottom} />
    </>
  )
}
