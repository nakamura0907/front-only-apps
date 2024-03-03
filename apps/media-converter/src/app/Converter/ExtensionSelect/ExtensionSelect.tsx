import { useEffect, useMemo, useState } from 'react'
import { FormSchemaType } from '../Converter.types'
import { ExtensionSelectPresenter } from './ExtensionSelect.presenter'
import { SelectOptions } from './ExtensionSelect.types'
import { audioFormats, videoFormats } from '../../../features'
import { useFormContext, notifications } from '@repo/ui'

type State = {
  options: SelectOptions
}

const initialState: State = {
  options: [],
}

export const ExtensionSelect: React.FC = () => {
  const { control, reset, watch } = useFormContext<FormSchemaType>()
  const watchFile = watch('file', null)

  const [options, setOptions] = useState(initialState.options)

  const fileTypeActions = useMemo(() => {
    return [
      {
        action: () =>
          setOptions(audioFormats.map((format) => format.extension)),
        condition: (type: string) =>
          audioFormats.some((format) => format.mimeType === type),
      },
      {
        action: () =>
          setOptions(videoFormats.map((format) => format.extension)),
        condition: (type: string) =>
          videoFormats.some((format) => format.mimeType === type),
      },
      {
        action: () => {
          setOptions(initialState.options)
          reset({ targetFileExtension: undefined })
          notifications.show({
            color: 'red',
            message: '対応していないファイルです',
          })
        },
        condition: (_: string) => true,
      },
    ]
  }, [reset])

  useEffect(() => {
    if (!watchFile) {
      // clearable
      setOptions(initialState.options)
      reset({ targetFileExtension: undefined })
    } else {
      const { type } = watchFile

      for (const { action, condition } of fileTypeActions) {
        if (condition(type)) {
          action()
          break
        }
      }
    }
  }, [watchFile, reset, fileTypeActions])

  return (
    <ExtensionSelectPresenter
      control={control}
      data={options}
      disabled={!options || options.length == 0}
      name="targetFileExtension"
    />
  )
}
