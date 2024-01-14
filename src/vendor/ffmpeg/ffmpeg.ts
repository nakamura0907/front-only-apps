// See: https://ffmpegwasm.netlify.app/docs/getting-started/usage
import { FFmpeg } from '@ffmpeg/ffmpeg'
import { fetchFile, toBlobURL } from '@ffmpeg/util'

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
