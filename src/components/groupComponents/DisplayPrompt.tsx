import React, { useState } from "react";
import Container from "../component/Container.styled";
import { DivMensagens } from "../component/DivMensagens";
import { InputPrompt } from "../component/Input";
import { TextPrompt } from "../component/TextPrompt";


export function DisplayPrompt() {
    const [prompts, setPrompts] = useState<string[]>([]);

    const handleKeyPress = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (event.key === 'Enter' && event.currentTarget.value.trim() !== "") {
            setPrompts([...prompts, event.currentTarget.value])
            event.currentTarget.value = "";
        }
    }
    return  (
        <Container width="100%" height="100%" >
            <DivMensagens>
                {
                    prompts.map((prompt, index) => (
                        <TextPrompt key={index}>{prompt}</TextPrompt>
                    ))
                }
            </DivMensagens>
            <InputPrompt onKeyUp={handleKeyPress} placeholder="Fala, patrão!" ></InputPrompt>
        </Container>
    )
}