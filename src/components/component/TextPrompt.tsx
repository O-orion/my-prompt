import styled from "styled-components";

export const TextPrompt = styled.p`
    font-size: 15px;
    color: #FFFFFF;
    word-wrap: break-word;
    word-break: break-word;
    white-space: pre-wrap;
    overflow-wrap: break-word;
    margin: 5px 0;
    padding: 8px;
    background-color: #7289DA;
    border-radius: 5px;
    max-width: 80%;
    align-self: flex-start;

    &:nth-child(even) {
        background-color: #99AAB5;
        align-self: flex-end;
    }
`;
