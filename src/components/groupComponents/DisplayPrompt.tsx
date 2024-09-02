import React, { useState } from "react";
import Container from "../component/Container.styled";
import { DivMensagens } from "../component/DivMensagens";
import { InputPrompt } from "../component/Input";
import { TextPrompt } from "../component/TextPrompt";
import { newPrompt } from "../../services/GeminiApiService";

export function DisplayPrompt() {
    const [prompts, setPrompts] = useState<string[]>([]);

    const newResponseGemini = async (prompt: string): Promise<string> => {
        return await newPrompt(prompt); // Retorna o resultado da chamada para newPrompt
    }

    const handleKeyPress = async (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (event.key === 'Enter' && event.currentTarget.value.trim() !== "") {
            
            event.preventDefault(); // Evita a quebra de linha padrão no textarea
            
            const promptValue = event.currentTarget.value.trim();
            setPrompts([...prompts, promptValue])

            try {
                const result = await newResponseGemini(promptValue);
                setPrompts([...prompts, result])
            } catch (error) {
                console.error("Error processing new prompt:", error);
            }

            if (event.currentTarget) {
                event.currentTarget.value = ""; // Limpa o campo de entrada
            }

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