import { FormSchemaType } from '@/app/media-converter/_components/Converter/types'
import { Button, Group } from '@/components/ui'
import { useFormContext } from '@/hooks'

export const ButtonGroup = () => {
  const { watch } = useFormContext<FormSchemaType>()

  const watchTargetFileExtension = watch(
    'targetFileExtension',
    undefined, // TODO: 改善
  )

  return (
    <Group justify="flex-end">
      <Button
        disabled={!watchTargetFileExtension}
        type="submit"
        variant="filled"
      >
        ダウンロードする
      </Button>
    </Group>
  )
}
