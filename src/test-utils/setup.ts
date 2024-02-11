jest.mock('@/vendor/ffmpeg', () => ({
  FFmpeg: jest.fn(),
  loadFFmpeg: jest.fn(),
  transcodeFile: jest.fn(),
}))
