'use client'

import { Button, Group, Stack, notifications } from '@/components/ui'
import { FileInput, Form, Select, SelectProps, useForm } from '@/hooks'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { accept, audioFormats, videoFormats } from './constants'
import { AcceptFileType, convert } from './features'

type FormSchemaType = {
  file: File | null
  targetFileExtension: string
}

const initialValues: Partial<FormSchemaType> = {
  file: null,
  targetFileExtension: undefined,
}

export const Converter = () => {
  // const ffmpegRef = useRef(new FFmpeg()) // doesn't work

  const { control, reset, watch } = useForm<FormSchemaType>({
    defaultValues: {
      file: initialValues.file,
      targetFileExtension: initialValues.targetFileExtension,
    },
  })

  const [uploadedFileType, setUploadedFileType] =
    useState<AcceptFileType | null>(null)

  const watchFile = watch('file', initialValues.file)
  const watchTargetFileExtension = watch(
    'targetFileExtension',
    initialValues.targetFileExtension,
  )

  const resetFileType = useCallback(() => {
    reset({ targetFileExtension: initialValues.targetFileExtension })
    setUploadedFileType(null)
  }, [reset])

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

      const convertedFile = await convert(file, data.targetFileExtension)

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
    <Form control={control} onSubmit={(e) => handleSubmit(e.data)}>
      <Stack gap="xl">
        <FileInput
          accept={accept}
          clearable
          control={control}
          label="ファイルを選択"
          name="file"
          placeholder="音声または動画ファイルを選択"
        />

        <Select
          control={control}
          data={getExtensions(uploadedFileType)}
          disabled={!watchFile}
          label="変換後の拡張子"
          name="targetFileExtension"
        />

        <Group justify="flex-end">
          <Button
            disabled={!watchTargetFileExtension}
            type="submit"
            variant="filled"
          >
            ダウンロードする
          </Button>
        </Group>
      </Stack>
    </Form>
  )
}

const downloadFile = (file: File) => {
  const link = document.createElement('a')
  link.href = URL.createObjectURL(file)
  link.download = file.name
  link.click()
}

const getExtensions = (
  fileType: AcceptFileType | null,
): SelectProps<FormSchemaType>['data'] => {
  if (!fileType) return []

  if (fileType === 'audio') {
    return audioFormats.map((format) => format.extension)
  }
  return videoFormats.map((format) => format.extension)
}
