import styled from "styled-components";

export const InputPrompt = styled.textarea`
    width: 95%;
    height: 60px;
    padding: 10px;
    box-sizing: border-box;
    border: 1px solid #7289DA;
    border-radius: 10px;
    outline: none;
    font-size: 16px;
    line-height: 1.5;
    resize: none;
    overflow-y: auto;
    transition: border 0.3s ease, box-shadow 0.3s ease;
    background-color: #23272A;
    color: #FFFFFF;
    margin-bottom: 10px;

    &:focus {
        border-color: #99AAB5;
        box-shadow: 0 0 5px rgba(114, 137, 218, 0.5);
    }

    &::placeholder {
        color: #99AAB5;
        opacity: 0.8;
    }
`;
