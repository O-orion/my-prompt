import styled from 'styled-components';

export const DivMensagens = styled.div`
    width: 100%;
    height: 80%;
    background-color: #2C2F33;
    color: #FFFFFF;
    margin-bottom: 10px;
    overflow-y: auto;
    overflow-x: hidden;
    border-radius: 10px;
    padding: 10px;
    display: flex;
    flex-direction: column;

    & > div:last-child {
        margin-top: auto;
    }

    box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.3);
`;
