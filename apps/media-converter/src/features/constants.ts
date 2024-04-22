type MediaFormat = {
  extension: string;
  mimeType: string;
};

export const audioFormats = [
  { extension: 'wav', mimeType: 'audio/wav' },
  { extension: 'mp3', mimeType: 'audio/mpeg' },
  { extension: 'aac', mimeType: 'audio/aac' },
  { extension: 'ogg', mimeType: 'audio/ogg' },
  { extension: 'flac', mimeType: 'audio/flac' },
] as const satisfies MediaFormat[];

export const videoFormats = [
  { extension: 'mp4', mimeType: 'video/mp4' },
  { extension: 'avi', mimeType: 'video/x-msvideo' },
  { extension: 'mkv', mimeType: 'video/x-matroska' },
  { extension: 'webm', mimeType: 'video/webm' },
  { extension: 'mov', mimeType: 'video/quicktime' },
] as const satisfies MediaFormat[];

// アプリケーションが許可するすべてのメディアタイプ
export const acceptedMediaTypes = [
  ...audioFormats.map((format) => format.mimeType),
  ...videoFormats.map((format) => format.mimeType),
].join(',');
