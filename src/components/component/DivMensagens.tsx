import styled from 'styled-components';

export const DivMensagens = styled.div`
    width: 90%;
    height: 80%;
    background-color: #F9F9F9;
    color: #000;
    margin-bottom: 5px;
    overflow-y: auto; // Assegura que o scroll seja adicionado se necessário
    overflow-x: hidden;
    border-radius: 10px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    
    // Use a margin-top: auto na última mensagem para empurrá-las para baixo
    & > div:last-child {
        margin-top: auto;
    }
`;
