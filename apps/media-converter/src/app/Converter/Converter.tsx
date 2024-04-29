'use client';

import { Form, FormProvider, Stack, notifications, useForm } from '@repo/ui';
import { FormSchemaType } from './Converter.types';
import { useRef } from 'react';
import { convertFileFormat } from '../../features';
import { MediaInput } from './MediaInput/MediaInput';
import { ButtonGroup } from './ButtonGroup/ButtonGroup';
import { ExtensionSelect } from './ExtensionSelect/ExtensionSelect';

const initialValues: FormSchemaType = {
  file: null,
  targetFileExtension: null,
};

const downloadLocally = (file: File) => {
  const link = document.createElement('a');

  link.href = URL.createObjectURL(file);
  link.download = file.name;

  link.click();
  link.remove();
};

export const Converter = () => {
  const methods = useForm<FormSchemaType>({
    defaultValues: {
      file: initialValues.file,
      targetFileExtension: initialValues.targetFileExtension,
    },
  });

  // 2重クリック防止
  const isProcessing = useRef(false);

  const handleSubmit = async (data: FormSchemaType) => {
    try {
      // 処理中の場合は何もしない
      if (isProcessing.current) return;
      isProcessing.current = true;

      // 値がない場合は何もしない
      const { file, targetFileExtension } = data;
      if (!file || !targetFileExtension) return;

      // ファイルを変換してダウンロード
      const convertedFile = await convertFileFormat(file, targetFileExtension);
      downloadLocally(convertedFile);
    } catch (error) {
      console.error(error);
      notifications.show({
        color: 'red',
        message: 'ファイルの変換に失敗しました',
      });
    } finally {
      // 処理中フラグを解除
      isProcessing.current = false;
    }
  };

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
  );
};
