import { FormSchemaType } from "../Converter.types";
import { SelectOptions } from "./ExtensionSelect.types";
import { Control, Select } from "@repo/ui";

type PresenterProps = {
  control: Control<FormSchemaType, any>
  data: SelectOptions
  disabled: boolean
  name: keyof FormSchemaType
}

export const ExtensionSelectPresenter: React.FC<PresenterProps> = ({
  control,
  data,
  disabled,
  name,
}) => {
  return (
    <Select
      control={control}
      data={data}
      disabled={disabled}
      label="変換後の拡張子"
      name={name}
    />
  )
}
