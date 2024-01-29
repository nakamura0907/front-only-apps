'use client'

import { ButtonGroup } from '@/app/media-converter/_components/Converter/ButtonGroup/ButtonGroup'
import { ExtensionSelect } from '@/app/media-converter/_components/Converter/ExtensionSelect/ExtensionSelect'
import { MediaInput } from '@/app/media-converter/_components/Converter/MediaInput/MediaInput'
import { FormSchemaType } from '@/app/media-converter/_components/Converter/types'
import {
  AllowedFileType,
  audioFormats,
  convertFileFormat,
  videoFormats,
} from '@/app/media-converter/_features'
import { Stack, notifications } from '@/components/ui'
import { Form, FormProvider, useForm } from '@/hooks'
import { useCallback, useEffect, useMemo, useState } from 'react'

const initialValues: Partial<FormSchemaType> = {
  file: null,
  targetFileExtension: undefined,
}

export const Converter = () => {
  // const ffmpegRef = useRef(new FFmpeg()) // doesn't work

  const methods = useForm<FormSchemaType>({
    defaultValues: {
      file: initialValues.file,
      targetFileExtension: initialValues.targetFileExtension,
    },
  })

  const [uploadedFileType, setUploadedFileType] =
    useState<AllowedFileType | null>(null)

  const watchFile = methods.watch('file', initialValues.file)

  const resetFileType = useCallback(() => {
    methods.reset({ targetFileExtension: initialValues.targetFileExtension })
    setUploadedFileType(null)
  }, [methods])

  // ファイルの種類に応じた処理を行う
  const fileTypeActions = useMemo(() => {
    return [
      {
        action: () => setUploadedFileType('audio'),
        condition: (type: string) =>
          audioFormats.some((format) => format.mimeType === type),
      },
      {
        action: () => setUploadedFileType('video'),
        condition: (type: string) =>
          videoFormats.some((format) => format.mimeType === type),
      },
      {
        action: () => {
          resetFileType()
          notifications.show({
            color: 'red',
            message: '対応していないファイルです',
          })
        },
        condition: (_: string) => true,
      },
    ]
  }, [resetFileType])

  useEffect(() => {
    if (!watchFile) {
      // clearableのため、nullになったらリセットする
      resetFileType()
    } else {
      const { type } = watchFile

      for (const { action, condition } of fileTypeActions) {
        if (condition(type)) {
          action()
          break
        }
      }
    }
  }, [watchFile, resetFileType, fileTypeActions])

  const handleSubmit = async (data: FormSchemaType) => {
    try {
      const { file } = data
      if (!file || !uploadedFileType) return

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
    }
  }

  return (
    <FormProvider {...methods}>
      <Form control={methods.control} onSubmit={(e) => handleSubmit(e.data)}>
        <Stack gap="xl">
          <MediaInput />
          <ExtensionSelect
            uploadedFileType={uploadedFileType}
            watchFile={watchFile}
          />
          <ButtonGroup />
        </Stack>
      </Form>
    </FormProvider>
  )
}

const downloadFile = (file: File) => {
  const link = document.createElement('a')
  link.href = URL.createObjectURL(file)
  link.download = file.name
  link.click()
  link.remove()
}
