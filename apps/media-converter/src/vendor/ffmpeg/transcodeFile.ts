import { FFmpeg } from '@ffmpeg/ffmpeg'
import { fetchFile } from '@ffmpeg/util'

/**
 * ts(2742) 対策
 */
type FileData = Awaited<ReturnType<typeof FFmpeg.prototype.readFile>>

/**
 * Note: This function assumes that `loadFFmpeg` has been called before this function is used.
 */
export const transcodeFile = async (
    ffmpeg: FFmpeg,
    file: Blob | File,
    inputFileName: string,
    outputFileName: string,
): Promise<FileData> => {
    await ffmpeg.writeFile(inputFileName, await fetchFile(file))
    await ffmpeg.exec(['-i', inputFileName, outputFileName])

    return await ffmpeg.readFile(outputFileName)
}