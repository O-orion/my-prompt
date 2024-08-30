import Container from "../component/Container.styled";
import { InputPrompt } from "../component/Input";
import { BoxPrompts } from "../groupComponents/BoxPrompts";

export function DisplayPrompt() {
    return (
        <Container color="#000" width="100%" height="100%" padding="0" >
            <BoxPrompts></BoxPrompts>
            <InputPrompt placeholder="Fala patraão!"></InputPrompt>
        </Container>
    )
}