'use client'

import { ButtonGroup } from '@/app/media-converter/_components/Converter/ButtonGroup/ButtonGroup'
import { FormSchemaType } from '@/app/media-converter/_components/Converter/Converter.types'
import { ExtensionSelect } from '@/app/media-converter/_components/Converter/ExtensionSelect/ExtensionSelect'
import { MediaInput } from '@/app/media-converter/_components/Converter/MediaInput/MediaInput'
import { convertFileFormat } from '@/app/media-converter/_features'
import { Stack, notifications } from '@/components/ui'
import { Form, FormProvider, useForm } from '@/hooks'
import { useLoadingActions } from '@/providers'
import { useRef } from 'react'

const initialValues: Partial<FormSchemaType> = {
  file: null,
  targetFileExtension: undefined,
}

const downloadFile = (file: File) => {
  const link = document.createElement('a')

  link.href = URL.createObjectURL(file)
  link.download = file.name

  link.click()
  link.remove()
}

export const Converter = () => {
  // const ffmpegRef = useRef(new FFmpeg()) // doesn't work

  const { close, open } = useLoadingActions()

  const methods = useForm<FormSchemaType>({
    defaultValues: {
      file: initialValues.file,
      targetFileExtension: initialValues.targetFileExtension,
    },
  })

  const isProcessing = useRef(false)

  const handleSubmit = async (data: FormSchemaType) => {
    try {
      if (isProcessing.current) return
      isProcessing.current = true

      const { file } = data
      if (!file) return

      open()

      const convertedFile = await convertFileFormat(
        file,
        data.targetFileExtension,
      )
      downloadFile(convertedFile)
    } catch (error) {
      console.error(error)
      notifications.show({
        color: 'red',
        message: 'ファイルの変換に失敗しました',
      })
    } finally {
      close()
      isProcessing.current = false
    }
  }

  return (
    <FormProvider {...methods}>
      <Form control={methods.control} onSubmit={(e) => handleSubmit(e.data)}>
        <Stack gap="xl">
          <MediaInput />
          <ExtensionSelect />
          <ButtonGroup />
        </Stack>
      </Form>
    </FormProvider>
  )
}
