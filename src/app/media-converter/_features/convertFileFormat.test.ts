import { FFmpeg, loadFFmpeg, transcodeFile } from '@/vendor'
import { convertFileFormat } from './convertFileFormat'

jest.mock('@/vendor')

describe('convertFileFormat', () => {
  it('should convert file format', async () => {
    const mockFile = new File(['content'], 'sample.mp3')
    const mockExtension = 'wav'
    const mockOutputFileName = 'sample.wav'
    const mockData = new Blob(['data'])

    ;(FFmpeg as jest.Mock).mockImplementation(() => {})
    ;(loadFFmpeg as jest.Mock).mockResolvedValue(undefined)
    ;(transcodeFile as jest.Mock).mockResolvedValue(mockData)

    const result = await convertFileFormat(mockFile, mockExtension)

    expect(result).toBeInstanceOf(File)
    expect(result.name).toBe(mockOutputFileName)
  })
})
