import { FormSchemaType } from '@/app/media-converter/_components/Converter/Converter.types'
import { Button, Group } from '@/components/ui'
import { useFormContext } from '@/hooks'

type PresenterProps = {
  disabled: boolean
}

const ButtonGroupPresenter: React.FC<PresenterProps> = ({ disabled }) => {
  return (
    <Group justify="flex-end">
      <Button disabled={disabled} type="submit" variant="filled">
        ダウンロードする
      </Button>
    </Group>
  )
}

export const ButtonGroup = () => {
  const { watch } = useFormContext<FormSchemaType>()
  const watchTargetFileExtension = watch('targetFileExtension', undefined)

  return <ButtonGroupPresenter disabled={!watchTargetFileExtension} />
}
