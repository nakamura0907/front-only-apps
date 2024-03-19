'use client'

import { Form, FormProvider, Stack, notifications, useForm } from "@repo/ui"
import { FormSchemaType } from "./Converter.types"
import { useRef } from "react"
import { convertFileFormat } from "../../features"
import { MediaInput } from "./MediaInput/MediaInput"
import { ButtonGroup } from "./ButtonGroup/ButtonGroup"
import { ExtensionSelect } from "./ExtensionSelect/ExtensionSelect"

const initialValues: FormSchemaType = {
    file: null,
    targetFileExtension: null
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

    // const { close, open } = useLoadingActions()

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

            const { file, targetFileExtension } = data
            if (!file || !targetFileExtension) return;

            //   open()

            const convertedFile = await convertFileFormat(
                file,
                targetFileExtension,
            )
            downloadFile(convertedFile)
        } catch (error) {
            console.error(error)
            notifications.show({
                color: 'red',
                message: 'ファイルの変換に失敗しました',
            })
        } finally {
            //   close()
            isProcessing.current = false
        }
    }

    return(
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