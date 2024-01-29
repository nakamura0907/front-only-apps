import { FFmpeg } from '@ffmpeg/ffmpeg'
import { toBlobURL } from '@ffmpeg/util'

const baseURL = 'https://unpkg.com/@ffmpeg/core@0.12.4/dist/umd'

export const loadFFmpeg = async (ffmpeg: FFmpeg) => {
  const coreURL = await fetchCoreURL()
  const wasmURL = await fetchWasmURL()

  await ffmpeg.load({
    coreURL,
    wasmURL,
  })
}

const fetchCoreURL = () =>
  toBlobURL(`${baseURL}/ffmpeg-core.js`, 'text/javascript')

const fetchWasmURL = () =>
  toBlobURL(`${baseURL}/ffmpeg-core.wasm`, 'application/wasm')
