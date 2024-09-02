import styled from "styled-components";
import ContainerProps from "../../models/ContainerProps";

const Container = styled.div<ContainerProps>`
    background-color: ${(props) => props.backgroundColor ? props.backgroundColor : '#2C2F33'};
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    color: ${(props) => props.color ? props.color : "#FFFFFF"};
    margin: ${(props) => props.margin ? props.margin : 0};
    padding: ${(props) => props.padding ? props.padding : 0};
    display: ${(props) => props.display ? props.display : 'flex'};
    flex-direction: ${(props) => props.flexDirection ? props.flexDirection : 'column'};
    justify-content: ${(props) => props.justifyContent ? props.justifyContent : 'center'};
    align-items: ${(props) => props.alignItems ? props.alignItems : 'center'};
    overflow-y: ${(props) => props.overflowY ? props.overflowY : 'hidden'};
    font-family: 'Roboto', sans-serif;
    border-radius: 10px;
`;

export default Container;
