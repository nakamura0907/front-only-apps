// See: https://ffmpegwasm.netlify.app/docs/getting-started/usage
import { FFmpeg } from '@ffmpeg/ffmpeg'
import { fetchFile, toBlobURL } from '@ffmpeg/util'
import * as E from 'fp-ts/Either'
import * as T from 'fp-ts/Task'
import * as TE from 'fp-ts/TaskEither'

const baseURL = 'https://unpkg.com/@ffmpeg/core@0.12.4/dist/umd'

export const loadFFmpeg = async (ffmpeg: FFmpeg) => {
  const coreURL = await toBlobURL(
    `${baseURL}/ffmpeg-core.js`,
    'text/javascript',
  )
  const wasmURL = await toBlobURL(
    `${baseURL}/ffmpeg-core.wasm`,
    'application/wasm',
  )

  await ffmpeg.load({
    coreURL,
    wasmURL,
  })
}

export const transcodeFile = async (
  ffmpeg: FFmpeg,
  file: Blob | File,
  inputFileName: string,
  outputFileName: string,
) => {
  await ffmpeg.writeFile(inputFileName, await fetchFile(file))
  await ffmpeg.exec(['-i', inputFileName, outputFileName])

  const data = await ffmpeg.readFile(outputFileName)
  return data
}

const task =
  (ffmpeg: FFmpeg): T.Task<void> =>
  () =>
    loadFFmpeg(ffmpeg)

const taskEither = (ffmpeg: FFmpeg): TE.TaskEither<Error, void> =>
  TE.tryCatch(task(ffmpeg), E.toError)

const test = async (ffmpeg: FFmpeg) => {
  await loadFFmpeg(ffmpeg)

  return (file: Blob | File, inputFileName: string, outputFileName: string) =>
    transcodeFile(ffmpeg, file, inputFileName, outputFileName)
}
