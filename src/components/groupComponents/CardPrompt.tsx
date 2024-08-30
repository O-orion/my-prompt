import Container from "../component/Container.styled";
import { TextPrompt } from "../component/TextPrompt";


export function CardPrompt() {
    return (
        <Container color="#000" width="100%" height="auto" padding="5px">
            <TextPrompt>Meu Texto</TextPrompt>
        </Container>
    )
}