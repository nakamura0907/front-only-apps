import { FFmpeg, loadFFmpeg, transcodeFile } from '../vendor/ffmpeg';

/**
 * ファイルのフォーマットを変換する
 */
export const convertFileFormat = async (file: File, extension: string) => {
  // FFmpegの準備
  const ffmpeg = new FFmpeg();
  await loadFFmpeg(ffmpeg);

  // 変換後のファイル名を生成
  const inputFileName = file.name;
  const outputFileName = replaceFileExtension(inputFileName, extension);

  // ファイルの変換
  const data = await transcodeFile(ffmpeg, file, inputFileName, outputFileName);

  return new File([data], outputFileName);
};

/**
 * 拡張子を置き換える
 *
 * @param fileName
 * @param extension {string} without dot (e.g. wav)
 * @returns {string} e.g. (sample.mp3, wav) => sample.wav
 */
const replaceFileExtension = (fileName: string, extension: string) => {
  return fileName.replace(/\.[^/.]+$/, `.${extension}`);
};
