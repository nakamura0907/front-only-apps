import { TitleOrder } from '@mantine/core'

type TitleSpaceMap = { [key in TitleOrder]: { bottom: string; top: string } }

export const titleSpaceMap = {
  1: { bottom: '24px', top: '64px' },
  2: { bottom: '24px', top: '64px' },
  3: { bottom: '24px', top: '40px' },
  4: { bottom: '16px', top: '40px' },
  5: { bottom: '16px', top: '40px' },
  6: { bottom: '16px', top: '24px' },
} as const satisfies TitleSpaceMap

export const defaultValue: TitleOrder = 1
