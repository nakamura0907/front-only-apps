import { FormSchemaType } from "../Converter.types";
import { acceptedMediaTypes } from "../../../features";
import { FileInput, useFormContext } from "@repo/ui";

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