import { Converter as ConverterComponent } from './Converter';
import { Text as Typography } from '@repo/ui';

export const Converter = () => {
  return (
    <>
      <Typography c="gray" mb="sm" size="sm">
        ご注意&#58;
        iPhoneの特定バージョンなど一部の端末では、このアプリケーションが正常に動作しない可能性があります。
      </Typography>
      <ConverterComponent />
    </>
  );
};
