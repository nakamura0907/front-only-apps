import { FFmpeg } from '@ffmpeg/ffmpeg'
import { fetchFile } from '@ffmpeg/util'

/**
 * Note: This function assumes that `loadFFmpeg` has been called before this function is used.
 */
export const transcodeFile = async (
  ffmpeg: FFmpeg,
  file: Blob | File,
  inputFileName: string,
  outputFileName: string,
) => {
  await ffmpeg.writeFile(inputFileName, await fetchFile(file))
  await ffmpeg.exec(['-i', inputFileName, outputFileName])

  return await ffmpeg.readFile(outputFileName)
}
