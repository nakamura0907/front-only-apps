import { Heading } from "@/components/modules/Heading";
import { routes } from "@/config";
import { Container } from "@repo/ui";
import { RichEditor } from "@repo/app-memo"
import { Metadata } from 'next'

export default function Page() {
    return (
        <Container>
            <Heading order={2}>{routes.memo.label}</Heading>
            <RichEditor />
        </Container>
    )
}

export const metadata: Metadata = {
    title: routes.memo.label,
}