export const meta = {
  description: 'フロントエンドだけで動作するNext.jsアプリケーション集',
  title: {
    default: 'Front Only Apps',
    separator: '|',
  },
} as const

export const routes = {
  mediaConverter: {
    description: '音声や動画の変換アプリケーション',
    label: 'メディア変換',
    path: '/media-converter',
  },
  memo: {
    label: 'Webメモ帳',
    path: '/memo',
  },
} as const
