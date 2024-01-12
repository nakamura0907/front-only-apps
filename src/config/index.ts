export const meta = {
  description: 'フロントエンドだけで動作するNext.jsアプリケーション集',
  title: {
    default: 'Front Only Apps',
    separator: '|',
  },
} as const

export const routes = {
  memo: {
    label: 'Webメモ帳',
    path: '/memo',
  },
} as const
