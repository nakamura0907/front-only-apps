import { FormSchemaType } from '../Converter.types';
import { Button, Group, useFormContext } from '@repo/ui';

type PresenterProps = {
  disabled: boolean;
};

const ButtonGroupPresenter: React.FC<PresenterProps> = ({ disabled }) => {
  return (
    <Group justify="flex-end">
      <Button disabled={disabled} type="submit" variant="filled">
        ダウンロードする
      </Button>
    </Group>
  );
};

export const ButtonGroup = () => {
  const { watch } = useFormContext<FormSchemaType>();
  // targetFileExtensionが設定されている場合はボタンを有効化する
  const watchTargetFileExtension = watch('targetFileExtension', null);

  return <ButtonGroupPresenter disabled={!watchTargetFileExtension} />;
};
