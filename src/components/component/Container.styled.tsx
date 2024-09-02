import styled from "styled-components";
import ContainerProps from "../../models/ContainerProps";

const Container = styled.div<ContainerProps>`
    background-color: ${(props) => props.backgroundColor ? props.backgroundColor : 'none'};
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    color: ${(props) => props.color ? props.color : "#fff"};
    margin: ${(props) => props.margin ? props.margin : 0};
    padding: ${(props) => props.padding ? props.padding : 0};
    display: ${(props) => props.display ? props.display : 'block'};
    flex-direction: ${(props) => props.flexDirection ? props.flexDirection : 'row'};
    justify-content: ${(props) => props.justifyContent ? props.justifyContent : 'start'};
    align-items: ${(props) => props.alignItems ? props.alignItems : 'start'};
    overflow-y: ${(props) => props.overflowY ? props.overflowY : 'hidden'}; 
    

`

export default Container;