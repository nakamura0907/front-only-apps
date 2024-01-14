import { FFmpeg, loadFFmpeg, transcodeFile } from '@/vendor'

export type AcceptFileType = 'audio' | 'video'

export const convert = async (file: File, extension: string) => {
  const ffmpeg = new FFmpeg()
  await loadFFmpeg(ffmpeg)

  const inputFileName = file.name
  const outputFileName = replaceExtension(inputFileName, extension)

  const data = await transcodeFile(ffmpeg, file, inputFileName, outputFileName)

  return new File([data], outputFileName)
}

/**
 * 拡張子を置き換える
 *
 * @param fileName
 * @param extension {string} without dot
 * @returns
 */
const replaceExtension = (fileName: string, extension: string) => {
  return fileName.replace(/\.[^/.]+$/, `.${extension}`)
}
