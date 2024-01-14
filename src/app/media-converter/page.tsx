import { Converter } from '@/app/media-converter/_components'
import { Heading } from '@/components/modules'
import { Container } from '@/components/ui'
import { routes } from '@/config'
import { Metadata } from 'next'

export default function Page() {
  return (
    <Container>
      <Heading order={2}>{routes.mediaConverter.label}</Heading>
      <Converter />
    </Container>
  )
}

export const metadata: Metadata = {
  title: routes.mediaConverter.label,
}
