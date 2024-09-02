import styled from "styled-components";

export const InputPrompt = styled.textarea`
    width: 90%;
    height: 50px;  // Altura fixa para o textarea
    padding: 10px;
    box-sizing: border-box;
    border: 1px solid #ccc;
    border-radius: 5px;
    outline: none;
    font-size: 16px;
    line-height: 1.5;
    resize: none;  // Desabilita o redimensionamento manual
    overflow-y: auto;  // Adiciona o scroll vertical
    transition: border 0.3s ease;

    &:focus {
        border-color: #007bff;
        box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
    }

    &::placeholder {
        color: #888;
        opacity: 0.7;
    }
`;
