import {
  audioFormats,
  videoFormats,
} from '@/app/media-converter/_components/Converter/constants'
import { AllowedFileType } from '@/app/media-converter/_components/Converter/features'
import { FormSchemaType } from '@/app/media-converter/_components/Converter/types'
import { Select, SelectProps, useFormContext } from '@/hooks'

type Props = {
  uploadedFileType: AllowedFileType | null
  watchFile: File | null
}

export const ExtensionSelect: React.FC<Props> = ({
  uploadedFileType,
  watchFile,
}) => {
  const { control } = useFormContext<FormSchemaType>()

  return (
    <Select
      control={control}
      data={getExtensions(uploadedFileType)}
      disabled={!watchFile}
      label="変換後の拡張子"
      name="targetFileExtension"
    />
  )
}

const getExtensions = (
  fileType: AllowedFileType | null,
): SelectProps<FormSchemaType>['data'] => {
  if (!fileType) return []

  if (fileType === 'audio') {
    return audioFormats.map((format) => format.extension)
  }
  return videoFormats.map((format) => format.extension)
}
