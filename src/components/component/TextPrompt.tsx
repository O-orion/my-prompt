import styled from "styled-components";

export const TextPrompt = styled.p`
    font-size: 15px;
    color: black;
    word-wrap: break-word;  /* Quebra palavras longas */
    word-break: break-word; /* Quebra palavras em qualquer ponto, se necessário */
    white-space: pre-wrap;  /* Mantém os espaços e quebras de linha como no texto original */
    overflow-wrap: break-word; /* Quebra o texto ao alcançar o limite do container */
`;
