import { FormSchemaType } from '@/app/media-converter/_components/Converter/Converter.types'
import { acceptedMediaTypes } from '@/app/media-converter/_features'
import { FileInput, useFormContext } from '@/hooks'

export const MediaInput = () => {
  const { control } = useFormContext<FormSchemaType>()

  return (
    <FileInput
      accept={acceptedMediaTypes}
      clearable
      control={control}
      label="ファイルを選択"
      name="file"
      placeholder="音声または動画ファイルを選択"
    />
  )
}
