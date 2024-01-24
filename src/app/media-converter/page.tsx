import { Converter } from '@/app/media-converter/_components'
import { Heading } from '@/components/modules'
import { Container, Text } from '@/components/ui'
import { routes } from '@/config'
import { Metadata } from 'next'

export default function Page() {
  return (
    <Container>
      <Heading order={2}>{routes.mediaConverter.label}</Heading>
      <Text c="gray" mb="sm" size="sm">
        ご注意&#58;
        iPhoneの特定バージョンなど一部の端末では、このアプリケーションが正常に動作しない可能性があります。
      </Text>
      <Converter />
    </Container>
  )
}

export const metadata: Metadata = {
  title: routes.mediaConverter.label,
}
