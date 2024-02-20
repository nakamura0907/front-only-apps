import { Heading } from "@/components/modules/Heading";
import { routes } from "@/config";
import { Container } from "@repo/ui";
import { Converter } from "@repo/app-media-converter"

export default function Page() {
    return(
        <Container>
            <Heading order={2}>{routes.mediaConverter.label}</Heading>
            <Converter />
        </Container>
    )
}