import { useEffect, useMemo, useState } from 'react';
import { FormSchemaType } from '../Converter.types';
import { ExtensionSelectPresenter } from './ExtensionSelect.presenter';
import { SelectOptions } from './ExtensionSelect.types';
import { audioFormats, videoFormats } from '../../../features';
import { useFormContext, notifications } from '@repo/ui';

type State = {
  options: SelectOptions;
};

const initialState: State = {
  options: [],
};

export const ExtensionSelect: React.FC = () => {
  const { control, watch, setValue } = useFormContext<FormSchemaType>();
  const watchFile = watch('file', null);

  const [options, setOptions] = useState(initialState.options);

  // ファイルの種類に応じたアクションを定義
  const fileTypeActions = useMemo(() => {
    return [
      // 音声ファイルの場合
      {
        action: () =>
          setOptions(audioFormats.map((format) => format.extension)),
        condition: (type: string) =>
          audioFormats.some((format) => format.mimeType === type),
      },
      // 動画ファイルの場合
      {
        action: () =>
          setOptions(videoFormats.map((format) => format.extension)),
        condition: (type: string) =>
          videoFormats.some((format) => format.mimeType === type),
      },
      // それ以外のファイルの場合
      {
        action: () => {
          setOptions(initialState.options);
          setValue('targetFileExtension', null);
          notifications.show({
            color: 'red',
            message: '対応していないファイルです',
          });
        },
        condition: () => true,
      },
    ];
  }, [setValue]);

  useEffect(() => {
    // ファイルが選択されていない場合
    if (!watchFile) {
      // 各種値の初期化
      // clearableをサポートするための処理
      setOptions(initialState.options);
      setValue('targetFileExtension', null);
    } else {
      const { type } = watchFile;

      for (const { action, condition } of fileTypeActions) {
        // ファイルの種類が条件に合致した場合
        if (condition(type)) {
          // ファイルの種類に応じたアクションを実行
          action();
          break;
        }
      }
    }
  }, [watchFile, setValue, fileTypeActions]);

  return (
    <ExtensionSelectPresenter
      control={control}
      data={options}
      disabled={!options || options.length == 0}
      name="targetFileExtension"
    />
  );
};
