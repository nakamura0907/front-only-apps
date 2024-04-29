import { FFmpeg } from '@ffmpeg/ffmpeg';
import { toBlobURL } from '@ffmpeg/util';

// see: https://ffmpegwasm.netlify.app/docs/getting-started/usage
const baseURL = 'https://unpkg.com/@ffmpeg/core@0.12.4/dist/umd';

/**
 * FFmpegの準備を整える関数
 *
 * FFmpegを扱う前に呼び出す必要がある
 */
export const loadFFmpeg = async (ffmpeg: FFmpeg) => {
  // 必要なファイルを取得
  const coreURL = await fetchCoreURL();
  const wasmURL = await fetchWasmURL();

  await ffmpeg.load({
    coreURL,
    wasmURL,
  });
};

const fetchCoreURL = () =>
  toBlobURL(`${baseURL}/ffmpeg-core.js`, 'text/javascript');

const fetchWasmURL = () =>
  toBlobURL(`${baseURL}/ffmpeg-core.wasm`, 'application/wasm');
